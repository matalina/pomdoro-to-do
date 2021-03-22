<template>
    <div>
        <div>
            <router-link
                to="/settings"
            >
                Settings 
            </router-link>
        </div>
        <div>
            {{ display }}
        </div>
        <div>
            <small>Interruptions: {{ interupt }}</small>
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
import moment from 'moment';

export default {
    name: 'akd-timer',
    data() {
        return {
            running: false,
            start: null,
            now: null,
            timer: null,
            end_timer: null,
            task: null,
            interupt: 0,
        }
    },
    computed: {
        tasks() {
            return this.$store.state.tasks; 
        },
        pomodoro() {
            return this.$store.state.pomodoro;
        },
        short_break() {
            return this.$store.state.short_break;
        },
        long_break() {
            return this.$store.state.long_break;
        },
        display() {
            if(this.start === null) {
                return "00:00";
            }
            let duration = moment.duration(this.now.diff(this.start));
            let mins = duration.minutes().toString().padStart(2,'0');
            let secs = duration.seconds().toString().padStart(2,'0');
            return `${mins}:${secs}`;
        }
    },
    methods: {
        initTimer() {
            let timeout = this.pomodoro * 60 * 60 * 1000;
            this.start = moment();
            this.now = moment();
            this.end_timer = setTimeout(() => {
                this.resetTimer();
            }, timeout);
            this.timer = setInterval(() => {
                this.now = moment();
            },1000);
        },
        resetTimer() {
            clearTimeout(this.end_timer);
            clearInterval(this.timer);
            this.start = null;
            this.timer = null;
            this.end_timer = null;
            this.interupt = 0;
        },
        startTimer() {
            this.initTimer();
        },
        interruptTimer() {
            this.initTimer();
            this.interupt ++;
        },
        stopTimer() {
           this.resetTimer();
        }
    },
    mounted() {

    }
}
</script>
