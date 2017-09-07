<template>

    <div class="form-container">

        <div class="col-12 pt-20 pb-20 form-title-wrap" v-if="this.title.length > 0">
            <h1 class="col-12 form-title">{{ this.title}}</h1>
        </div>

        <div class="col-12">
            <form @submit.prevent="onSubmit" novalidate>

                <div class="row form-fields">
                    <div class="col">
                        <slot></slot>
                    </div>
                </div>

                <div class="row form-action">
                    <div class="col-12 align-right mt-20">
                        <slot name="form-action">
                            <slot name="action">
                                <tm-button type="submit" class="primary">Save</tm-button>
                            </slot>
                            <tm-button @click="onClose">Close</tm-button>

                        </slot>
                    </div>
                </div>

            </form>
        </div>

    </div>

</template>

<script>

    export default {
        name: 'tm-form',
        props: {
            title: {
                type: String,
                default: ''
            },
        },

        methods: {
            onSubmit(e) {
                this.$emit('submit', e);
            },

            onClose(e) {
                this.$emit('close', e);
                this.$store.dispatch('showSideBar', false);
                this.$router.go(-1)
            }
        }

    }

</script>

<style lang="scss">
    @import "../../../scss/variable";

    .form-title-wrap {
        background: $secondary;
        margin-bottom: 30px;

        h1 {
            color: $white;
        }
    }
</style>