<template>
    <div class="sidePanel-outer" :class="{'is-Show':showBar}">
        <div class="sidePanel">
            <slot>Loading...</slot>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'tm-side-panel',

        data() {
            return {
            }
        },
        computed:{
            showBar(){
                return this.$store.getters.showPanel;
            }
        },
        mounted() {}

    }
</script>

<style lang="scss">
    @import "../../scss/components/sidePanel/_sidePanel.scss";
</style>