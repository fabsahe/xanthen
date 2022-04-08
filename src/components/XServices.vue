<template lang="pug">
  div(class="x-services" v-view="viewHandler")
    v-container
      v-row 
        v-col(cols="12" justify="center")
          h1(class="services-h1") Servicios

          v-row(class="service-row")
            v-col(cols="5")

              div(class="service service1")
                h3(class="service-title") Gestión Ambiental

              div(class="img-container")
                v-img(
                  src="@/assets/icon_1.svg"
                  :width="iconWidth"
                  transition="scale-transition"
                  @click="showCard('i1')"
                  class="icon-service"
                )

            v-col(cols="7")           

              div(v-show="show['i1']" class="connection text-left")
                span(class="dot1")
                span(class="line")
                span(class="dot2")

              v-card(
                v-show="show['i1']"
                class="mx-auto text-left service-info"
                :color="cardColor"
              )
                v-card-text
                  ul
                    li Manifiestos de Impacto Ambiental (MIA) o Informe Preventivo (IP). 
                    li Programa de Prevención de Accidentes (PPA).
                    li Elaboración y Presentación de Estudio de Riesgo Ambiental. 
                    li Elaboración y Presentación de la Cédula de Operación Anual (COA) Federal y Estatal.
                    li Gestión y Obtención de Licencia de Ambiental Única. 
                    li Estudios de Emisiones a la Atmósfera.
                    li Estudios de Ruido Ambiental.
                    li Auditorias para Cumplimiento Normativo de la SEGAM y SEMARNAT. 
                    li Cumplimiento de Normatividad en el Sector Hidrocarburos. 
                    li Cursos y Capacitaciones
                    li Planes de Manejo de Residuos 
                    li Estudios y Tramites de Residuos Peligroso (RP) y de Manejo Especial (RME)
                    li Elaboración de Inventarios de Emisiones

          v-row(v-show="show['ni']")
            v-col(cols="5")
            v-col(cols="7")
              v-img(
                src="@/assets/xanthen-center.png"
                width="500"
                class="mx-auto no-icon"
                transition="scale-transition"
              )  

          v-row(class="service-row")
            v-col(cols="5")

              div(class="service service1")
                h3(class="service-title")  Seguridad Empresarial

              div(class="img-container")
                v-img(
                  src="@/assets/icon_2.svg"
                  :width="iconWidth"
                  transition="scale-transition"
                  @click="showCard('i2')"
                  class="icon-service"
                )

            v-col(cols="7")
              div(v-show="show['i2']" class="connection text-left")
                span(class="dot1")
                span(class="line")
                span(class="dot2")

              v-card(
                v-show="show['i2']"
                class="mx-auto text-left service-info"
                :color="cardColor"
              )
                v-card-text
                  ul
                    li Dictamen de Seguridad Estructural.
                    li Dictamen de Instalaciones Eléctricas
                    li Dictamen de Instalaciones de Gas.
                    li Capacitaciones en materia de Seguridad e Higiene.
                    li Programación de Simulacros.
                    li Estudios de Normas Oficiales Mexicanas
                    li Diseño, Elaboración y Presentación de Programa Interno de Protección Civil (PIPC)


          v-row(class="service-row")
            v-col(cols="5")

              div(class="service service2")
                h3(class="service-title") Gasolineras y Sector Hidrocarburos

              div(class="img-container")
                v-img(
                  src="@/assets/icon_3.svg"
                  :width="iconWidth"
                  transition="scale-transition"
                  @click="showCard('i3')"
                  class="icon-service"
                )

            v-col(cols="7")
              div(v-show="show['i3']" class="connection text-left")
                span(class="dot1")
                span(class="line")
                span(class="dot2")

              v-card(
                v-show="show['i3']"
                class="mx-auto text-left service-info"
                :color="cardColor"
              )
                v-card-text
                  ul
                    li Gestión para el cumplimiento de normatividad del Sector Hidrocarburos
                    li Diseño e Implementación del SASISOPA 
                    li Obtención de la Clave Única del Regulado
                    li Protocolo de Respuesta a Emergencias (PRE)
                    li Licencia Ambiental Única y Licencia de Funcionamiento del Sector Hidrocarburos
                    li Elaboración y Presentación de la Cedula de Operación Anual COA Federal
                    li Elaboración y presentación de los Programas Internos de Protección Civil PIPC

          v-row(class="service-row")
            v-col(cols="5")

              div(class="service service1")
                h3(class="service-title") Cursos

              div(class="img-container")
                v-img(
                  src="@/assets/icon_4.svg"
                  :width="iconWidth"
                  transition="scale-transition"
                  @click="showCard('i4')"
                  class="icon-service"
                )

            v-col(cols="7")
              div(v-show="show['i4']" class="connection text-left")
                span(class="dot1")
                span(class="line")
                span(class="dot2")

              v-card(
                v-show="show['i4']"
                class="mx-auto text-left service-info tiny-card"
                :color="cardColor"
              )
                v-card-text
                  ul
                    li Aquí nomás hay cursos y capacitaciones XD

    v-container(class="service-decoration")
      v-row
        v-col(cols="2")
          v-img(
            src="@/assets/rec1.svg"
            width="50"
            class="mx-auto"
          )
        v-col(cols="2")
          v-img(
            src="@/assets/rec7.svg"
            width="70"
            style="margin-top: 6px"
            class="mx-auto"
          )
        v-col(cols="2")
          v-img(
            src="@/assets/rec4.svg"
            width="40"
            class="mx-auto"
          )
        v-col(cols="2")
          v-img(
            src="@/assets/rec5.svg"
            width="70"
            class="mx-auto"
          )
        v-col(cols="2")
          v-img(
            src="@/assets/rec6.svg"
            width="70"
            class="mx-auto"
          )
        v-col(cols="2")
          v-img(
            src="@/assets/rec3.svg"
            width="45"
            class="mx-auto"
          )
    div(class="end-decoration")         
