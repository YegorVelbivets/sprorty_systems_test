require('./bootstrap');

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import router from './router';
import store from './store'
import App from './App';

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});
