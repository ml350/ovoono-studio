import { createStore } from 'vuex';
import axios from 'axios';
import createPersistedState from "vuex-persistedstate";

// Set axios defaults
axios.defaults.baseURL = 'https://ovoonoapi.azurewebsites.net';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default createStore({
    state: {
        isAuthenticated: false,
        token: null,
        username: null,
        posts: [],
        error: null,
    },
    mutations: {
        SET_AUTHENTICATED(state, status) {
            state.isAuthenticated = status;
        },
        SET_USERNAME(state, username){
            state.username = username;
        },
        SET_TOKEN(state, token) {
            state.token = token;
            axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
        },
        SET_POSTS(state, posts) {
            state.posts = posts;
        },
        SET_ERROR(state, error) {
            state.error = error;
        }
    },
    actions: {
        async loadUser({ commit }) {
            const token = localStorage.getItem('token');
            const username = localStorage.getItem('username');
            if (token && username) {
                commit('SET_USERNAME', username);
                commit('SET_TOKEN', token);
                commit('SET_AUTHENTICATED', true);
            } else {
                commit('SET_USERNAME', null);
                commit('SET_TOKEN', null);
                commit('SET_AUTHENTICATED', false);
            }
        },
        logout({ commit }){
            localStorage.removeItem('token');
            commit('SET_USERNAME', null);
            commit('SET_TOKEN', null);
            commit('SET_AUTHENTICATED', false);
        },
        async executeRequest({ commit }, { method, url, data }) {
            try {
                const response = await axios({ method, url, data });
                return response.data;
            } catch (error) {
                commit('SET_ERROR', error.response.data.message || 'An error occurred while processing your request');
                throw error;
            }
        },
        login({ dispatch, commit }, userCredentials) {
            return dispatch('executeRequest', {
                method: 'post',
                url: '/auth/login',
                data: userCredentials
            }).then(({ token, username }) => {
                commit('SET_USERNAME', username);
                commit('SET_AUTHENTICATED', true);
                commit('SET_TOKEN', token);
                localStorage.setItem('token', token);
                localStorage.setItem('username', username);
            });
        },
        changePassword({ state, dispatch }, { oldPassword, newPassword }) {
            return dispatch('executeRequest', {
                method: 'post',
                url: '/auth/change-password',
                data: { username: state.username, oldPassword, newPassword }
            });
        },
        fetchPosts({ dispatch, commit }) {
            return dispatch('executeRequest', { method: 'get', url: '/posts' })
              .then(data => {
                console.log(data);
                commit('SET_POSTS', data);
              })
              .catch(error => {
                console.error('Error fetching posts:', error);
                throw error; // re-throw the error
              });
        },       
        createPost({ commit, state, dispatch }, formData) {
            if (!formData.get('author')) {
                const error = 'Author is required';
                commit('SET_ERROR', error);
                throw new Error(error);
            }
            
            return dispatch('executeRequest', { 
                method: 'post', 
                url: '/posts', 
                data: formData, 
                headers: { 'Content-Type': 'multipart/form-data' } // set the Content-Type header to multipart/form-data
            }).then(data => commit('SET_POSTS', [...state.posts, data]));
        },
        editPost({ commit, state, dispatch }, updatedPost) {
            return dispatch('executeRequest', { 
                method: 'put', 
                url: `/posts/${updatedPost.id}`, 
                data: updatedPost
            }).then(() => {
                const updatedPosts = state.posts.map(post => 
                    post.id === updatedPost.id ? updatedPost : post
                );
                commit('SET_POSTS', updatedPosts);
            });
        }
    },
    plugins: [createPersistedState()],
});