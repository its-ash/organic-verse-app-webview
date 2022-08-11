<template>
  <div class="row align-content-center justify-content-center">

    <img src="@/assets/OrganicVerseLogo.png" alt="">
    <div class="col-12 text-center h1 text-dark fw-bold">
      Welcome to the <br> <br> Organic Verse
    </div>
    <div class="pt-5 col-6">
      <button class="btn btn-success mt-4 w-100" @click="goToHome">Let's Eat</button>

    </div>

  </div>
</template>

<script>
import {GoogleAuthProvider} from 'firebase/auth'

export default {
  name: "index",
  methods: {
    goToHome() {
      // localStorage.clear();
      // const provider = new GoogleAuthProvider()
      // this.$fire.auth.signInWithPopup(provider)
      //   .then((result) => {
      //     // const credential = GoogleAuthProvider.credentialFromResult(result)
      //     this.$store.dispatch('setUser', JSON.parse(JSON.stringify(result.user)))
      //     // const credential = GoogleAuthProvider.credentialFromResult(result)
      //     // const token = credential.accessToken
      //     // const user = result.user
      localStorage.setItem("isLoggedIn", "true");
      // localStorage.setItem("user", JSON.stringify(result.user));
      this.$router.push({name: 'Home'});
      // })
    }
  },
  created() {
    if (localStorage.getItem("isLoggedIn") === "true") {
      this.$store.commit('setUser', JSON.parse(localStorage.getItem("user")))
      this.$router.push({name: 'Home'});
    }
  }
}
</script>

<style>

</style>
