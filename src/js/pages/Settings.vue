<template>
    <div>
        <akd-page-title>Settings</akd-page-title>

        <akd-input
            v-model="pomodoro"
            @change="save('pomodoro')"
            @keypress.enter="save('pomodoro')"
        >
            Pomodoro
        </akd-input>

        <akd-input
            v-model="short_break"
            @change="save('short_break')"
            @keypress.enter="save('short_break')"
        >
            Short Break
        </akd-input>

        <akd-input
            v-model="long_break"
            @change="save('long_break')"
            @keypress.enter="save('long_break')"
        >
            Long Break
        </akd-input>

        <akd-input
            v-model="before_long"
            @change="save('before_long')"
            @keypress.enter="save('before_long')"
        >
            Pomodoro's Before Long Break
        </akd-input>
    </div>
</template>

<script>
export default {
    name: 'akd-settings',
    data() {
        return {
            pomodoro: this.$store.state.pomodoro,
            short_break: this.$store.state.short_break,
            long_break: this.$store.state.long_break,
            before_long: this.$store.state.before_long,
        };
    },
    methods: {
        save(name) {
            alert('changing');
            this.$store.dispatch(`${name}_update`, this[name]);
        }
    }
}
</script>
