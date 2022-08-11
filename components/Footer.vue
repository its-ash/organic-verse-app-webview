<template>
  <footer>
    <div class="footer-nav-wrapper">
      <NuxtLink :to="{name: 'index'}" class="footer-nav-single">
        <div class="menu-wrapper">
          <img src="@/assets/img/icons/home.svg" alt="">
          <span>Home</span>
        </div>
      </NuxtLink>
      <!--      <NuxtLink :to="{name: 'index'}" class="footer-nav-single">-->
      <!--        <div class="menu-wrapper">-->
      <!--          <img src="@/assets/img/icons/chat.svg" class="injectable" alt="">-->
      <!--          <span>Chat</span>-->
      <!--        </div>-->
      <!--      </NuxtLink>-->
      <NuxtLink :to="{name: 'Cart'}" class="footer-nav-single">
        <div class="menu-wrapper">
          <img src="@/assets/img/icons/cart.svg" class="injectable" alt="">
          <span>Cart</span>
        </div>
      </NuxtLink>
      <NuxtLink :to="{name: 'Profile-Index'}" class="footer-nav-single">
        <div class="menu-wrapper">
          <img src="@/assets/img/icons/profile.svg" class="injectable" alt="">
          <span>Profile</span>
        </div>
      </NuxtLink>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style>

</style>
