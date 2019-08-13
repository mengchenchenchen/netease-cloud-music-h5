const module = {
  namespaced:true,
  state: {
    banners: []
  },
  mutations: {
    get_banners(state, banners) {
      state.banners = banners;
    }
  },
  actions: {},
  getters: {}
};
export default module;
