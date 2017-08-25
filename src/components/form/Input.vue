<template>
    <div class="input-group" ref="inputGroup">
        <input v-if="type == 'text'" type="text"
               :id="id !== undefined ? id : false"
               :maxlength="max !== undefined ? max : false"
               :minlenght="min !== undefined ? min : false"
               :name="name !== undefined ?  name : false"
               v-model="inputValue"
               @focus="onFocus"
               @blur="onBlur"
        >

        <input v-if="type == 'number'" type="number"
               :id="id !== undefined ? id : false"
               :maxlength="max !== undefined ? max : false"
               :minlenght="min !== undefined ? min : false"
               :name="name !== undefined ?  name : false"
               v-model="inputValue"
               @focus="onFocus"
               @blur="onBlur"
        >

        <input v-if="type == 'password'" type="password"
               :id="id !== undefined ? id : false"
               :maxlength="max !== undefined ? max : false"
               :minlenght="min !== undefined ? min : false"
               :name="name !== undefined ?  name : false"
               v-model="inputValue"
               @focus="onFocus"
               @blur="onBlur"
        >

        <label v-if="label !== undefined ? true : false">{{label}}</label>
        <div class="animate-line" ref="animateLine"></div>
        <div class="bottom-line"></div>
    </div>
</template>

<script>
    export default {

        props: {
            type: {
                type: String,
                default: 'text',
            },
            label: String,
            id: String,
            name: String,
            max: String,
            min: String
        },

        data() {
            return {
                inputValue: '',
                isValidLabel: false,
                isRequired: false
            }
        },

        mounted() {

        },

        watch: {
            inputValue() {
                this.$emit('input', this.inputValue)
            }
        },

        methods: {
            onFocus() {
                const inputGroup = this.$refs.inputGroup;
                inputGroup.classList.add('is-focus');
            },

            onBlur() {
                const inputGroup = this.$refs.inputGroup;

                inputGroup.classList.remove('is-focus');

                if (this.inputValue.length > 0) {
                    inputGroup.classList.add('is-not-empty');
                }else {
                    inputGroup.classList.remove('is-not-empty');
                }
            }
        }

    }
</script>


<style lang="scss">

    @import "../../scss/components/form/input.scss";

</style>