<template lang="pug">
  div(class="x-presentation" v-view="viewHandler")
    v-container
        v-row

          v-col(cols="6" class="text-left")
            v-container(fill-height fluid)
              v-row(
                align="center"
                class="hero-info"
              )

                h1(class="hero-h1") 
                  span(class="color-2") x
                  | anthén

                v-divider

                h1(class="hero-h2") Servicios ambientales y seguridad empresarial

                a(
                  color="#0e789c"
                  dark
                  class="btn-hero v-btn v-btn--is-elevated v-btn--has-bg theme--dark v-size--large"
                  style="background-color: rgb(14, 120, 156); border-color: rgb(14, 120, 156);"
                  href="#conocenos"
                  v-smooth-scroll
                ) 
                  span(class="v-btn__content") Conócenos

                p(class="py-1")

          v-col(cols="6")
            v-img(
              src="@/assets/foto7.jpeg"
              width="600"
              class="rounded-lg"
              decoding="async"
              transition="fade-transition"
            )

    v-container
      v-img(
        src="@/assets/xanthen-hero.png"
        width="190"
        class="mx-auto pin-hero"
        decoding="async"
        transition="scale-transition"
      ) 


</template>

<script>
export default {
  name: 'XPresentation',

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
      if (e.percentTop > 0.3 && this.current != 0) {
        this.$emit('new-section', 0)
        this.$store.commit('changeSection', 0)
      }
    }
  }
}
</script>

<style>
.x-presentation {
  width: 100%;
  background-color: #f3faf9;
  padding-top: 20px;
  padding-bottom: 2rem;
}
.pin-hero {
  margin-top: -320px;
}
.img-hero {
  margin-right: auto;
  display: block;
}
.hero-photo {
  -webkit-clip-path: polygon(0 0, 120px 450px, 600px 450px, 600px 0);
  clip-path: polygon(0 0, 120px 450px, 600px 450px, 600px 0);
  margin-left: -40px;
}
.hero-info {
  padding-left: 5rem;
}
.hero-h1 {
  font-family: 'Comfortaa', cursive;
  color: #0e789c;
  font-size: 3.5rem;
  font-weight: 700;
}
.hero-h2 {
  font-family: 'Comfortaa', cursive;
  color: #606575;
  font-size: 1.7rem;
  font-weight: 500;
  margin: 0 5rem 1rem 0rem;
}
.color-2 {
  color: #79b829;
}
.btn-hero {
  margin: 5px 0 50px 0;
}
.card-hero {
  width: 280px;
  margin: 0 auto;
  padding: 0.4rem;
}
.card-hero-cont {
  font-family: 'Comfortaa', cursive;
  font-size: 14px;
  background-color: #fff;
  padding: 2px;
  color: #4b4b4b;
  font-weight: 500;
}
.v-card.v-sheet.theme--light {
  background-color: rgba(256, 256, 256, 0.7) !important;
}
.end-about {
  width: 100%;
  height: 260px;
  background-color: #d7ccc8;
}

.spacer-img {
  height: 60px;
}
</style>
