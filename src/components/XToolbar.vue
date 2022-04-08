<template lang="pug">
  v-app-bar(
    fixed
    app
    color="#ffffff"
    elevate-on-scroll
  )
    a(href="https://www.xanthen.com")
      v-img(
        alt="Xanthén logo"
        max-width="180"
        src="@/assets/imagotipo.png"
        class="logo"
      )

    v-spacer

    div(class="x-nav")
      a( 
        href='#conocenos'
        v-smooth-scroll
        :class="[ $store.getters.section === 1 ? 'link-active' : 'nav-link' ]" 
      ) Conócenos

      a( 
        href='#servicios'
        v-smooth-scroll
        :class="[ $store.getters.section === 2 ? 'link-active' : 'nav-link' ]" 
      ) Servicios

      a( 
        href='#contacto'
        v-smooth-scroll
        :class="[ $store.getters.section === 3 ? 'link-active' : 'nav-link' ]" 
      ) Contacto


</template>

<script>
export default {
  name: 'XToolbar'
}
</script>

<style>
.logo {
  margin: 0px 0 0px 30px;
}

.x-nav {
  margin: 0.5rem 3rem 0 0;
  font-family: 'Comfortaa', cursive;
}

.nav-link {
  display: inline-block;
  position: relative;
  color: #0d779c !important;
  text-decoration: none;
  font-weight: bold;
  text-transform: capitalize;
  margin: 0 3rem 0 0;
}

.nav-link:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #0d779c;
  visibility: hidden;
  border-radius: 5px;
  transform: scaleX(0);
  transition: 0.25s linear;
}

.nav-link:hover:before,
.nav-link:focus:before {
  visibility: visible;
  transform: scaleX(1);
}

.link-active {
  display: inline-block;
  position: relative;
  color: #79b829 !important;
  text-decoration: none;
  font-weight: bold;
  text-transform: capitalize;
  margin: 0 3rem 0 0;
}

.link-active:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #79b829;
  visibility: visible;
  border-radius: 5px;
  transform: scaleX(1);
  transition: 0.25s linear;
}
</style>
