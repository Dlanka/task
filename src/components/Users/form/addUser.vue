<template>
    <tm-form
            :title="formTitle"
            @submit="onSave">

        <div class="col-12">
            <tm-form-row>
                <div class="col-12">
                    <tm-input
                            v-model="user.firstName"
                            label="First Name"
                    ></tm-input>
                </div>
            </tm-form-row>

            <tm-form-row>
                <div class="col-12">
                    <tm-input v-model="user.lastName" label="Last Name"></tm-input>
                </div>
            </tm-form-row>

            <tm-form-row>
                <div class="col-12">
                    <tm-input v-model="user.email" label="email"></tm-input>
                </div>
            </tm-form-row>

            <tm-form-row>
                <div class="col-12">
                    <tm-input v-model="user.password" type="password" label="Password"></tm-input>
                </div>
            </tm-form-row>

        </div>

    </tm-form>
</template>

<script>
    export default {
        props: {
            isSidePanel: Boolean
        },
        data() {
            return {
                formTitle: 'Add User',
                isEdit: false,
                userId: null,
                user: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                }
            }
        },

        mounted() {
            if (this.isSidePanel) {
                this.$store.dispatch('showSideBar', this.isSidePanel)
            } else {
                this.$store.dispatch('showSideBar', false)
            }

            if (this.$route.params.id) {
                let userId = this.$route.params.id;
                this.formTitle = "Edit User";
                this.isEdit = true;
                this.loadUser(userId);
            }
        },

        watch: {},

        methods: {

            resetForm() {
                this.user = {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                }
            },

            onSave(e) {
                if (!this.isEdit) {
                    this.$store.dispatch('addUser', this.user);
                }else {
//                    this.$store.dispatch('editUser', this.user);
                }

                this.resetForm();
            },

            loadUser(userId) {

                this.$store.dispatch('getUserByKey', userId)
                    .then((user) => {
                        user !== null ? this.user = user : {};
                    })
            }
        }
    }
</script>