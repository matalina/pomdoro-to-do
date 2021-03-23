<template>
    <div class="p-3">
        <label class="block pb-1 text-gray-500 w-full"><slot></slot></label>
        <input 
            ref="akd-input-field" 
            @input="handleInput('input')" 
            @change="handleInput('change')"
            @blur="handleInput('blur')"
            @keypress.enter="handleInput('keypress.enter')"
            class="p-2 border border-gray-500 rounded w-full"
            :value="value"
        />
    </div>
</template>

<script>
/**
 * https://www.digitalocean.com/community/tutorials/vuejs-add-v-model-support
 */
export default {
    name: 'akd-input',
    props: ['value'],
    data () {
        return {
        
        }
    },
    methods: {
        handleInput(event) {
            this.$emit(event, +this.$refs['akd-input-field'].value);
        }
    }
}
</script>