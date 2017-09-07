<template>
    <div class="col tm-card">
        <div class="row">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'tm-card'
    }
</script>

<style lang="scss">
    @import "../../../scss/components/Tmcard/_tm-card.scss";
</style>