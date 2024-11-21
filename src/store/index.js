import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user: {
      email: '',
      username: ''
    },
    loggedInEmail: ''
  },
  mutations: {
    setUser(state, user) {
      console.log('Committing user:', user)
      state.user.email = user.correo
      state.user.username = user.usuario
    },
    setLoggedInEmail(state, email) {
      state.loggedInEmail = email
    }
  },
  actions: {
    async fetchUser({ commit, state }) {
      try {
        const response = await axios.get('https://artisania.azurewebsites.net/api/customers')
        console.log('API response:', response.data)
        const users = response.data
        const user = users.find(user => user.correo === state.loggedInEmail)
        if (user) {
          commit('setUser', user)
        } else {
          console.log('User not found')
        }
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }
  },
  getters: {
    user: (state) => state.user,
    loggedInEmail: (state) => state.loggedInEmail
  }
})