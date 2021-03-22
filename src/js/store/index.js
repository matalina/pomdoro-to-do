import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import actions from './actions';
import mutations from './mutations';
import state from './state';

Vue.use(Vuex);

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: state(),
    mutations,
    actions,
});

export default store;