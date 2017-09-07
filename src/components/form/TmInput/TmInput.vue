<script>
    export default {
        name: 'tm-input',

        props: {
            type: {
                type: String,
                default: 'text',
            },
            label: String,
            id: String,
            name: String,
            max: String,
            min: String,
            value: {
                required: false
            }
        },

        data() {
            return {
                lazyValue: this.value !== undefined ? this.value : ''
            }
        },

        computed: {
            inputValue: {
                get () {
                    return this.value;
                },
                set (value) {
                    this.lazyValue = value;
                }
            },

            isNotEmpty() {
                return this.inputValue.length > 0 ? true : false;
            }
        },

        mounted() {
            this.onBlur();
        },

        methods: {
            onInput(e) {
                this.inputValue = e.target.value;
                this.$emit('input', e.target.value);
            },
            onFocus() {
                const inputGroup = this.$refs.inputGroup;
                inputGroup.classList.add('is-focus');
            },

            onBlur() {
                const inputGroup = this.$refs.inputGroup;

                inputGroup.classList.remove('is-focus');
                if (this.lazyValue.length > 0) {
                    inputGroup.classList.add('is-not-empty');
                } else {
                    inputGroup.classList.remove('is-not-empty');
                }
            }
        },

        render(createElement) {
            let self = this;
            let labelElement = null;

            //Check prop label is undefined
            if (this.label !== undefined) {
                labelElement = createElement(
                    'label', {
                        domProps: {
                            innerHTML: this.label
                        },
                    }
                )
            }

            return createElement(
                'div', {
                    'class': {
                        'input-group': true,
                        'is-not-empty': this.isNotEmpty
                    },
                    ref: 'inputGroup'
                },
                [
                    //Input
                    createElement(
                        'input', {
                            domProps: {
                                value: self.inputValue
                            },
                            attrs: {
                                type: this.type,
                                id: this.id !== undefined ? this.id : false,
                                maxlength: this.max !== undefined ? this.max : false,
                                minlenght: this.min !== undefined ? this.min : false,
                                name: this.name !== undefined ? this.name : false
                            },
                            on: {
                                input(e) {
                                    self.onInput(e)
                                },
                                focus(e) {
                                    self.onFocus(e)
                                },
                                blur(e) {
                                    self.onBlur(e)
                                }

                            }
                        }
                    ),

                    //Label
                    labelElement,

                    //line Animation
                    createElement(
                        'div', {
                            'class': {
                                'animate-line': true
                            },
                            ref: 'animateLine'
                        }
                    ),

                    //Bottom Line
                    createElement('div', {
                        'class': {
                            'bottom-line': true
                        }
                    }),
                ]
            )
        }

    }
</script>


<style lang="scss">

    @import "../../../scss/components/form/input";

</style>