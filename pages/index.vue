<template>
  <div class="row align-content-center justify-content-center">

    <img src="/OrganicVerseLogo.png" alt="">
    <div class="col-12 text-center h1 text-dark fw-bold">
      Welcome to the <br> <br> Organic Verse
    </div>
    <div class="pt-5 col-6">
      <button class="btn btn-success mt-4 w-100" @click="goToHome">Let's Eat</button>

    </div>

  </div>
</template>

<script>
export default {
  name: "index",
  methods: {
    goToHome() {
      localStorage.setItem("isLoggedIn", "true");
      this.$router.push({name: 'Home'});
    }
  },
  created() {
    if (localStorage.getItem("isLoggedIn") === "true") {
      this.$router.push({name: 'Home'});
    }
  }
}
</script>

<style>

</style>
