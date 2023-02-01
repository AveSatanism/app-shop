<template>
  <div>
    <button @click="install">btn</button>
  </div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    install() {
      $fetch('/api/installModule')
      .then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style>
 button {
  height: 20px;
  width: 40px;
 }
</style>
