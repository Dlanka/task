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
            },
            rule: {
                default: ""
            }
        },

        data() {
            return {
                lazyValue: this.value !== undefined ? this.value : '',
                hasRule: false,
                errorMessage: '',
                isFocus: false,
                isEmpty: true,
                valid: false
            }
        },

        computed: {

            inputValue: {
                get() {
                    return this.value;
                },
                set(value) {
                    this.lazyValue = value;
                }
            },

            classes() {
                return {
                    'is-error': this.hasRule,
                    'input-group': true,
                    'is-not-empty': !this.isEmpty,
                    'is-focus': this.isFocus
                }
            }
        },

        watch: {

            rule(val) {
                this.showRules();
            },

            errorMessage() {
                this.showRules();
            }
        },

        mounted() {
            this.onBlur();
            //this.showRules();
            if (this.rule.length == 0) {
                this.valid = undefined;
            }

        },

        methods: {
            showRules() {

                if (this.rule instanceof Array) {

                    if (this.rule.length > 0) {
                        let errorMsg = this.rule.filter((rule) => {
                            if (rule !== true) {
                                return rule;
                            }
                        });

                        errorMsg.length > 0 ? this.hasRule = true : this.hasRule = false;
                        this.hasRule !== true ? this.valid = true : this.valid = false;
                        this.errorMessage = errorMsg[0];
                    }

                }
            },

            onInput(e) {
                this.inputValue = e.target.value;
                this.$emit('input', e.target.value);
            },
            onFocus(e) {
                this.isFocus = true;

            },

            onBlur() {
                this.isFocus = false;

                if (this.lazyValue.length > 0) {
                    this.isEmpty = false;
                } else {
                    this.isEmpty = true;
                    this.showRules();
                }
            }
        },

        render(createElement) {
            let self = this;
            let labelElement,
                errorDiv = null;

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


            if (this.rule) {
                errorDiv = createElement(
                    'div', {
                        'class': {
                            'error': true
                        },
                        ref: 'error'
                    }, self.errorMessage
                );
            }

            return createElement(
                'div', {
                    'class': this.classes,
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

                    //Error
                    errorDiv
                ]
            )
        }

    }
</script>


<style lang="scss">

    @import "../../../scss/components/form/input";

</style>