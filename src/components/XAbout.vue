<template lang="pug">
  div(class="x-us" v-view="viewHandler")
    v-container
      v-row
        v-col(cols="5" class="cont-img-1")
          v-img(
            width="270"
            src="@/assets/foto3.jpeg"
            class="mx-auto rounded-lg"
            transition="scale-transition"    
          )
        v-col(cols="7" class="text-left")
          h1(class="about-h1") ¿Quiénes somos?
          p(class="about-p") Somos una empresa de consultoría, servicios y capacitación técnica especializada en el ámbito de gestión ambiental para los sectores industrial, hidrocarburos, comercial y de servicios, conformada por un equipo multidisciplinario con experiencia en la aplicación del marco regulatorio multisectorial.

    div(class="offer")
      v-container
        v-row
          v-col(cols="7" class="text-right")
            h1(class="about-h2") ¿Qué ofrecemos?
            p(class="about-p") Soluciones en materia ambiental y Seguridad e Higiene, Desarrollo e implementación de sistemas integrales de gestión, para dar soluciones y servicios que den cumplimiento al marco regulatorio aplicable a través de la asesoría, capacitación y seguimiento de cada proceso. Capacitaciones, cursos, talleres y educación ambiental.

          v-col(cols="5" class="cont-img-2")
            v-img(
              width="270"
              src="@/assets/foto8.jpeg"
              class="mx-auto rounded-lg"
              transition="scale-transition"         
            )


</template>

<script>
export default {
  name: 'XAbout',

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
    }
  }),

  methods: {
    viewHandler(e) {
      if (e.type === 'exit') return
      Object.assign(this.viewEvent, e)
      if (e.percentTop < 0.7 && e.percentTop > 0.3) {
        if (this.current != 1) {
          this.$emit('new-section', 1)
          this.$store.commit('changeSection', 1)
        }
      }
    }
  }
}
</script>

<style>
.x-us {
  margin-top: 0rem;
}

.about-h1 {
  font-family: 'Comfortaa', cursive;
  color: #0d779c;
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}
.about-h2 {
  font-family: 'Comfortaa', cursive;
  color: #79b829;
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}
.about-p {
  font-size: 1.6rem;
}
.offer {
  margin-top: 3rem;
  background-color: #f3faf9;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.end-about {
  width: 100%;
  height: 260px;
  background-color: #d7ccc8;
}
.cont-img-1 {
  background: url('@/assets/bg-img.png') no-repeat;
}
.cont-img-2 {
  background: url('@/assets/bg-img.png') no-repeat top right;
}
.spacer-img {
  height: 60px;
}
</style>
