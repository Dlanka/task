<template>

    <div id="app">

        <header>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                </a>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </nav>
        </header>

        <section>
            <router-view></router-view>
            <c-input max="2" type="text" v-model="firstName" label="Number Label"></c-input>
            <c-input type="text" v-model="firstName2" label="Number Label"></c-input>
        </section>

    </div>
</template>

<script>

    export default {
        name: 'app',
        data() {
            return {
                firstName: '',
                firstName2: ''
            }
        },

        components: {
            cInput: Input
        }
    }
</script>

<style lang="scss">
    @import "scss/main.scss";

</style>
