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
        data() {
            return {
                inputs: []
            }
        },

        mounted() {
            this.pushInputs();
        },

        methods: {
            onSubmit(e) {
                console.log(this.$refs.myForm)
                this.$emit('submit', e);
            },

            getInputs() {
                var result = [];
                const search = (children) => {
                    for (let child of children) {
                        if (child.valid !== undefined) {
                            result.push(child);
                        } else {
                            search(child.$children)
                        }
                    }
                    return result;
                };

                return search(this.$children);
            },

            pushInputs() {
                const _inputs = this.getInputs();
                for (const child of _inputs) {

                    if (this.inputs.includes(child)) {
                        continue;
                    }
                    this.inputs.push(child);
                }
            },

            onClose(e) {
                this.$emit('close', e);
                this.$store.dispatch('showSideBar', false);
                this.$router.go(-1)
            },

            validateForm() {

                var isValid = this.inputs.every(input => {
                    return input.valid == true;
                });

                return isValid;
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