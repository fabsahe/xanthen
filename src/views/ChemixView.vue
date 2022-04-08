<template lang="pug">
  v-main(class="home")
    div(class="chemixd")
      span(class="chemix1") Hola 
      span(class="chemix2") Chemix
    
   
</template>

<script>
export default {
  name: 'ChemixView',

  components: {},

  data: () => ({}),

  methods: {}
}
</script>

<style scoped>
.chemixd {
  margin-top: 3rem;
}
.chemix1 {
  font-size: 3rem;
  color: #0d779c;
}
.chemix2 {
  font-size: 3rem;
  color: #79b829;
}
</style>
