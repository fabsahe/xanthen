<template lang="pug">
  div(class="x-us" v-view="viewHandler")
    v-container
        v-row
          v-col(cols="1")
          v-col(cols="10" justify="center")
            div(class="about-us")
              v-img(
                src="@/assets/xanthen1.png"
                width="300"
                class="mx-auto"
                transition="scale-transition"
              )

    v-container
      v-row
        v-col(cols="4")
          v-card(
            class="mx-auto card1"
            max-width="320"
          )

            v-img(
              height="426"
              src="@/assets/foto1.jpeg"              
            )

        v-col(cols="4")
          div(class="spacer-img")
          v-card(
            class="mx-auto card2"
            max-width="370"
          )

            v-img(
              height="278"
              src="@/assets/foto2.jpeg"              
            )

        v-col(cols="4")
          v-card(
            class="mx-auto card1"
            max-width="300"
          )

            v-img(
              height="400"
              src="@/assets/foto3.jpeg"              
            )

    div(class="end-about")
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
  margin-top: 0.2rem;
}

.nosotros-h1 {
  font-family: 'Comfortaa', cursive;
  color: #0d779c;
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}
.end-about {
  width: 100%;
  height: 260px;
  background-color: #d7ccc8;
}
.card1 {
  margin-bottom: -180px;
}
.card2 {
  margin-bottom: -260px;
}
.card3 {
  margin-bottom: -280px;
}
.spacer-img {
  height: 60px;
}
</style>
