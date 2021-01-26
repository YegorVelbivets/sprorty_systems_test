import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
        errors: []
    },

    mutations: {
        request_error(state, response){
            state.errors = response.data.errors;
        },
    },

    actions: {
        login({commit, dispatch}, user){
            return new Promise((resolve, reject) => {
                axios({
                    url: '/oauth/token',
                    data: {
                        grant_type: 'password',
                        client_id: '2',
                        client_secret: 'Dj1VkawSaUFiGARXEa2oWh52XFLpl0icyWYkMZRl',
                        username: user.email,
                        password: user.password,
                        scope: '*'
                    },
                    method: 'POST'
                })
                    .then(resp => {
                        localStorage.setItem('access_token', resp.data.access_token);
                        localStorage.setItem('refresh_token', resp.data.refresh_token);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('request_error', err.response);
                        dispatch('logout');
                        reject(err);
                    })
            })
        },

        register({commit, dispatch}, user){
            return new Promise((resolve, reject) => {
                axios({url: '/api/auth/register', data: user, method: 'POST' })
                    .then(resp => {
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('request_error', err.response);
                        dispatch('logout');
                        reject(err);
                    })
            })
        },

        logout({commit}){
            return new Promise((resolve, reject) => {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    },

    getters : {
        isLoggedIn: (state, getters) => !!getters.access_token,
        errors: state => state.errors,
        access_token: () => localStorage.getItem('access_token'),
        refresh_token: () => localStorage.getItem('refresh_token'),
    }
});
