<script>

    export default {

        name: 'tm-button',

        data() {
            return {}
        },

        props: {
            type: {
                type: String,
                default: 'button'
            },
            id: String,
            name: String
        },

        methods: {
            onClick(e) {
                this.$emit('click', e);
            }
        },

        render(createElement) {
            return createElement(
                'button',
                {
                    'class': {
                        'tm-button': true
                    },
                    attrs: {
                        type: this.type,
                        id: this.id !== undefined ? this.id : false,
                        name: this.name !== undefined ? this.name : false
                    },
                    on: {
                        click: this.onClick
                    },
                    ref: 'btn'
                },
                this.$slots.default
            )
        }

    }

</script>

<style lang="scss">
    @import "../../../scss/components/form/button";
</style>