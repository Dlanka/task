<template>
    <div class="input-group">
        <input v-if="type === 'text'" type="text" v-model="inputValue">
        <input v-if="type === 'number'" type="number" v-model="inputValue">
    </div>
</template>

<script>
    export default {

        props: {
            type:{
                type:String,
                default:'text'
            }
        },
        
        data(){
            return {
                inputValue: '',
                myType:''
            }
        },

        watch: {
            inputValue(){
                this.$emit('input', this.inputValue)
            }
        },


    }
</script>