<template>
    <div class="user">

        <div class="container">

            <tm-card v-for="user in allUsers" :key="user.id">
                <div class="col-md-4">
                    <h5>{{ user.firstName}}</h5>
                </div>
                <div class="col">
                    <h5>{{ user.email}}</h5>
                </div>
                <div class="col">
                    <button type="button" @click="onEdit(user.id)">Edit</button>
                </div>
            </tm-card>
        </div>

    </div>
</template>

<script>

    export default {
        name: 'user',
        props: {
            isSidePanel: Boolean
        },
        data() {
            return {
                name: 'lanka'
            }
        },

        mounted() {
            this.$store.dispatch('toggleTopBar', true);
            this.$store.commit('topButton', this.addNew);

            this.$store.dispatch('allUsers');
        },

        computed: {
            allUsers() {
                return this.$store.getters.users;
            }
        },

        methods: {

            addNew() {
                this.$router.push({path: '/user/add'});
            },

            onEdit(userId) {
                this.$router.push({path: `/user/edit/${userId}`})
            }

        }

    }
</script>
