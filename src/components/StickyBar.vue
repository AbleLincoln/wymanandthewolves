<script setup>
import colors from "../utils/colors";
</script>

<script>
export default {
  props: {
    backgroundColor: Array,
  },
  computed: {
    background() {
      // little "media query"
      if (window.innerWidth > 900) return "rgba(0,0,0,0)";

      return `linear-gradient(${colors.toString(
        this.backgroundColor
      )} 70px, ${colors.toString(
        colors.makeTransparent(this.backgroundColor)
      )})`;
    },
  },
};
</script>

<template>
  <ul :style="{ background }">
    <li>
      <a href="https://www.instagram.com/wymanandthewolves/" target="_blank">
        <fa-icon icon="fa-brands fa-instagram" />
      </a>
    </li>
    <li>
      <a
        href="https://open.spotify.com/artist/6tK8OQz0qjnTVDmXpt5TJR?si=F9pAcV88SfC5bnXZgDkBuQ"
      >
        <fa-icon icon="fa-brands fa-spotify" />
      </a>
    </li>
    <li>
      <a href="https://music.apple.com/us/artist/wyman-the-wolves/1486995669">
        <fa-icon icon="fa-brands fa-apple" />
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/channel/UCccmTz2_GsR_VOjqDPMUyvw">
        <fa-icon icon="fa-brands fa-youtube" />
      </a>
    </li>
  </ul>
</template>

<style scoped>
ul {
  position: fixed;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 10;

  font-size: 30px;
  color: rgba(255, 255, 255, 0.85);

  margin: 0;
  padding: 10px 15px;
  padding-bottom: 100px;
}

li {
  margin: 0px;
}

@media (max-width: 900px) {
  ul {
    position: fixed;
    flex-direction: row;
    left: 0;
    right: 0;
    justify-content: center;
  }

  li {
    margin: 10px;
  }
}
</style>
