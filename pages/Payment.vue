<template>
  <section class="py-5 w-100">
    <div class="row d-flex justify-content-center">
      <h2 class="text-center fw-bold">Payment</h2>
    </div>
    <!--====================  End of cart product area  ====================-->
    <div class="cart-product-area">
      <div v-for="product in products" class="cart-product border-bottom--medium">
        <div class="cart-product__image">
          <img :src="product.img" class="img-fluid" alt="">
        </div>
        <div class="cart-product__content">
          <h3 class="title">{{ product.name }}</h3>
          <div class="price">
            <!--            <span class="main-price text-warning">$460</span>-->
            <span class="discounted-price">₹{{ product.price }}</span>
          </div>
        </div>
        <div class="cart-product__counter text-end">
          {{ product.quantity }} x ₹{{ product.price }} = ₹{{ product.quantity * product.price }}
        </div>
      </div>
    </div>
    <div class="grand-total space-mt--20 checkout">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="title-wrap">
              <h4 class="grand-total-title text-success">Wallet Balance <span>₹{{ wallet }}</span></h4>
            </div>
            <h4 class="grand-total-title">Grand Total <span>₹{{ totalPrice }}</span></h4>
            <a v-if="totalPrice <= wallet" href="#">Proceed to Pay</a>
            <nuxt-link :to="{name: 'Profile-Wallet'}" class="text-light" v-else>Click to add
              <span class="text-white"><strong>₹{{ totalPrice - wallet }}</strong></span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Payment",
  computed: {
    products() {
      return this.$store.state.cart;
    },
    wallet() {
      return this.$store.state.wallet;
    },
    totalPrice() {
      return this.$store.state.cart.map(item => {
        return item.price * item.quantity;
      }).reduce((a, b) => a + b, 0);
    },
  },
  methods: {}
}
</script>

<style>
.checkout {
  position: absolute;
  bottom: 100px;
  width: 100%;
}
</style>
