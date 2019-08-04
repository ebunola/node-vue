<template>
  <div id="app">
    <router-view name="customernav" />
    <!-- <Topnav/> -->
    <vue-page-transition name="fade-in-up">
      <router-view />
    </vue-page-transition>
    <!-- <Scrolling /> -->
    <router-view name="scrolling" />
  </div>
  
</template>

<script>
  export default {
    
  };
</script>
