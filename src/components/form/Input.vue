<template>
    <div class="input-group" ref="inputGroup">
        <input type="text"
               :id="id.length > 0 ?  id : false"
               :maxlength="max > 0 ? max : false"
               :minlenght="min > 0 ? min : false"
               :name="name.length > 0 ?  name : false"
               v-model="inputValue"
               @focus="onFocus"
               @blur="onBlur"
        >
        <label v-if="label.length> 0 ? true : false">{{label}}</label>
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
            if (this.label.length > 0) {
                this.isValidLabel = true;
            }
        },

        watch: {
            inputValue() {
                this.$emit('input', this.inputValue)
            },

        },

        methods: {
            onFocus() {
                this.$refs.inputGroup.classList.add('is-focus');
            },

            onBlur() {
                if (!this.inputValue.length > 0) {
                    this.$refs.inputGroup.classList.remove('is-focus');
                }
            }
        }

    }
</script>


<style lang="scss">

    @import "../../scss/components/form/input.scss";

</style>