<style lang="less">
    @gradient-color: #3788ee;
    @bg-color: #f7f8fa;
    @title-color: #3a3a3a;
    @text-color: #7e7e7e;
    @placeholder-color: #7e7e7e;
    .user_data-vue {
        text-align: center;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: @bg-color;

        .user_data-container {
            width: 320px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            .user_data-content {
                letter-spacing: 2px;
                background: #FFF;
                padding: 70px 30px 20px;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06);
                border-radius: 3px;
                box-sizing: border-box;

                > div {
                    margin: 30px 0;

                    &.user_data-input {
                        position: relative;

                        .placeholder {
                            position: absolute;
                            color: @placeholder-color;
                            top: 6px;
                            font-size: 16px;
                            transition: all .2s;
                            left: 0;
                            pointer-events: none;
                        }

                        input {
                            font-size: 16px;
                            padding: 8px 0;
                            height: 40px;
                            width: 100%;
                            border: none;
                            border-radius: 0;
                            border-bottom: 1px solid #d3d3d3;
                            box-shadow: inset 0 0 0 1000px #fff;
                            outline: none;
                            box-sizing: border-box;
                            transition: .3s;
                            font-weight: 200;

                            &:focus {
                                border-bottom-color: @gradient-color;
                                box-shadow: inset 0 0 0 1000px #fff;
                            }
                        }

                        input:focus + .placeholder, input:-webkit-autofill + .placeholder, .placeholder.fixed {
                            font-size: 13px;
                            top: -16px;
                        }
                    }

                    &.user_data-title {
                        font-size: 30px;
                        color: @title-color;
                        line-height: 1;
                        margin: -16px 0px 40px;
                        font-weight: 200;
                    }

                }

                > .buttonDiv {
                    margin-top: 45px;

                    .h-btn {
                        padding: 12px 0;
                        font-size: 18px;
                        opacity: .8;
                        border-radius: 3px;
                        background: @gradient-color;
                        border-color: @gradient-color;

                        &:hover {
                            opacity: 1;
                            background: @gradient-color;
                            border-color: @gradient-color;
                        }
                    }
                }
            }

            .copyright {
                letter-spacing: 1px;
                margin-top: 30px;
                color: @text-color;

                a {
                    color: @text-color;
                }
            }
        }
    }
</style>

<template>
    <div class="user_data-vue">
        <div class="user_data-container">
            <div class="user_data-content">
                <div class="user_data-title">管理系统</div>
                <div class="user_data-name user_data-input">
                    <input type="text" name="username" v-model="user_data.username" autocomplete="off"/>
                    <span class="placeholder"
                          :class="{fixed: user_data.username != '' && user_data.username != null}">用户名</span>
                </div>
                <div class="user_data-password user_data-input">
                    <input type="password" name="password" v-model="user_data.password" @keyup.enter="submit"
                           autocomplete="off"/>
                    <span class="placeholder" :class="{fixed: user_data.password != '' && user_data.password != null}">密码</span>
                </div>
                <div>
                    <h-switch style="float: left;margin-bottom: 20px" v-model="user_data.remain_login" :small="true">
                        记住登录
                    </h-switch>
                    <span style="float: right;margin-bottom: 20px;cursor: pointer" class="yellow-color">忘记密码？</span>
                </div>
                <div class="buttonDiv">
                    <Button style=""
                            :loading="loading"
                            block color="primary"
                            size="l"
                            @click="submit">登录
                    </Button>
                </div>
            </div>
            <p class="copyright"> Copyright © 2019 ruanlianjun </p>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "login",
        data() {
            return {
                loading: false,
                user_data: {
                    username: '',
                    password: '',
                    remain_login: false
                }
            }
        },
        mounted() {
        },
        methods: {
            ...mapActions('user', ['getUserInfo']),
            async submit() {
                let res = await this.getUserInfo(this.user_data);
                if (res) {
                    return this.$router.push({name: 'home'})
                }
                this.$Message.error("登录失败")

            }
        }
    }
</script>

<style scoped>

</style>
