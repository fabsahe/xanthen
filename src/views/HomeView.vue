<template lang="pug">
  v-main(class="home")

      XCarousel(
        :current="currentSection"
        @new-section="setSection"
      )
      
      section(id="conocenos")
        XAbout(
          :index="1" 
          key="item1" 
          :current="currentSection" 
          @new-section="setSection"
        )  

      section(id="servicios")
        XServices(
          :index="2" 
          key="item2" 
          :current="currentSection" 
          @new-section="setSection" 
        )

      section(id="contacto")
        XContact(
          :index="3" 
          key="item3" 
          :current="currentSection" 
          @new-section="setSection" 
        )
   
</template>

<script>
import XCarousel from '@/components/XCarousel.vue'
import XAbout from '@/components/XAbout.vue'
import XServices from '@/components/XServices.vue'
import XContact from '@/components/XContact.vue'

export default {
  name: 'HomeView',

  components: {
    XCarousel,
    XAbout,
    XServices,
    XContact
  },

  data: () => ({
    currentSection: 0
  }),

  methods: {
    setSection: function (s) {
      this.currentSection = s
    }
  }
}
</script>

<style scoped>
.item {
  color: #222;
  margin-top: 1rem;
  border: 4px solid #f00;
  opacity: 0.2;
  background-color: #fff;
  height: 115vh;
  transition: opacity 1s 0.1s, border 1s, background-color 1s, color 1s 0.2s;
}

.item.view-in--gt-half {
  color: #333;
  border: 4px solid blue;
  opacity: 0.5;
}

.item.view-in--full {
  opacity: 1;
  background-color: #fff;
  color: #333;
  border: 4px solid #0f0;
}

.start-mark {
  width: 100%;
  height: 1vh;
  background: #4f5dac;
  position: relative;
  top: 0;
  z-index: 10;
}
</style>
