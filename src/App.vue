<template>

    <div id="app">

        <header>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                </a>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/user">User</router-link>
                    </li>
                </ul>
            </nav>
        </header>

        <!--Side Panel-->
        <tm-side-panel>
            <router-view name="sidePanel"></router-view>
        </tm-side-panel>

        <section class="main-block">

            <div class="container">
                <tm-top-bar @click="action"></tm-top-bar>
            </div>

            <router-view></router-view>
        </section>

    </div>
</template>

<script>
    import TmTopBar from "./components/topBar/TmTopBar.vue"

    export default {
        name: 'app',
        data() {
            return {}
        },

        computed: {
            //Top Button Action
            action() {
                if (this.$store.getters.buttonAction) {
                    return this.$store.getters.buttonAction;
                } else {
                    return this.addNew;
                }
            }
        },

        mounted() {
            this.$store.dispatch('toggleTopBar', true);
        },

        methods: {
            addNew() {
            }
        },

        components: {
            'tm-top-bar': TmTopBar
        }
    }
</script>

<style lang="scss">
    @import "scss/main.scss";
</style>
