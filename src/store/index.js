import { createStore } from "vuex";

export default createStore({
  state: {
    favoriteID: [],
  },
  mutations: {
    toggleFavorite(state, product) {
      const index = state.favoriteID.indexOf(product.id);
      if (index !== -1) {
        state.favoriteID.splice(index, 1);
      } else {
        state.favoriteID.push(product.id);
      }
      product.favorite = !product.favorite;
    },
    removeProduct(state, id) {
      state.favoriteID.splice(id, 1);
    },
  },
  actions: {},
  getters: {},
});
