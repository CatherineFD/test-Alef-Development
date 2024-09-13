<template>
  <Header></Header>
  <router-view/>
  <Footer/>
</template>

<script>
import Header from "@/components/UI/Header.vue";
import Footer from "@/components/UI/Footer.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer
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
