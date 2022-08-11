<template>
  <section class="py-2 pt-5">
    <div class="row justify-content-center">
      <img src="@/assets/organicVerse.png" class="w-50 text-center" alt="">
    </div>
    <h2 class="text-center py-2">Our Vegetables</h2>
    <div class="products-area">
      <div class="container">
        <div class="row px-4">
          <div v-for="product in products" class="col-6">
            <div class="grid-product space-mb--20">
              <div class="grid-product__image">
                <img :src="product.img" style="height: 140px;" class="img-fluid" alt="">
              </div>
              <div class="row">
                <div class="col-9 px-0 ps-3">
                  <h3 class="title">
                    {{ product.name }}
                  </h3>
                  <div class="price">
                    <span class="discounted-price">₹{{ product.price }}</span>
                  </div>
                </div>
                <div class="col-1 px-0 pe-4 mt-4">
                  <button @click="addToCart(product)" class="btn btn-primary btn-block px-2 py-0">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    products() {
      return this.$store.state.products;
    },
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    addToCart(product) {
      if (this.cart.find(x => x.id === product.id)) {
        this.$toast.success('Product already in cart').goAway(1500);
      } else {
        this.$toast.success('Product Added to cart').goAway(1000);
        this.$store.dispatch('addToCart', product);
      }

    }
  }
}
</script>
