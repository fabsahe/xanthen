<template>
  <div :id="'s' + index" v-view="viewHandler" v-view.once class="item">
    Percents of this element ({{ index }}): type - {{ viewEvent.type }}, in view
    - {{ viewEvent.percentInView }}, top view - {{ viewEvent.percentTop }},
    center - {{ viewEvent.percentCenter }} <br />
    Once datetime: {{ onceTime && onceTime.toISOString() }}
  </div>
</template>

<script>
export default {
  name: 'XItem',

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
    onceTime: null,
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
      if (e.percentTop < 0.7 && e.percentTop > 0.3) {
        let section = parseInt(e.target.element.id.substring(1, 2))

        if (this.current != section) {
          this.$emit('new-section', section)
          this.$store.commit('changeSection', section)
        }
      }
    },
    onceHandler() {
      this.onceTime = new Date()
    }
  }
}
</script>

<style lang="scss"></style>
