<template>
  <div>
    <!-- <Nav /> -->
    <!-- <Index/> -->
    <!-- <Footer/> -->
    <RouterView />
  </div>
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import Nav from '../src/components/Nav.vue'
// import Footer from '../src/components/Footer.vue'
// import Index from '../src/components/Index.vue'
  export default {
    name: 'App',
    components: {Nav}
  }
</script>

<style scoped>

</style>