</template>

<script>
export default {
  name: 'XService',

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
    show: {
      i1: false,
      i2: false,
      i3: false,
      i4: false,
      ni: true
    },
    show1: false,
    iconWidth: 160,
    cardColor: '#E8EAF6'
  }),

  methods: {
    viewHandler(e) {
      if (e.type === 'exit') return
      Object.assign(this.viewEvent, e)
      if (e.percentTop < 0.7 && e.percentTop > 0.3) {
        if (this.current != 2) {
          this.$emit('new-section', 2)
          this.$store.commit('changeSection', 2)
        }
      }
    },
    showCard(n) {
      let ni
      for (let item in this.show) {
        if (item === n) {
          if (this.show[item] === false) {
            this.show[item] = true
          } else {
            console.log('ya estaba seleccionado')
            this.show[item] = false
            ni = true
          }
        } else {
          this.show[item] = false
        }
      }
      if (ni) {
        this.show['ni'] = true
      }
      console.log(this.show['ni'])
    }
  }
}
</script>

<style scoped>
.x-services {
  width: 100%;
  margin-top: 1rem;
}
.services-h1 {
  font-family: 'Comfortaa', cursive;
  color: #79b829;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
}
.service-row {
  margin-bottom: 5px;
}
.service {
  margin-top: 10px;
  padding-right: 35px;
  height: 80px;
  width: 320px;
  background-color: #0e789c;
  color: #fff;
  border-radius: 18px;
}
.service1 {
  padding-top: 25px;
}
.service2 {
  padding-top: 11px;
}
.service3 {
  padding-top: 6px;
  padding-left: 25px;
}
.service-title {
  font-family: 'Comfortaa', cursive;
  font-size: 1.2rem;
}
.img-container {
  width: 200px;
  margin-top: -120px;
  margin-left: 270px;
  background: url('@/assets/bg-white.png') no-repeat right;
}
.icon-service:hover {
  cursor: pointer;
  opacity: 0.7;
}
.service-info ul li {
  list-style: none;
  font-size: 1rem;
  color: #222;
  line-height: 24px;
}
.tiny-card {
  margin-top: 20px;
}
.space-ul {
  margin-top: 5rem;
}
.connection2 {
  position: absolute;
  margin-top: 38px;
  margin-left: -98px;
  width: 120px;
  height: 24px;
  z-index: 3;
}
.dot1 {
  height: 16px;
  width: 16px;
  background-color: rgba(121, 184, 41, 0.7);
  border-radius: 50%;
  display: inline-block;
  margin-top: 38px;
  margin-left: -95px;
  position: absolute;
}
.line {
  height: 6px;
  width: 98px;
  background-color: rgba(121, 184, 41, 0.7);
  display: inline-block;
  margin-top: 43px;
  margin-left: -85px;
  position: absolute;
  z-index: 3;
}
.dot2 {
  height: 16px;
  width: 16px;
  background-color: rgba(121, 184, 41, 0.7);
  border-radius: 50%;
  display: inline-block;
  margin-top: 38px;
  margin-left: 10px;
  position: absolute;
  z-index: 3;
}
.end-decoration {
  width: 100%;
  height: 40px;
  background-color: #79b829;
}
.factory-bg {
  width: 100%;
  height: 146px;
  margin-top: -40px;
  margin-bottom: -2px;
  background: url('@/assets/fabrica.png') no-repeat;
}
.no-icon {
  margin-bottom: -500px;
}
.service-decoration {
  width: 100%;
  margin-bottom: -20px;
}
</style>
