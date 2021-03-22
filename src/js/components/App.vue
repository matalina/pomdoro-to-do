<template>
    <div>
        <h1 class="text-4xl">Pomodoro To Do List</h1>
        <akd-timer></akd-timer>
    </div>
</template>

<script>
import Timer from './Timer';

export default {
    name: 'App',
    components: {
        'akd-timer': Timer
    },
    data() {
        return {

        }
    }
}
</script>
