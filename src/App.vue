<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="dialogOpen">open</button>
    <HelloWorld v-if="dialog" msg="Welcome to Your Vue.js App" @close="close"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    dialogOpen() {
      this.dialog = true
    },
    close() {
      this.dialog = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
