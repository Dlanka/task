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

            label: {
                type: String,
                default: ''
            },

            id: {
                type: String,
                default: ''
            },

            name: {
                type: String,
                default: ''
            },

            max: {
                type: String,
                default: ''
            },
            min: {
                type: String,
                default: ''
            }
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

    $bottomLineColor: rgba(0, 0, 0, 0.12);
    $bottomLineFocusColor: #4285f4;
    $labelFocusColor: #4285f4;
    $labelColor: rgba(0, 0, 0, 0.56);
    $inputColor: rgba(0, 0, 0, 0.86);
    $fontWeight300: 300;

    @mixin bottom-line {
        height: 2px;
        position: absolute;
        bottom: 0;
    }

    @mixin line-animation {
        -webkit-transition: 1s cubic-bezier(.47, .47, .23, .98);
        -moz-transition: 1s cubic-bezier(.47, .47, .23, .98);
        -ms-transition: 1s cubic-bezier(.47, .47, .23, .98);
        -o-transition: 1s cubic-bezier(.47, .47, .23, .98);
        transition: 1s cubic-bezier(.47, .47, .23, .98);
    }

    .input-group {
        float: left;
        width: 100%;
        height: 40px;
        margin-bottom: 10px;
        position: relative;

        input:not([type="radio"]),
        input:not([type="checkbox"]) {
            border: none;
            outline: 0;
            height: 24px;
            font-size: 14px;
            margin-top: 12px;
            position: relative;
            z-index: 2;
            width: 100%;
            color: $inputColor;
            background-color: transparent;
        }

        label {
            font-size: 14px;
            position: absolute;
            bottom: 2px;
            left: 0;
            color: $labelColor;
            z-index: 1;
            -webkit-transition: 0.3s cubic-bezier(.47, .47, .23, .98);
            -moz-transition: 0.3s cubic-bezier(.47, .47, .23, .98);
            -ms-transition: 0.3s cubic-bezier(.47, .47, .23, .98);
            -o-transition: 0.3s cubic-bezier(.47, .47, .23, .98);
            transition: 0.3s cubic-bezier(.47, .47, .23, .98);
        }

        .animate-line {
            @include bottom-line;
            @include line-animation;
            z-index: 1;
            width: 0;
            background: $bottomLineFocusColor;
        }

        .bottom-line {
            @include bottom-line;
            width: 100%;
            background: $bottomLineColor;
        }

        &.is-focus {
            label {
                bottom: 25px;
                font-size: 12px;
                color: $labelFocusColor;
                font-weight: 300;
            }

            .animate-line {
                width: 100%;
            }
        }
    }

</style>