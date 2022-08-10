import cart from "@/pages/Cart";

export const state = () => ({
  products: [
    {
      id: 1,
      name: "Apple",
      price: 100,
      description: "This is an apple",
    },
    {
      id: 2,
      name: "Orange",
      price: 200,
      description: "This is an orange",
    },
    {
      id: 3,
      name: "Banana",
      price: 300,
      description: "This is a banana",
    },
    {
      id: 4,
      name: "Grape",
      price: 400,
      description: "This is a grape",
    }
  ],
  cart: []
})

export const getters = {}

export const mutations = {
  addToCart(state, product) {
    state.cart.push({...product, quantity: 1})
  },
  alterCartItem(state, product) {
    state.cart = state.cart.map(item => {
      if (item.id === product.id) {
        return product;
      }
      return item
    })
  },
  removeFromCart(state, product) {
    state.cart = state.cart.filter(item => item.id !== product.id)
  }
}

export const actions = {
  addToCart({commit}, product) {
    commit("addToCart", product);
  },
  removeFromCart({commit}, product) {
    commit("removeFromCart", product);
  },
  increaseCart({commit}, product) {
    const item = {...product}
    item.quantity += 1;
    commit("alterCartItem", item);
  },
  decreaseCart({commit}, product) {
    const item = {...product}
    item.quantity -= 1;
    if (item.quantity === 0) return;
    commit("alterCartItem", item);
  }
}
