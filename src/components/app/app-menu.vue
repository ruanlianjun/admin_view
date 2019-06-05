<template>
    <div id="app_menu">
        <li v-for="(v,i) in menu" :key="i">
            <span @click="goToPage(v.key)">
                <i :class="v.icon"></i>
                &nbsp;<span>{{v.title}}</span>
                <span class="icon_down" v-if="v.children">
                    <i class="h-icon-down" v-if="v.children"></i>
                </span>
            </span>

            <div class="hide_box" v-if="v.children">
                <span v-for="(vv,ii) in v.children" v-bind:key="ii" @click="goToPage(vv.key)">
                    &nbsp;
                    <i class="h-icon-minus"></i>
                    &nbsp;
                    {{vv.title}}
                </span>
            </div>
        </li>
    </div>
</template>

<script>
    import menuConfig from "../../config/menu"

    export default {
        name: "app-menu",
        data() {
            return {
                menu: menuConfig
            }
        },
        mounted() {
            // console.log(menuConfig)
        },
        methods: {
            goToPage(key) {
                this.$router.replace({name: key});
            }
        }
    }
</script>

<style scoped lang="less">
    #app_menu {
        height: 100vh;
        width: 12vw;
        background: #1A1A1A;
        list-style: none;
        li {
            width: 100%;
            color: white;
            cursor: pointer;
            padding: 5px;

            > span {
                width: 100%;
                padding: 10px;
                display: inline-block;

                .icon_down {
                    float: right;
                    margin-right: 10px;
                    font-size: 12px;
                    line-height: 25px;
                }

                .h-icon-down {
                    font-size: 10px;
                    text-align: left;
                    transition: all 0.5s ease-out;
                }
            }

            .hide_box {
                width: 100%;
                z-index: 9999;
                background: #323232;
                display: none;
                transition: all 0.5s ease-out;
                padding: 5px;

                > span {
                    width: 100%;
                    padding: 10px;
                    display: inline-block;

                    .h-icon-minus {
                        font-size: 12px;
                    }
                }
            }
        }

        li:hover {
            .h-icon-down {
                transform: rotate(-180deg);
            }

            span {
                background: #323232;
            }

            .hide_box {
                display: block;


                > span:hover {
                    color: rgb(255, 132, 0);
                    background: #5A4636;
                }
            }
        }
    }
</style>
