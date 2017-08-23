<template>
    <div id="app">
        <c-input max="2" type="text" v-model="firstName" label="Number Label"></c-input>
        <c-input type="text" v-model="firstName2" label="Number Label"></c-input>
        {{ firstName }}
    </div>
</template>

<script>
    import Input from './components/form/Input.vue'

    export default {
        name: 'app',
        data() {
            return {
                firstName: '',
                firstName2: ''
            }
        },

        components: {
            cInput: Input
        }
    }
</script>

<style lang="scss">

</style>
