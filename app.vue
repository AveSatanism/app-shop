<template>
  <div class="app_flex">
    <h1 class="site_title">KACHALKA</h1>
    <v-text-field v-model="serch" clearable label="Поиск" variant="solo"></v-text-field>
    <v-container class="app_container">
      <appCard v-if="searchName.includes('lodash')">Lodash 
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
      <appCard v-if="searchName.includes('chalk')">Chalk
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
      <appCard v-if="searchName.includes('quasar')">Quasar
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
      <appCard v-if="searchName.includes('quasar')">Quasar
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
      <appCard v-if="searchName.includes('quasar')">Quasar
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
      <appCard v-if="searchName.includes('quasar')">Quasar
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
      <appCard v-if="searchName.includes('quasar')">Quasar
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
    serch: '',
    nameData: ['lodash', 'chalk', 'quasar'],
    appName: ''
   }
  },
  computed: {
    searchName() {
      return this.nameData.filter( elem => {
        return elem.includes(this.serch);
      });
    },
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
  row-gap: 50px;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  background-color: #08E8DE;
}
.app_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  gap: 20px;
}
.site_title {
  font-size: 120px;
}
.v-card-actions {
  padding: 8px 16px !important;
}
.v-input__details {
  display: none !important;
}
.v-input{
  flex: none !important;
}
.v-input__control{
  height: 55px;
  min-width: 500px;
}
 button {
  height: 20px;
  width: 40px;
 }
</style>
