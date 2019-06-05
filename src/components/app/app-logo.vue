<template>
    <div id="app_logo">
        <span>R</span>
    </div>
</template>

<script>
    export default {
        name: "app-logo",
        data() {
            return {
                logo_image: "../../assets/logo.png"
            }
        },
        methods: {}
    }
</script>

<style scoped>
    #app_logo{
        color: white;
        text-align: center;
        line-height: 25px;
        font-size: 18px;
    }
</style>
