<script setup>
import { ref, watch } from "vue";

import StickyBar from "@/components/StickyBar.vue";
import ShowsView from "@/views/ShowsView.vue";
import NewSingleView from "@/views/NewSingleView.vue";
import GalleryView from "@/views/GalleryView.vue";
import colors from "@/utils/colors";

const overlayOpacity = ref(0);
const themeColor = ref([217, 184, 183, 1]);

watch(themeColor, (newColor) => {
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", colors.toString(newColor));
});

function handleScroll(event) {
  const SCALE_FACTOR = 0.6;
  const MAX_OPACITY = 0.5;
  const scrollPercent = event.target.scrollTop / event.target.offsetHeight;
  overlayOpacity.value = Math.min(scrollPercent * SCALE_FACTOR, MAX_OPACITY);

  updateThemeColor(overlayOpacity.value);
}

function updateThemeColor(alpha0) {
  // just hard code for now
  // rgba0 = (0, 0, 0, alpha0)
  // rgba1 = (217, 184, 183, 1)
  const c0 = [0, 0, 0, alpha0]; // top color
  const c1 = [217, 184, 183, 1]; // bottom color, hardcoded for now
  const newColor = colors.multiply(c0, c1);
  themeColor.value = newColor;
}
</script>

<template>
  <div
    id="container"
    @scroll="handleScroll"
    :style="{
      background: `linear-gradient(rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity}))`,
    }"
  >
    <StickyBar :background-color="themeColor" />
    <header>
      <h1>Wyman & the Wolves</h1>
    </header>

    <NewSingleView />

    <ShowsView />

    <GalleryView />
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
