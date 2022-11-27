<script setup>
import IconLink from "../components/IconLink.vue";
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
      <IconLink
        icon="instagram"
        title="Instagram"
        href="https://www.instagram.com/wymanandthewolves/"
      />
    </li>
    <li>
      <IconLink
        icon="spotify"
        title="Spotify"
        href="https://open.spotify.com/artist/6tK8OQz0qjnTVDmXpt5TJR?si=F9pAcV88SfC5bnXZgDkBuQ"
      />
    </li>
    <li>
      <IconLink
        icon="apple"
        title="Apple Music"
        href="https://music.apple.com/us/artist/wyman-the-wolves/1486995669"
      />
    </li>
    <li>
      <IconLink
        icon="youtube"
        title="YouTube"
        href="https://www.youtube.com/channel/UCccmTz2_GsR_VOjqDPMUyvw"
      />
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
