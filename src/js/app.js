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

window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./service-worker.js");
    }
});