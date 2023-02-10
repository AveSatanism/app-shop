<template>
  <div class="app_flex">
    <v-container class="app_container">
      <appCard>Lodash 
        <template #subtitle>A modern JavaScript utility library<br> delivering modularity,<br> performance & extras.</template>
        <template #button>      
          <v-btn
            variant="outlined"
            size="small"
            @click="install('lodash')"
          >
            start
          </v-btn></template>
        <template #image><v-img src="https://lodash.com/assets/img/lodash.svg"></v-img></template>
      </appCard>
      <appCard>Chalk
        <template #subtitle>Terminal string styling done right</template>
        <template #button>      
          <v-btn
            variant="outlined"
            size="small"
            @click="install('chalk')"
          >
            start
          </v-btn></template>
        <template #image><v-img src="https://raw.githubusercontent.com/chalk/chalk/HEAD/media/logo.svg"></v-img></template>
      </appCard>
      <appCard>Quasar
        <template #subtitle>Build high-performance VueJS<br> user interfaces in<br> record time.</template>
        <template #button>      
          <v-btn
            variant="outlined"
            size="small"
            @click="install('quasar')"
          >
            start
          </v-btn></template>
        <template #image><v-img src="https://cdn.quasar.dev/logo-v2/svg/logo-vertical.svg"></v-img></template>
      </appCard>
    </v-container>
  </div>
</template>
<script>
import appCard from './components/appCard.vue'

export default {
  name: 'app',
  components: {
    appCard,
  },
  data() {
   return {
    appName: ''
   }
  },
  methods: {
    install(appName) {
      $fetch('/api/installModule', { query:{ moduleName: appName } })
      .then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style>
.app_flex {
  display: flex;
  justify-content: center;
}
.app_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  gap: 20px;
}
.v-card-actions {
  padding: 8px 16px !important;
}
 button {
  height: 20px;
  width: 40px;
 }
</style>
