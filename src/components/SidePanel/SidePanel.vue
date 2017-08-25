<template>
    <div class="sidePanel-outer" :class="{'is-Show':isShow}">
        <div class="sidePanel">
            <router-view name="sidePanel"></router-view>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'tm-side-panel',
        props: {
            show: Boolean
        },

        data() {
            return {
                isShow: false
            }
        },

        watch: {
            isShow(){
                return this.show;
            }
        },

        methods: {}

    }
</script>

<style lang="scss">
    @import "../../scss/components/sidePanel/_sidePanel.scss";
</style>