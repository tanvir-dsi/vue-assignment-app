export const state = () => ({
  incidents:[],
})

export const mutations = {
  setIncidents(state, payload) {
    state.incidents = payload;
  }

}
export const actions = {
  async getIncidents(context) {
    let res = await this.$axios.get('/facts/random?animal_type=cat&amount=2');
    context.commit('setIncidents', res.data);
    return res;
  }
}
export const getters = {
  // getProductById: (state) => (id) => {
  //   return state.products.find(product => product.id == id)
  // },
  getIncidents:(state) => {
    return state.incidents;
  }
}
