<template>
  <div id="app">
    <header>
      <div class="logo">
        <img src="./assets/logo.png">
      </div>
      <h1>Demos for Thinking in Vue</h1>
    </header>
    <hr>
    <section>
      <buttons @v-click="clickHandler"></buttons>
    </section>
  </div>
</template>

<script>
import Buttons from './sections/buttons.vue'
export default {
  name: 'app',
  components: {
    Buttons
  },
  methods: {
    clickHandler(){
      console.log('app')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 800px;
  min-width: 400px;
  margin: 0 auto;
}
h1 {
  text-align: center;
}
.logo {
  margin-top: 60px;
  text-align: center;
}
</style>
