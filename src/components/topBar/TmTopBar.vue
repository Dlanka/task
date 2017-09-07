<template>
    <div class="row justify-content-center" v-if="this.isShowTopBar">
        <div class="col align-right">
            <tm-button :class="classes" @click="addNew">{{ this.btnText }}</tm-button>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'tm-top-bar',
        props: {

            btnText: {
                type: String,
                default: 'Add New'
            }

        },

        computed: {

            classes() {
                return {
                    's-dark': true,
                    'small':true
                }
            },

            isShowTopBar(){
                return this.$store.getters.showTopBar;
            }

        },

        methods: {
            addNew(e) {
                this.$emit('click', e);
            }
        }


    }

</script>