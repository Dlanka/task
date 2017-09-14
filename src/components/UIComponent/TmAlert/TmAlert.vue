<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'tm-alert',
        data() {
            return {
                message: ''
            }
        },
        props: {
            success: Boolean,
            info: Boolean,
            error: Boolean,
            warn: Boolean,
        },

        computed: {
            classes() {
                return {
                    'tm-alert': true,
                    'success': this.success,
                    'info': this.info,
                    'error': this.error,
                    'warn': this.warn,
                }
            }
        }
    }
</script>

<style>

</style>