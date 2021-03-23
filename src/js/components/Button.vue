<template>
    <div class="p-3 inline-block">
        <button
            @click="handleInput('click')" 
            class="p-2 border bg-red-700 hover:bg-red-600 border-red-900 text-red-200 rounded"
        >
            <slot></slot>
        </button>
    </div>
</template>

<script>
/**
 * https://www.digitalocean.com/community/tutorials/vuejs-add-v-model-support
 */
export default {
    name: 'akd-button',
    methods: {
        handleInput(event) {
            this.$emit(event);
        }
    }
}
</script>