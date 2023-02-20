<template>
  <div class="app_flex">
    <h1 class="site_title">KACHALKA</h1>
    <v-text-field v-model="search" clearable label="Search" variant="solo"></v-text-field>
    <v-container class="app_container">
      <appCard v-for="npmPackage in searchedPackages">
        {{ npmPackage.name }}
        <template #subtitle>{{ npmPackage.subtitle }}</template>
        <template #button>
          <v-btn variant="outlined" size="small" @click="install(npmPackage.name)">
            download
          </v-btn></template>
        <template #image><v-img :src="npmPackage.image"></v-img></template>
      </appCard>
    </v-container>
  </div>
</template>
<script>
import appCard from './components/appCard.vue'

const packagesList = [
  { name: 'lodash', subtitle: 'A modern JavaScript utility library delivering modularity, performance & extras.', image: 'https://lodash.com/assets/img/lodash.svg' },
  { name: 'chalk', subtitle: 'Terminal string styling done right', image: 'https://raw.githubusercontent.com/chalk/chalk/HEAD/media/logo.svg' },
  { name: 'quasar', subtitle: 'Build high-performance VueJS user interfaces in record time.', image: 'https://cdn.quasar.dev/logo-v2/svg/logo-vertical.svg' },
]

export default {
  name: 'app',
  components: {
    appCard,
  },
  data() {
    return {
      search: '',
      appName: ''
    }
  },
  computed: {
    searchedPackages() {
      return packagesList.filter((item) => {
        return item.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    install(appName) {
      $fetch('/api/installModule', { query: { moduleName: appName } })
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

.v-btn {
  width: 100px;
}

.v-card-actions {
  padding: 8px 16px !important;
}

.v-input__details {
  display: none !important;
}

.v-input {
  flex: none !important;
}

.v-input__control {
  height: 55px;
  min-width: 500px;
}

button {
  height: 20px;
  width: 40px;
}</style>
