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

        <section>
            <router-view></router-view>
        </section>

    </div>
</template>

<script>

    export default {
        name: 'app',
        data() {
            return {}
        },

        methods: {
        }
    }
</script>

<style lang="scss">
    @import "scss/main.scss";
</style>
