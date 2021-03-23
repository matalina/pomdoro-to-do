<template>
    <div>
        <akd-page-title>Pomodoro To Do List</akd-page-title>
        <akd-timer></akd-timer>
    </div>
</template>

<script>
import Timer from "../components/Timer";

export default {
    name: 'akd-dashboard',
    components: {
        'akd-timer': Timer,
    },
    data() {
        return {

        }
    }
}
</script>
