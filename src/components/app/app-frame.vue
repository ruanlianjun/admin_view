<template>
    <div id="frame">

        <app_header>
            <template slot="logo_name">
                <span id="logo_name">阮连军</span>
            </template>
            <template slot="logo">
                <app_logo></app_logo>
            </template>
        </app_header>

        <app_menu style="float: left"></app_menu>

    </div>
</template>

<script>
    import app_header from './app-header'
    import app_menu from './app-menu'
    import app_logo from './app-logo'
    import app_footer from './app-footer'

    export default {
        name: "app-frame",
        components: {app_footer, app_header, app_logo, app_menu}
    }
</script>

<style scoped>

</style>
