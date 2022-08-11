<template>
  <section class="py-5 w-100">
    <div class="row d-flex justify-content-center">
      <h2 class="text-center fw-bold">Cart</h2>
      <img v-if="products.length === 0" src="@/assets/emptyCart.png" class="p-5 w-50 text-center" alt="">
    </div>
    <div class="cart-product-area">
      <div v-for="product in products" class="cart-product border-bottom--medium">
        <div class="cart-product__image">
          <img src="@/assets/img/products/product1.png" class="img-fluid" alt="">
        </div>
        <div class="cart-product__content">
          <h3 class="title">{{ product.name }}</h3>
          <div class="price">
            <!--            <span class="main-price text-warning">$460</span>-->
            <span class="discounted-price">₹{{ product.price }}</span>
          </div>
        </div>
        <div class="cart-product__counter text-end">
          <button @click="remove(product)" class="btn btn-danger px-2 py-0">
            x
          </button>
          <div class="border rounded p-1 mt-2">
            <button @click="increase(product)" class="btn btn-outline px-1 py-0">+</button>
            <strong class="px-2">{{ product.quantity }}</strong>
            <button @click="decrease(product)" class="btn btn-outline px-1 py-0">−</button>
          </div>

        </div>
      </div>
    </div>
    <!--====================  End of cart product area  ====================-->
    <div class="grand-total space-mt--20 checkout">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="title-wrap">
              <h4 class="cart-bottom-title">Cart Total</h4>
            </div>
            <h5>Total products <span>{{ products.length }}</span></h5>
            <h4 class="grand-total-title">Grand Total <span>₹{{ totalPrice }}</span></h4>
            <a href="#">Proceed to Checkout</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    products() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.products.map(item => {
        return item.price * item.quantity;
      }).reduce((a, b) => a + b, 0);
    },
  },
  methods: {
    decrease(product) {
      this.$store.dispatch('decreaseCart', product);
    },
    increase(product) {
      this.$store.dispatch('increaseCart', product);
    },
    remove(product) {
      this.$store.dispatch('removeFromCart', product);
    }
  }
}
</script>

<style>
.checkout {
  position: absolute;
  bottom: 100px;
  width: 100%;
}
</style>
