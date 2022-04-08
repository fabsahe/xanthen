<template lang="pug">
  div(
    v-view="viewHandler"
  )
    v-carousel(
      cycle
      height="500"
      hide-delimiter-background
      show-arrows-on-hover
    )
      v-carousel-item(
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"        
      )

</template>

<script>
export default {
  name: 'XCarousel',

  props: {
    current: {
      type: Number,
      default: 0
    }
  },

  data: () => ({
    items: [
      {
        src: require('@/assets/XANTHEN-01.jpg')
      },
      {
        src: require('@/assets/XANTHEN-02.jpg')
      },
      {
        src: require('@/assets/XANTHEN-03.jpg')
      },
      {
        src: require('@/assets/XANTHEN-04.jpg')
      },
      {
        src: require('@/assets/XANTHEN-05.jpg')
      },
      {
        src: require('@/assets/XANTHEN-06.jpg')
      },
      {
        src: require('@/assets/XANTHEN-07.jpg')
      }
    ],

    viewEvent: {
      type: '',
      percentInView: 0,
      percentTop: 0,
      percentCenter: 0
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

<style lang="scss" scoped></style>
