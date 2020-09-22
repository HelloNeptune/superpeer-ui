<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    created() {

    }
  }
</script>

<style lang="scss">
  #app {
    display: flex;
    position: relative;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
</style>
