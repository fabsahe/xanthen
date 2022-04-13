<template lang="pug">
  div(class="x-services" v-view="viewHandler")
    v-container

      v-row 
        v-col(cols="12" justify="center")
          h1(class="services-h1") Servicios

    v-container
      v-row
        v-col(cols="3")
          v-card(
            elevation="2"
            v-bind:class="[show['s1'] ? 'card-active' : '', 'rounded-lg']"
            @click="showCard('s1')"
          )
            v-card-text
              v-img(
                src="@/assets/icon_1.svg"
                width="80"
                class="mx-auto"
              )
              h2(class="service-title") Gestión 
                br 
                | ambiental

        v-col(cols="3")
          v-card(
            elevation="2"
            v-bind:class="[show['s2'] ? 'card-active' : '', 'rounded-lg']"
            @click="showCard('s2')"
          )
            v-card-text
              v-img(
                src="@/assets/icon_2.svg"
                width="80"
                class="mx-auto"
              )
              h2(class="service-title") Seguridad 
                br 
                | empresarial

        v-col(cols="3")
          v-card(
            elevation="2"
            v-bind:class="[show['s3'] ? 'card-active' : '', 'rounded-lg']"
            @click="showCard('s3')"
          )
            v-card-text
              v-img(
                src="@/assets/icon_3.svg"
                width="80"
                class="mx-auto"
              )
              h2(class="service-title") Gasolineras y Sector Hidrocarburos

        v-col(cols="3")
          v-card(
            elevation="2"
            v-bind:class="[show['s4'] ? 'card-active' : '', 'rounded-lg']"
            @click="showCard('s4')"
          )
            v-card-text
              v-img(
                src="@/assets/icon_4.svg"
                width="80"
                class="mx-auto"
              )
              h2(class="service-title") Cursos y capacitaciones    
        
    v-container 
      v-row
        v-col(cols="1")
        v-col(clos="10")
          v-sheet(
            elevation="2"
            v-show="show['s1']"
            class="mx-auto rounded-lg text-left service-info"
            color="#ffffff"
          )
            ul
              li Manifiestos de Impacto Ambiental (MIA) o Informe Preventivo (IP). 
              li Programa de Prevención de Accidentes (PPA).
              li Elaboración y Presentación de Estudio de Riesgo Ambiental. 
              li Elaboración y Presentación de la Cédula de Operación Anual (COA) Federal y Estatal.
              li Gestión y Obtención de Licencia de Ambiental Única. 
              li Estudios de Emisiones a la Atmósfera.
              li Estudios de Ruido Ambiental.
              li Auditorias para Cumplimiento Normativo de la SEGAM y SEMARNAT. 
              li Cumplimiento de Normatividad en el Sector Hidrocarburos. 
              li Cursos y Capacitaciones
              li Planes de Manejo de Residuos 
              li Estudios y Tramites de Residuos Peligroso (RP) y de Manejo Especial (RME)
              li Elaboración de Inventarios de Emisiones

          v-sheet(
            elevation="2"
            v-show="show['s2']"
            class="mx-auto rounded-lg text-left service-info"
            color="#ffffff"
          )
            ul
              li Diseño, Elaboración y Presentación de Programa Interno de Protección Civil (PIPC) 
              li Capacitaciones en materia de Seguridad e Higiene.
              li Programación de Simulacros.
              li Estudios de Normas Oficiales Mexicanas:
            div(class="normas")
              ul
                li NOM-002-STPS-2010
                li NOM-005-STPS-1998
                li NOM-010-STPS-2014
                li NOM-011-STPS-2001
                li NOM-022-STPS-2015
                li NOM-025-STPS-2008
                li NOM-030-STPS-2009
                li NOM-035-STPS-2018
                li NOM-081-SEMARNAT-1994
                li NOM-085-SEMARNAT-2011
                li NOM-020-STPS-2002
            ul
              li Dictamen de Seguridad Estructural.
              li Dictamen de Instalaciones Eléctricas
              li Dictamen de Instalaciones de Gas.

          v-sheet(
            elevation="2"
            v-show="show['s3']"
            class="mx-auto rounded-lg text-left service-info"
            color="#ffffff"
          )
            ul
              li Gestión para el cumplimiento de normatividad del Sector Hidrocarburos
              li Diseño e Implementación del SASISOPA 
              li Obtención de la Clave Única del Regulado
              li Protocolo de Respuesta a Emergencias (PRE)
              li Licencia Ambiental Única y Licencia de Funcionamiento del Sector Hidrocarburos
              li Elaboración y Presentación de la Cedula de Operación Anual COA Federal
              li Elaboración y presentación de los Programas Internos de Protección Civil PIPC

          v-sheet(
            elevation="2"
            v-show="show['s4']"
            class="mx-auto rounded-lg text-left service-info"
            color="#ffffff"
          )
            ul
              li Gestión y legislación ambiental en la industria
              li Cumplimiento normativo, ambiental y sector de hidrocarburos
              li Recursos bióticos y educación ambiental 
              li Contaminación de ecosistemas
              li Contaminación fuentes fijas industriales


        v-col(cols="1")

    v-container(class="service-decoration")
      v-row
        v-col(cols="12")
          p(class="py-1")
      v-row
        v-col(cols="2")
          v-img(
            src="@/assets/rec1.svg"
            width="50"
            class="mx-auto"
          )
        v-col(cols="2")
          v-img(
            src="@/assets/rec7.svg"
            width="70"
            style="margin-top: 6px"
            class="mx-auto"
          )
        v-col(cols="2")
          v-img(
            src="@/assets/rec4.svg"
            width="40"
            class="mx-auto"
          )
        v-col(cols="2")
          v-img(
            src="@/assets/rec5.svg"
            width="70"
            class="mx-auto"
          )
        v-col(cols="2")
          v-img(
            src="@/assets/rec6.svg"
            width="70"
            class="mx-auto"
          )
        v-col(cols="2")
          v-img(
            src="@/assets/rec3.svg"
            width="45"
            class="mx-auto"
          )
    div(class="end-decoration")         
