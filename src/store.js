import { createStore } from 'vuex';

export default createStore({
  state: {
    parameters: [],
  },
  mutations: {
    setParameters(state, parameters) {
      state.parameters = parameters;
    },
  },
});