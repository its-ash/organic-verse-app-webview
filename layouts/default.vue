<template>
  <div>
    <nuxt></nuxt>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "default",
  components: {Footer}
}
</script>

<style lang="scss">
@import "assets/style/style.scss";

body, html {
  overflow-x: hidden;
}
</style>
