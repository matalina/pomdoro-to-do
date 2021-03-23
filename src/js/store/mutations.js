const mutations = {
pomodoro_update(state, value) {
        state.pomodoro = value;
    },
    short_break_update(state, value) {
        state.short_break = value;
    },
    long_break_update(state, value) {
        state.long_break = value;
    },
    before_long_update(state, value) {
        state.before_long = value;
    },
    current_task_update(state, value) {
        state.current_task = value;
    },
};

export default mutations;