<script>


    export default {

        name: 'test',
        render(createElement) {
            var self = this;
            return createElement(
                'input', {
                    attrs: {
                        type: this.type
                    },
                    on: {
                        focus(){
                            self.onFocus();
                        }
                    }
                }
            )
        },
        props: {
            type: {
                type: String,
                default: 'text'
            }
        },
        methods: {
            onFocus() {
                console.log('asas')
            }
        }
    }


</script>