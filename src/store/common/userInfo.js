import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        user_info: null,
        token: null
    },
    mutations: {
        updateUserInfo: (state, payload) => {
            window.localStorage.setItem('isLogin', 'true');
            window.localStorage.setItem("token", payload.token);
            window.localStorage.setItem("user_id", payload.user_id);
            state.user_info = payload.user_info;
        },
    },
    actions: {
        getUserInfo: async ({commit}, payload) => {
            let username = payload.username;
            let password = payload.password;
            let remain_login = payload.remain_login || null;
            let userInfo = await Vue.prototype.$http.post(`/api/getUserInfo`, {
                username,
                password,
                remain_login
            }).then(res => {
                if (res.data.code === 4001) {
                    HeyUI.$Message.error(res.data.msg)
                }
                return res.data.data;
            });

            if (userInfo) {
                commit('updateUserInfo', userInfo)
                return true;
            }
            return false

        }
    },
    getters: {
        getUserToken: (state) => {
            if (state.user_info) {
                return state.user_info.token
            }
            return null
        },
        getUserId: (state) => {
            if (state.user_info && state.user_info.id) {
                return state.user_info.id;
            }
            return null
        }
    }
};
