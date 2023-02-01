<template>
  <div>
    <button></button>
  </div>
</template>
<script setup>
await useFetch('/api/installModule')
</script>
<style>
 button {
  height: 20px;
  width: 40px;
 }
</style>
