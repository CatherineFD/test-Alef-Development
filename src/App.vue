<template>
  <Header></Header>
  <main class="main-content">
    <router-view/>
  </main>
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
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