</template>

<script>
export default {
  name: 'XService',

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
    },
    show: {
      s1: true,
      s2: false,
      s3: false,
      s4: false
    },
    show1: false,
    iconWidth: 160,
    cardColor: '#E8EAF6'
  }),

  methods: {
    viewHandler(e) {
      if (e.type === 'exit') return
      Object.assign(this.viewEvent, e)
      if (e.percentTop < 0.7 && e.percentTop > 0.3) {
        if (this.current != 2) {
          this.$emit('new-section', 2)
          this.$store.commit('changeSection', 2)
        }
      }
    },
    showCard(n) {
      for (let item in this.show) {
        if (item === n) {
          if (this.show[item] === false) {
            this.show[item] = true
          } else {
            console.log('ya estaba seleccionado')
          }
        } else {
          this.show[item] = false
        }
      }
    }
  }
}
</script>

<style scoped>
.x-services {
  width: 100%;
  padding-top: 1rem;
  background-color: #e4f7e4;
}
.services-h1 {
  font-family: 'Comfortaa', cursive;
  color: #0e789c;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}
.service-row {
  margin-bottom: 5px;
}
.service {
  margin-top: 10px;
  padding-right: 35px;
  height: 80px;
  width: 320px;
  background-color: #0e789c;
  color: #fff;
  border-radius: 18px;
}
.service1 {
  padding-top: 25px;
}
.service2 {
  padding-top: 11px;
}
.service3 {
  padding-top: 6px;
  padding-left: 25px;
}
.service-title {
  font-family: 'Comfortaa', cursive;
  font-size: 1.2rem;
  color: #0e789c;
  margin-bottom: 0.4rem;
}
.v-card--link:before {
  background: none;
}
.v-card.v-sheet.theme--light:hover {
  border-bottom: 6px solid #79b829 !important;
  cursor: pointer;
}
.card-active {
  border-bottom: 6px solid #79b829 !important;
}
.img-container {
  width: 200px;
  margin-top: -120px;
  margin-left: 270px;
  background: url('@/assets/bg-white.png') no-repeat right;
}
.icon-service:hover {
  cursor: pointer;
  opacity: 0.7;
}
.service-info {
  padding: 2rem;
  margin-top: 1rem;
}
.service-info ul {
  list-style: none;
}
.service-info ul li {
  font-size: 1.2rem;
  color: #222;
  line-height: 2rem;
}
.service-info ul li::before {
  content: '\2022';
  color: #79b829;
  font-weight: bold;
  font-size: 1.4rem;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
.normas {
  margin-left: 3rem;
}
.tiny-card {
  margin-top: 20px;
}
.space-ul {
  margin-top: 5rem;
}
.connection2 {
  position: absolute;
  margin-top: 38px;
  margin-left: -98px;
  width: 120px;
  height: 24px;
  z-index: 3;
}
.dot1 {
  height: 16px;
  width: 16px;
  background-color: rgba(121, 184, 41, 0.7);
  border-radius: 50%;
  display: inline-block;
  margin-top: 38px;
  margin-left: -95px;
  position: absolute;
}
.line {
  height: 6px;
  width: 98px;
  background-color: rgba(121, 184, 41, 0.7);
  display: inline-block;
  margin-top: 43px;
  margin-left: -85px;
  position: absolute;
  z-index: 3;
}
.dot2 {
  height: 16px;
  width: 16px;
  background-color: rgba(121, 184, 41, 0.7);
  border-radius: 50%;
  display: inline-block;
  margin-top: 38px;
  margin-left: 10px;
  position: absolute;
  z-index: 3;
}
.end-decoration {
  width: 100%;
  height: 40px;
  background-color: #79b829;
}
.factory-bg {
  width: 100%;
  height: 146px;
  margin-top: -40px;
  margin-bottom: -2px;
  background: url('@/assets/fabrica.png') no-repeat;
}
.no-icon {
  margin-bottom: -500px;
}
.service-decoration {
  width: 100%;
  margin-bottom: -20px;
}
</style>
