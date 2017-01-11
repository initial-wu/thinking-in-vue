<template>
  <div id="app">
    <img src="./assets/logo.png">
    <buttons></buttons>
  </div>
</template>

<script>
import Buttons from './sections/buttons.vue'
export default {
  name: 'app',
  components: {
    Buttons
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
