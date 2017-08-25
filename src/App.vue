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
            <tm-input label="Nuber"></tm-input>
            <router-view></router-view>
        </section>

    </div>
</template>

<script>

    export default {
        name: 'app',
        data() {
            return {a:''}
        }
    }
</script>

<style lang="scss">
    @import "scss/main.scss";
</style>
