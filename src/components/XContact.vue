<template lang="pug">
  v-container(class="contact" v-view="viewHandler")
    div(class="space-contact")
    v-row
      v-col(cols="12")
        v-card(class="mx-auto")
          v-row
            v-col(cols="6")
              v-card-text(class="info-redes")
                div(class="text-left")
                  h2(class="contact-title") Contacto
                  p(class="contact-data")
                    i(class="fa-solid fa-phone contact-icon")
                    | (444) 704 6726
                  p(class="contact-data")
                    i(class="fa-solid fa-phone contact-icon")
                    | (444) 547 0523
                  p(class="contact-data")
                    i(class="fa-solid fa-envelope contact-icon")
                    | contacto@xanthen.com
                v-divider 

                div(style="margin-bottom: 1rem")
                v-btn(
                  class="mx-2"
                  fab
                  dark
                  color="blue darken-4"  
                  href="https://www.facebook.com/Xanth%C3%A9n-101964082277064" 
                  target="_blank"              
                )
                  i(class="fa-brands fa-facebook-f fa-xl")

                v-btn(
                  class="mx-2"
                  fab
                  dark
                  color="purple darken-1"
                  href="https://www.instagram.com/xanthen_sa/" 
                  target="_blank"                   
                )
                  i(class="fa-brands fa-instagram fa-xl")

            v-divider(vertical)
            v-col(cols="6")
              v-container(fill-height fluid)
                v-row(align="center")
                  v-card-text(v-show="success" )
                    i(class="fa-solid fa-envelope fa-bounce email-icon")
                    p(class="email-result") Gracias, su mensaje ha sido enviado


                  v-card-text(class="formulario" v-show="expand")
                    v-form(
                      ref="form"
                      v-model="valid"
                      lazy-validation
                    )
                      p(class="text-left etiqueta") Nombre
                      v-tooltip(v-model="invalidFields['name']" right color="error")
                        template(v-slot:activator="{ on, attrs }")
                          v-text-field(
                            v-model="name"
                            @blur="handleBlur($event, 'name')"
                            :error="invalidFields['name']"
                            required
                            outlined
                            dense
                          )
                        span {{ tooltipInfo['name'] }}

                      p(class="text-left etiqueta") Correo
                      v-tooltip(v-model="invalidFields['email']" right color="error")
                        template(v-slot:activator="{ on, attrs }")
                          v-text-field(
                            v-model="email"
                            @blur="handleBlur($event, 'email')"
                            :error="invalidFields['email']"
                            required
                            outlined
                            dense
                          )
                        span {{ tooltipInfo['email'] }}

                      p(class="text-left etiqueta") Mensaje
                      v-tooltip(v-model="invalidFields['message']" right color="error")
                        template(v-slot:activator="{ on, attrs }")
                          v-textarea(
                            v-model="message"
                            @blur="handleBlur($event, 'message')"
                            :error="invalidFields['message']"
                            required
                            outlined
                          )
                        span {{ tooltipInfo['message'] }}

                      v-btn(
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="validate"
                      ) Enviar
  
</template>

<script>
import axios from 'axios'

export default {
  name: 'XContact',

  props: {
    index: {
      type: Number,
      default: 0
    },
    current: {
      type: Number,
      default: 0
    }
  },

  data: () => ({
    viewEvent: {
      type: ''
    },
    valid: true,
    name: '',
    email: '',
    message: '',
    isValidating: { name: false, email: false, message: false },
    invalidFields: { name: false, email: false, message: false },
    tooltipInfo: { name: '', email: '', message: '' },
    emailRules: [(v) => !!v || '', (v) => /.+@.+\..+/.test(v) || ''],
    success: false,
    expand: true
  }),

  watch: {
    name: function (val) {
      if (this.isValidating['name']) {
        this.validateField(val, 'name')
      }
    },
    email: function (val) {
      if (this.isValidating['email']) {
        this.validateField(val, 'email')
      }
    },
    message: function (val) {
      if (this.isValidating['message']) {
        this.validateField(val, 'message')
      }
    }
  },

  methods: {
    viewHandler(e) {
      if (e.type === 'exit') return
      Object.assign(this.viewEvent, e)
      if (e.percentTop < 0.7 && e.percentTop > 0.2) {
        if (this.current != 3) {
          this.$emit('new-section', 3)
          this.$store.commit('changeSection', 3)
        }
      }
    },

    sendMail() {
      const path =
        'https://us-central1-xanthen-mail.cloudfunctions.net/app/send-email'
      let emailForm = {
        name: this.name,
        email: this.email,
        message: this.message
      }

      axios
        .post(path, emailForm)
        .then((response) => this.emailSuccess(response))
        .catch((error) => console.log('hubo un error', error))
    },

    validate(evt) {
      evt.preventDefault()
      let values = Object.values(this.invalidFields)
      let isInvalid = values.includes(true)
      if (!isInvalid) {
        this.sendMail()
      }
    },

    handleBlur(e, origin) {
      if (!(origin in this.isValidating)) {
        return
      }
      if (!this.isValidating[origin]) {
        this.isValidating[origin] = true
        this.validateField(e.target.value, origin)
      }
    },

    validateField(v, origin) {
      const infos = {
        name: 'Ingrese su nombre',
        email: 'Debe indicar un correo',
        message: 'Ingrese un mensaje'
      }

      if (!v) {
        this.invalidFields[origin] = true
        this.tooltipInfo[origin] = infos[origin]
      } else {
        this.invalidFields[origin] = false
        this.tooltipInfo[origin] = 'false'
      }
      if (origin === 'email' && !!v) {
        let etest = /.+@.+\..+/.test(v)
        if (!etest) {
          this.invalidFields[origin] = true
          this.tooltipInfo[origin] = 'Ingresa un correo válido'
        } else {
          this.invalidFields[origin] = false
          this.tooltipInfo[origin] = ''
        }
      }
    },

    emailSuccess(res) {
      this.success = true
      this.expand = false
      console.log(res)
    }
    // Fin de métodos
  }
}
</script>

<style lang="scss" scoped>
.contact {
  margin-bottom: 3rem;
}
.space-contact {
  height: 3rem;
}
.contact-title {
  font-family: 'Comfortaa', cursive;
  font-size: 2rem;
  color: #0d779c;
  margin: 0 0 3rem 0;
}
.contact-data {
  color: #0d779c;
  font-size: 1.1rem;
}
.contact-icon {
  color: #79b829;
  margin-right: 10px;
}
.info-redes {
  padding: 2rem 5rem 1rem 5rem;
  height: 485px;
}

.formulario {
  padding: 3rem 5rem 1rem 5rem;
}
.etiqueta {
  font-family: 'Comfortaa', cursive;
  font-weight: 700;
  font-size: 110%;
  color: #0d779c;
  margin: -0.6rem 0 0.2rem 0;
}
.email-icon {
  font-size: 4em;
  color: #79b829;
  --fa-animation-iteration-count: 1;
}
.email-result {
  font-family: 'Comfortaa', cursive;
  font-weight: 700;
  font-size: 1rem;
  padding-top: 1rem;
  color: #0d779c;
}
</style>
