import Vue from 'vue';

import store from './store';
import router from './router';

import App from './components/App';
import PageTitle from './components/PageTitle';
import SubTitle from './components/SubTitle';
import Input from './components/Input';
import Button from './components/Button';

Vue.config.productionTip = false;

Vue.component('akd-page-title', PageTitle);
Vue.component('akd-sub-title', SubTitle);
Vue.component('akd-input', Input);
Vue.component('akd-button', Button);


/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>',
    store,
    router,
});

window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./service-worker.js");
    }
});