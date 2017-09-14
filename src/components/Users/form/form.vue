<template>
    <tm-form
            :title="formTitle"
            @submit="onSaveOrEdit"
            ref="form">

        <div class="col-12">

            <tm-form-row>
                <div class="col-12">
                    <tm-input
                            v-model="user.firstName"
                            label="First Name"
                            :rule="[checkNames(user.firstName),chLength(user.firstName)]"
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

            <tm-toast
                    v-model="toast"
                    :absolute="false"
                    :class="message.type">
                {{message.text}}
            </tm-toast>

        </div>

    </tm-form>
</template>

<script>

    import MessageType from '../../../mixins/message-type'
    import Messages from '../../../mixins/messages'

    export default {
        props: {
            isSidePanel: Boolean
        },

        mixins: [MessageType, Messages],

        data() {
            return {
                formTitle: 'Add User',
                isEdit: false,
                userId: null,
                toast: false,
                message: {
                    type: '',
                    text: ''
                },
                nameRule: [

                ],
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
                this.userId = this.$route.params.id;
                this.formTitle = "Edit User";
                this.isEdit = true;
                this.loadUser();
            }
        },

        methods: {
            checkNames(v) {
                return !!v || 'This is required';
            },
            chLength(v){
                return v.length > 2 || 'min lenght more than 2';
            },
            resetForm() {
                this.user = {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                }
            },

            onSaveOrEdit(e) {
                if(this.$refs.form.validateForm()){
                    alert('Valid')
                }else {
                    alert('Not Valid')
                }

                if (!this.isEdit) {

                    this.$store.dispatch('addUser', this.user)
                        .then(res => {
                            this.showToast(this.SUCCESS, this.SAVE.SUCCESSFULLY);
                            this.resetForm();
                        })
                        .catch(error => {
                            this.showToast(this.ERROR, error);
                        });

                } else {

                    var payload = {
                        key: this.userId,
                        data: this.user
                    };

                    this.$store.dispatch('editUser', payload);

                    this.$store.dispatch('allUsers');
                    this.resetForm();
                }

            },

            showToast(type, text) {
                this.toast = true;
                this.message = {type, text};
            },

            loadUser() {

                this.$store.dispatch('getUserByKey', this.userId)
                    .then((user) => {
                        user !== null ? this.user = user : {};
                    })
            }
        }
    }
</script>