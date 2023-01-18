<script setup>
import IconLink from "../components/IconLink.vue";
</script>

<template>
  <section>
    <h2>New Single</h2>

    <img src="@/assets/images/fools_game.png" />

    <ul>
      <li>
        <IconLink
          icon="spotify"
          title="Spotify"
          href="https://open.spotify.com/album/6BZksIeO9jiEeN7ZvutIdK?si=HJCqOxsrSb2dQ_dUQWB5Ng"
          show-title
        />
      </li>
      <li>
        <IconLink
          icon="apple"
          title="Apple Music"
          href="https://music.apple.com/us/album/fools-game-single/1648610969"
          show-title
        />
      </li>
      <li>
        <IconLink
          icon="youtube"
          title="YouTube"
          href="https://open.spotify.com/album/6BZksIeO9jiEeN7ZvutIdK?si=HJCqOxsrSb2dQ_dUQWB5Ng"
          show-title
        />
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  text-align: center;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 42px;
}

img {
  width: 90%;
  max-width: 600px;
  margin: auto;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  padding: 10px 20px;
  font-size: 36px;
}
</style>
