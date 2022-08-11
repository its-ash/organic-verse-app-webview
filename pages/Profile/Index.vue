<template>
  <div class="row">
    <div class="col-12">
      <div class="card shadow-sm m-3 border-0">
        <div class="card-body">
          <div class="row ">
            <div class="col-6 px-0">
              <img class="rounded" style="height: 100px" :src="user.photoURL" alt="">
            </div>
            <div class="col-6 pt-4 px-0">
              <div class="title-wrap">
                <h4 class="cart-bottom-title">{{ user.displayName }}</h4>
              </div>
              <p>{{ user.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 px-5">
      <nuxt-link :to="{name: 'Profile-Wallet'}"
                 class="w-100 shadow-sm p-2 my-2 bg-color--grey fw-bold d-flex align-items-center">
        <span class="mdi mdi-wallet-outline fs-3"></span>
        <span class="px-3">Wallet Balance : ₹{{ wallet }}</span>
      </nuxt-link>
      <div class="w-100 shadow-sm p-2 my-2 bg-color--grey fw-bold d-flex align-items-center">
        <span class="mdi mdi-basket-check-outline fs-3"></span>
        <span class="px-3">My Orders</span>
      </div>
      <div class="w-100 shadow-sm p-2 my-2 bg-color--grey fw-bold d-flex align-items-center">
        <span class="mdi mdi-face-man fs-3"></span>
        <span class="px-3">Edit Profile</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileIndex",
  computed: {
    wallet() {
      return this.$store.state.wallet;
    },
    user() {
      return this.$store.state.user;
    }
  }
}
</script>

<style scoped>

</style>
