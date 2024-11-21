import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    parameters: [],
    user: {
      email: '',
      username: '',
      imagenUsuario: '',
      id: ''
    },
    loggedInEmail: '',
    userId: ''
  },
  mutations: {
    setParameters(state, parameters) {
      state.parameters = parameters;
    },
    setUser(state, user) {
      console.log('Committing user:', user);
      state.user.email = user.correo;
      state.user.username = user.usuario;
      state.user.imagenUsuario = user.imagenUsuario;
      state.user.id = user.id;
    },
    setLoggedInEmail(state, email) {
      state.loggedInEmail = email;
    },
    setUserId(state, id) {
      state.userId = id;
    }
  },
  actions: {
    async fetchUser({ commit, state }) {
      try {
        const response = await axios.get('https://artisania.azurewebsites.net/api/customers');
        console.log('API response:', response.data);
        const users = response.data;
        const user = users.find(user => user.correo === state.loggedInEmail);
        if (user) {
          commit('setUser', user);
          commit('setUserId', user.id);
        } else {
          console.log('User not found');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async fetchUserById({ commit, state }) {
      try {
        const response = await axios.get(`https://artisania.azurewebsites.net/api/customers/${state.userId}`);
        const user = response.data;
        if (user) {
          commit('setUser', user);
        } else {
          console.log('User not found');
          console.log('Fetched user by ID:', user);
        }
      } catch (error) {
        console.error('Error fetching user by ID:', error);
      }
    }
  },
  getters: {
    user: (state) => state.user,
    loggedInEmail: (state) => state.loggedInEmail,
    userId: (state) => state.userId
  }
});