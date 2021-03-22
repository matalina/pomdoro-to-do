import Vue from 'vue';

import store from './store';

import App from './components/App';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    store,
});