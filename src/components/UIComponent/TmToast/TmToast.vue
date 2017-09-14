<script>
    export default {
        name: 'tm-toast',

        props: {
            show: Boolean,
            duration: {
                type: Number,
                default: 4000
            },
            absolute: {
                type: Boolean,
                default: true
            },
            value: {required: false}
        },
        data() {
            return {
                activeTimeout: {},
                isShow: false,
                isActive: this.value
            }
        },
        mounted() {
            this.setToast();
        },
        watch: {

            value(val) {
                this.isActive = val;
            },

            isActive(val) {
                val !== this.value && this.$emit('input', val);
                this.setToast();
            }

        },
        computed: {

            classes() {
                return {
                    'tm-toast': true,
                    'is-show': this.isActive,
                    'is-fixed':this.absolute
                }
            },

        },
        methods: {

            setToast() {
                clearTimeout(this.activeTimeout);

                this.activeTimeout = setTimeout(() => {
                    this.isActive = false;
                }, this.duration);
            }

        },
        render(h) {
            var child = [];

            if (this.isActive) {
                child.push(h('div', {
                    'class': 'tm-msg'
                }, this.$slots.default));
            }

            return h('div', {
                    'class': this.classes,
                    on: this.$listeners
                }, child
            );

        }

    }
</script>

<style lang="scss">
    @import "../../../scss/components/UIComponents/TmToast";
</style>