<template>
  <div>
    <section id="firebaseui-auth-container"></section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { getAuth, EmailAuthProvider } from "firebase/auth";
import { auth } from "firebaseui";
import "firebaseui/dist/firebaseui.css";

onMounted(() => {
  const ui = new auth.AuthUI(getAuth());
  const uiConfig = {
    signInSuccessUrl: "/admin",
    signInOptions: [EmailAuthProvider.PROVIDER_ID],
  };
  ui.start("#firebaseui-auth-container", uiConfig);
});
</script>

<style lang="scss" scoped></style>
