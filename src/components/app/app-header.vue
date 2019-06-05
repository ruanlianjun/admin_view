<template>
    <div id="header">
        <div id="logo_contain">
            <slot name="logo">
                <img src="../../assets/logo.png" alt="">
            </slot>
            <slot name="logo_name">
                <span id="logo_name">RUAN-LIAN-JUN</span>
            </slot>
        </div>
        <slot name="userInfo">
            <div id="userInfo">
                <div id="userHideboxHover">
                    <div id="userOutLogin">
                        <span id="h-icon-user"><i class="h-icon-user"></i></span>
                        <span>{{user_name}}</span>
                        <span class="down"><i class="h-icon-down"></i></span>
                    </div>
                    <div id="hideList">
                        <span>退出登录</span>
                    </div>
                </div>
            </div>
        </slot>
    </div>
</template>

<script>
    export default {
        name: "app-header",
        data() {
            return {
                user_name: 'ruanlianjun'
            }
        }
    }
</script>

<style scoped lang="less">
    #header {
        width: 100%;
        height: 65px;

        background: #1A1A1A;
        color: #B3B3B3;
        box-sizing: content-box;


        #logo_contain {
            width: 100px;
            height: 65px;
            display: grid;
            grid-template-rows: 30px 20px;
            grid-template-columns: 100px;
            grid-row-gap: 5px;
            margin-left: 10px;
            box-sizing: border-box;
            padding: 5px 0px 5px 0px;
            float: left;
        }

        img {
            height: 30px;
            display: inline-block;
            margin: 0 auto;
        }

        #logo_name {
            font-size: 12px;
            text-align: center;
        }

        #userInfo {
            width: 400px;
            height: 65px;
            display: grid;
            float: right;
            margin-right: 50px;
            grid-template-columns: 80px;
            grid-template-rows: 60px;


            #userOutLogin {
                width: 130px;
                color: white;
                height: 65px;
                font-size: 15px;
                line-height: 65px;
                display: grid;
                grid-template-rows: 30px;
                grid-template-columns: 20% 60% 20%;
                grid-column-gap: 1px;
                cursor: pointer;
                margin-left: 200px;

                .h-icon-down {
                    line-height: 65px;
                    font-size: 13px;
                    transition: 0.5s transform;
                    transition-property: all;
                }

                .down {
                    margin: auto;
                }
            }

            #hideList {
                width: 150px;
                min-height: 100px;
                border: 1px solid transparent;
                background: #333333;
                color: white;
                display: grid;
                grid-template-rows: auto;
                box-shadow: 0 4px 10px #333333;
                box-sizing: border-box;
                visibility: hidden;
                transition: 0.5s display;
                border-bottom-left-radius: 3%;
                border-bottom-right-radius: 3%;
                padding: 0 5px 0 5px;
                margin-left: 190px;
                z-index: -2;

                > span {
                    font-size: 12px;
                    margin-top: 10px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    border: 1px solid rgb(179, 179, 179);
                    cursor: pointer;
                    z-index: 999;
                }

                span:hover {
                    cursor: pointer;
                }
            }

            #userHideboxHover:hover {
                .h-icon-down {
                    transform: rotate(-180deg);
                    transform-origin: center center;
                }
            }

            #userHideboxHover:hover #hideList {
                visibility: visible;
            }


        }
    }
</style>
