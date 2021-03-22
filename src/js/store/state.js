function state() {
    return {
        // Settings
        pomodoro: 25,
        short_break: 5,
        long_break: 15,
        before_long: 4,

        // Tasks
        tasks: [],
        current_task: null,
    };
};

export default state;