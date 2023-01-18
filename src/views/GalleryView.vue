<template>
  <section>
    <img src="@/assets/images/wholeband.jpg" alt="" />
    <img src="@/assets/images/kylepraisegod.jpg" alt="" class="half" />
    <img src="@/assets/images/kylesoft.jpeg" alt="" class="half" />
    <img src="@/assets/images/ronnie.jpg" alt="" class="offset" />
    <img src="@/assets/images/kylefeelingit.jpg" alt="" class="offset-other" />
  </section>
</template>

<script setup></script>

<style scoped>
img {
  max-width: 100%;
  padding: 10px;
  vertical-align: top;
}

.half {
  max-width: 50%;
}

.third {
  max-width: 33.333333%;
}

.two-third {
  max-width: 66.6666666%;
}

.offset {
  max-width: 55%;
}

.offset-other {
  max-width: 45%;
}
</style>
