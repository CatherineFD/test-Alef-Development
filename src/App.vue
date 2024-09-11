<template>
  <Header></Header>
  <router-view/>
</template>

<script>
import Header from "@/components/UI/Header.vue";

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
