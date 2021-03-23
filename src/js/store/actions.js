const actions = {
    pomodoro_update({ commit }, value) {
        commit('pomodoro_update', value);
    },
    short_break_update({ commit }, value) {
        commit('short_break_update', value);
    },
    long_break_update({ commit }, value) {
        commit('long_break_update', value);
    },
    before_long_update({ commit }, value) {
        commit('before_long_update', value);
    },
    current_task_update({ commit }, value) {
        commit('current_task_update', value);
    },
};

export default actions;