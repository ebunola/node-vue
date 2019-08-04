import Vue from 'vue';
import Vuex from 'vuex';
// import axios from './axios-auth'
import { AuthService } from './services/authservice';
import { UserService } from './services/userservices';
import axios from 'axios';

let authservice = new AuthService();
let userservice = new UserService();
const baseURL = 'http://localhost:5000/api';

// import router from './router'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		token: localStorage.getItem('token') || '',
		// id: null,
		user: {}
	},
	mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    },
		authUser(state, userData) {
			state.token = userData.token;
			state.id = userData.userId;
		},
		storeUser(state, user) {
			state.user = user;
		}
	},
	actions: {
		// eslint-disable-next-line
		// signup({ commit, dispatch }, authData) {
		// 	authservice
		// 		.signup(authData)
		// 		.then((response) => {
		// 			console.log(response);
		// 			commit('authUser', {
		// 				token: response.data.token,
		// 				userId: response.data.id
		// 			});
		// 			dispatch('storeUser', authData);
		// 			// this.$router.push("/login");
		// 		})
		// 		.catch((error) => {
		// 			console.error(error.message);
		// 		});
    // },
    
    signup({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: `${baseURL}/users/add`, data: user, method: 'POST'})
        .then(response => {
          const token = response.data.token
          const user = response.data.user
          localStorage.setItem('token', token)

          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          resolve(response)
        })
        .catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
		// eslint-disable-next-line
		login({ commit }, authData) {
			authservice
				.login(authData)
				.then((response) => {
					// save token in localstorage
					// localStorage.setItem("token", response.data.token);
					console.log('response', response);
					commit('authUser', {
						token: response.data.token,
						userId: response.data.id
					});
					console.log('response', response);
					this.$router.push('/admin/settings');
				})
				.catch((error) => {
					console.log(error);
					// clear form inputs
					this.email = this.password = '';

					// display error notification later
				});
		},

		// async storeUser({ commit }, userData) {
		// 	if (!state.token) {
		// 		return;
		// 	}
		// 	await authservice
		// 		.createUser(state.token, userData)
		// 		.then((response) => console.log(response))
		// 		.catch((error) => console.log(error));
		// },

		// async fetchUser() {
		// 	if (!state.token) {
		// 		return;
		// 	}
		// 	// await authservice.getUsers(state.token, userData)
		// 	await userservice
		// 		.getUsers(state.token)
		// 		.then((data) => {
		// 			this.users = data.result;
		// 			console.log(data);
		// 			this.commit('storeUser', data[0]);
		// 		})
		// 		.catch((error) => {
		// 			console.log(error);
		// 		});
		// }
	},
	getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: state => state.status,
		// user(state) {
		// 	return state.user;
		// }
	}
});
