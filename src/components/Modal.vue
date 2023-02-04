<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    ref="root"
    class="modal"
    :class="{ open: props.isOpen }"
    @click="handleClick"
  >
    <div class="inner">
      <fa-icon
        icon="fa-solid fa-circle-xmark"
        class="close"
        @click="emit('close')"
      />
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["close"]);

const root = ref(null);

function handleClick(event) {
  // if we click outside of the child elements
  if (event.target === root.value) {
    // then close it!
    emit("close");
  }
}
</script>

<style lang="scss">
.modal {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(180, 180, 180, 0.5);
  padding: 10% 15px 0;
  overflow: hidden;

  backdrop-filter: blur(5px);

  &.open {
    display: block;
  }

  .inner {
    position: relative;
    width: 100%;
    max-width: 700px;
    padding: 25px;
    margin: auto;
    background-color: #212121;
    border-radius: 7px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .close {
    position: absolute;
    right: -5px;
    top: -5px;
    font-size: 28px;
    cursor: pointer;
    border-radius: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
}
</style>
