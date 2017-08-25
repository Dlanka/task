<template>

    <div id="app">

        <header>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                </a>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/test">User</router-link>
                    </li>
                </ul>
            </nav>
        </header>

        <tm-side-panel :show="isShowSidePanel"></tm-side-panel>

        <section>
            <button @click="showPanel">Show panel</button>
            <router-view></router-view>
        </section>

    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                a: ''
            }
        },
        mounted() {
            this.$createElement('input');
        },

        methods: {
            showPanel() {
                this.isShowSidePanel = true;
            }
        }
    }
</script>

<style lang="scss">
    @import "scss/main.scss";
</style>
