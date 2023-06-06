import { createStore } from 'vuex';
import axios from 'axios'; // Import axios

export default createStore({
    state: {
        isAuthenticated: false,
    },
    mutations: {
        SET_AUTHENTICATED(state, status) {
            state.isAuthenticated = status;
        },
    },
    actions: {
        async login({ commit }, userCredentials) {
            try {
                const response = await axios.post('http://localhost:3000/login', userCredentials);
                
                if (response.data && response.data.token) {
                    commit('SET_AUTHENTICATED', true);
                    // You could also store the token in localStorage so that the user stays logged in between page refreshes
                    localStorage.setItem('token', response.data.token);
                } else {
                    throw new Error('Invalid credentials');
                }
            } catch (error) {
                console.error(error);
                throw new Error('An error occurred while trying to log in');
            }
        }
    },
});