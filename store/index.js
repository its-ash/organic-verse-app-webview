import cart from "@/pages/Cart";

export const state = () => ({
  products: [
    {
      id: 1,
      name: "Tomato",
      price: 80,
      img: 'veggie/tomato.jpg',
    },
    {
      id: 2,
      name: "Cauliflower",
      price: 80,
      img: 'veggie/cauliflower.jpg',
    },
    {
      id: 3,
      name: "Chilli",
      price: 30,
      img: 'veggie/Chilli.jpg',
    },
    {
      id: 4,
      name: "Potato",
      price: 40,
      img: 'veggie/potato.jpg',
    }
  ],
  cart: [],
  wallet: 100,
  user: {},
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
  },
  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  setUser({commit}, product) {
    commit("setUser", product);
  },
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
