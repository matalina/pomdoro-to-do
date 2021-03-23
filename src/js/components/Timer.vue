<template>
    <div class="w-full lg:w-1/4 lg:mx-auto my-3 bg-gray-300 border-gray-800 rounded p-5 relative">
        <div class="absolute top-0 right-0 my-3 mx-2">
            <router-link
                to="/settings"
                class="p-2 border bg-red-700 hover:bg-red-600 border-red-200 text-red-200 rounded"
            >
                <i class="fas fa-cog"></i>
            </router-link>
        </div>
        <div class="text-center text-7xl font-bold m-5 text-red-900">
            {{ display }}
        </div>
        <div class="text-center">
            <small>Interruptions: {{ interupt }}</small>
        </div>
        <div class="text-center">
            <span 
                v-for="x in before_long"
                :key="`count_${x}`"
                class="px-2"
            >
                <i v-if="x <= completed" class="fas fa-circle" :data-value="x"></i>
                <i v-else class="fal fa-circle" :data-value="x"></i>
            </span>
        </div>
        <div class="text-center">
            <akd-button
                @click="startTimer()"
            >
                Start
            </akd-button>
            <akd-button
                @click="interruptTimer()"
            >
                Interrupt
            </akd-button>
            <akd-button
                @click="stopTimer()"
            >
                Stop
            </akd-button>
        </div>
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
            completed: 0,
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
        before_long() {
            return parseInt(this.$store.state.before_long);
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
            let timeout = this.pomodoro * 60 * 1000;
            this.start = moment();
            this.now = moment();
            this.end_timer = setTimeout(() => {
                this.completed ++;
                if(this.completed === this.before_long) {
                    this.completed = 0;
                }
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
