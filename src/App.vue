<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import ShowsView from "./views/ShowsView.vue";
</script>

<script>
export default {
  data() {
    return {
      overlayOpacity: 0,
    };
  },

  methods: {
    handleScroll(event) {
      const SCALE_FACTOR = 0.6;
      const MAX_OPACITY = 0.5;
      const scrollPercent = event.target.scrollTop / event.target.offsetHeight;
      this.overlayOpacity = Math.min(scrollPercent * SCALE_FACTOR, MAX_OPACITY);
    },
  },
};
</script>

data() { }

<template>
  <div
    id="container"
    @scroll="handleScroll"
    :style="{
      background: `linear-gradient(rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity}))`,
    }"
  >
    <header>
      <h1>Wyman & the Wolves</h1>
    </header>

    <ShowsView />
  </div>
</template>

<style scoped>
#container {
  height: 100vh;
  overflow-y: scroll;

  background-size: cover;
}

header {
  line-height: 1.5;
  height: 100vh;
  width: 100vw;

  color: var(--color-heading);

  display: flex;
  justify-content: center;
  padding-top: 20vh;
}

h1 {
  font-size: 7.5vw;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
