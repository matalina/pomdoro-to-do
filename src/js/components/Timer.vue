<template>
    <div>
        <div>
            {{ display }}
        </div>
        <button
            @click="startTimer()"
        >
            Start
        </button>
        <button
            @click="interruptTimer()"
        >
            Interrupt
        </button>
        <button
            @click="stopTimer()"
        >
            Stop
        </button>
    </div>
</template>

<script>
export default {
    name: 'akd-timer',
    data() {
        return {
            running: false,
            start: null,

            timer: null,
            task: null,
            interrupt: 0,
        }
    },
    computed: {
        tasks: () => {this.$store.state.tasks },
        pomodoro: () => { this.$store.state.pomodoro },
        short_break: () => { this.$store.state.short_break },
        long_break: () => { this.$store.state.long_break },
        display: () => {
            if(this.start === null) {
                return "00:00";
            }
            let now = moment();
            let duration = moment.duration(now.diff(this.start));
            return `${duration.minutes()}:${duraction.seconds()}`;
        }
    },
    methods: {
        startTimer() {
            this.start = moment();
        },
        interrupttimer() {
            this.start = moment();
            this.interrupt ++;
        },
        stopTimer() {
            this.start = null;
            this.intterupt = 0;
        }
    },
    mounted() {

    }
}
</script>
