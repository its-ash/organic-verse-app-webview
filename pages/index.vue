<template>
  <section class="py-2">
    <h2 class="text-center fw-bold py-2">ALL Products</h2>
    <div class="products-area">
      <div class="container">
        <div class="row px-4">
          <div v-for="product in products" class="col-6">
            <div class="grid-product space-mb--20">
              <div class="grid-product__image">
                <img src="@/assets/img/products/product1.png" class="img-fluid" alt="">
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
                <div class="col-1 px-0 pe-4 mt-2">
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
  name: 'Index',
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
        this.$store.dispatch('addToCart', product);
      }

    }
  }
}
</script>
