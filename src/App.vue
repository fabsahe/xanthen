<template lang="pug">
  v-app(class="xapp")
    XToolbar
    router-view
    XFooter

</template>

<script>
import XToolbar from './components/XToolbar'
import XFooter from '@/components/XFooter.vue'

export default {
  name: 'App',

  components: {
    XToolbar,
    XFooter
  }
}
</script>

<style lang="scss">
.xapp {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
