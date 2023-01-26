<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div id="container">
    <RouterView />
  </div>
</template>

<style scoped>
#container {
  height: 100vh;
  overflow-y: scroll;

  background-size: cover;
}
</style>
