<script setup>
import { computed } from "vue";
// maps easy-to-remember names to font awesome names
const ICONS_MAP = {
  instagram: "fa-brands fa-instagram",
  spotify: "fa-brands fa-spotify",
  apple: "fa-brands fa-apple",
  youtube: "fa-brands fa-youtube",
};

const props = defineProps({
  icon: String,
  href: String,
  title: String,
  showTitle: Boolean,
});

const iconStr = computed(() => ICONS_MAP[props.icon]);
</script>

<template>
  <a :href="href">
    <fa-icon :icon="iconStr" :title="title" aria-hidden="true" />
    <span class="sr-only">{{ title }}</span>
    <span v-if="showTitle" class="icon-link--title">{{ title }}</span>
  </a>
</template>

<style scoped>
a {
  display: inline-flex;
  align-items: center;
}

span {
  font-size: 75%;
  margin-left: 7px;
}

@media (max-width: 900px) {
  .icon-link--title {
    display: none;
  }
}
</style>
