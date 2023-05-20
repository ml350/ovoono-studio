import { createStore } from 'vuex';

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
        login({ commit }, userCredentials) {
            // Here, usually you would make a request to your backend API to validate the credentials
            // And upon successful validation, you would commit the SET_AUTHENTICATED mutation
            // But for this example, we'll just do a simple check on the front-end

            // Mocked login check
            if (userCredentials.username === 'admin' && userCredentials.password === 'password') {
                commit('SET_AUTHENTICATED', true);
            } else {
                throw new Error('Invalid credentials');
            }
        }
    },
});