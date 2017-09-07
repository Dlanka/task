
<template>
    <div class="row form-row">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'tm-form-row'
    }
</script>

<style lang="scss">
    .form-row {
        margin-bottom: 15px;
    }
</style>