<template lang="pug">
  v-footer(
    dark
    padless      
  )
    v-card(
      flat
      tile
      class="indigo lighten-1 white--text text-center"
      width="100%"     
    )

      v-card-text
        v-img(
          src="@/assets/x-footer2.png"
          width="200"
          class="mx-auto"
        )
      v-divider

      v-card-text(
        class="white--text"
      ) &copy; {{ new Date().getFullYear() }} — Xanthén 
        br
        | Servicios ambientales y seguridad empresarial


</template>

<style scoped>
.green-x {
  background-color: #0d779c;
}
.x-img {
  text-align: center;
}
</style>
