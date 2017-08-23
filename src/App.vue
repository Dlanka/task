<template>
    <div id="app">
        <c-input type="number" v-model="firstName"></c-input>
        {{ firstName }}
    </div>
</template>

<script>
    import Input from  './components/form/Input.vue'

    export default {
        name: 'app',
        data () {
            return {
                firstName:''
            }
        },

        components:{
            cInput:Input
        }
    }
</script>

<style lang="scss">

</style>
