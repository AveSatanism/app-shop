<template>
  <div class="app_flex">
    <h1 class="site_title">KACHALKA</h1>
    <v-text-field v-model="search" clearable label="Search" variant="solo"></v-text-field>
    <v-container class="app_container">
      <appCard v-for="npmPackage in searchedPackages">
        {{ npmPackage.name }}
        <template #subtitle>{{ npmPackage.subtitle }}</template>
        <template #button>
          <v-btn v-if="downloadedApp.includes(npmPackage.name)" @click="checkApp()" class="downloded_button" variant="outlined" size="small">
            downloaded!
          </v-btn>
          <v-btn v-else variant="outlined" size="small" @click="install(npmPackage.name)">
            download
          </v-btn>
        </template>
        <template #image><v-img :src="npmPackage.image"></v-img></template>
      </appCard>
    </v-container>
  </div>
</template>
<script>
import { debounce } from 'perfect-debounce'
import appCard from './components/appCard.vue'

const packagesList = [
  { name: 'Lodash', subtitle: 'A modern JavaScript utility library delivering modularity, performance & extras.', image: 'https://lodash.com/assets/img/lodash.svg', downloded: '' },
  { name: 'Chalk', subtitle: 'Terminal string styling done right', image: 'https://raw.githubusercontent.com/chalk/chalk/HEAD/media/logo.svg', downloded: '' },
  { name: 'Quasar', subtitle: 'Build high-performance VueJS user interfaces in record time.', image: 'https://cdn.quasar.dev/logo-v2/svg/logo-vertical.svg', downloded: '' },
]

export default {
  name: 'app',
  components: {
    appCard,
  },
  data() {
    return {
      search: '',
      appName: '',
      downloadedApp: [],
      debouncedLogSearch: debounce(this.logSearch, 500)
    }
  },
  watch: {
    search() {
      this.debouncedLogSearch()
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
    logSearch() {
      // Нам нужно использовать debounce, чтобы не делать запросы на сервер при каждом нажатии клавиши. Если пользователь вводит текст, то мы ждем 500 мс, и только потом делаем запрос на сервер.
      console.log(this.search)
    },
    checkApp() {
      $fetch('/api/checkModule')
        .then(res => {
          console.log(res)
        })
    },
    install(appName) {
      $fetch('/api/installModule', { query: { moduleName: appName.toLowerCase() } })
        .then(res => {
          this.downloadedApp.push(appName)
          console.log(this.downloadedApp)
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
  width: 120px;
}

.downloded_button {
  color: #00ff00;
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
