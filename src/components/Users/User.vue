<template>
    <div class="user">
       <h1>User </h1>
        <button @click="showPanel">Show panel</button>
    </div>
</template>

<script>

    export default {
        name: 'user',

        data() {
            return {

            }
        },

        methods: {
            showPanel(){
                alert('sas')
                this.isShowSidePanel = true;
            }
        }

    }
</script>
