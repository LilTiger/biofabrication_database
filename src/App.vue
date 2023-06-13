<template>
  <div id="app">
<!--    <c-nav />-->
    <router-view/>
<!--    <c-footer />-->
  </div>
</template>

<script>
// import cNav from '@/components/nav'
// import cFooter from '@/components/footer'

export default {
  name: 'App',
  // components: {
    // cNav,
    // cFooter
  // }
}
</script>

<style lang="less">

.nav-link{
  cursor: pointer;
}

//@import './assets/global';
//
//#app {
//  font-family: 'Avenir', Helvetica, Arial, sans-serif;
//  -webkit-font-smoothing: antialiased;
//  -moz-osx-font-smoothing: grayscale;
//  color: #2c3e50;
//}
</style>
