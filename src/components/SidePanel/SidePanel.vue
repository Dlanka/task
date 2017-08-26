<template>
    <div class="sidePanel-outer" :class="{'is-Show':isShow}">
        <div class="sidePanel">
           <slot>asasas</slot>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'tm-side-panel',

        data() {
            return {
                isShow: false
            }
        },
        mounted(){
            Event.$on('showSidePanel', () => {
                this.isShow = true;
            });

            Event.$on('hideSidePanel', () => {
                this.isShow = false;
            });

            Event.$on('toggleSidePanel', () => {
                this.isShow = !this.isShow;
            });
        }

    }
</script>

<style lang="scss">
    @import "../../scss/components/sidePanel/_sidePanel.scss";
</style>