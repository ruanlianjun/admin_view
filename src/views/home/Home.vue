<template>
    <div class="home">
        <app_frame id="menu"></app_frame>

        <router-view id="router_view"></router-view>
    </div>
</template>

<script>

    import app_frame from '../../components/app/app-frame'

    export default {
        name: 'home',
        components: {app_frame}
    }
</script>

<style scoped lang="less">
    #router_view {
        padding: 10px;
        width: 88vw;
        float: right;
        z-index: -1;
    }
</style>
