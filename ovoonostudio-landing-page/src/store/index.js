import { createStore } from 'vuex';
import axios from 'axios'; // Import axios

export default createStore({
    state: {
        isAuthenticated: false,
        token: null
    },
    mutations: {
        SET_AUTHENTICATED(state, status) {
            state.isAuthenticated = status;
        },
        SET_TOKEN(state, token) {
            state.token = token;
        },
    },
    actions: {
        loadUser({ commit }) {
            const token = localStorage.getItem('token');
            if (token) {
                commit('SET_TOKEN', token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                commit('SET_AUTHENTICATED', true);
            } else {
                commit('SET_TOKEN', null);
                commit('SET_AUTHENTICATED', false);
            }
        },
        async login({ commit }, userCredentials) {
            try {
                const response = await axios.post('https://ovoonoapi.azurewebsites.net/auth/login', userCredentials);
                
                if (response.data && response.data.token) {
                    commit('SET_AUTHENTICATED', true);
                    // You could also store the token in localStorage so that the user stays logged in between page refreshes
                    localStorage.setItem('token', response.data.token);
                    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
                } else {
                    throw new Error('Invalid credentials');
                }
            } catch (error) {
                console.error(error);
                throw new Error('An error occurred while trying to log in');
            }
        }
    }
});