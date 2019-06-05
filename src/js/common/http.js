import axios from 'axios';
import store from '../../store/store'
import router from '../../router/router'

axios.defaults.timeout = 10000;

axios.interceptors.request.use(
    config => {
        const token = window.localStorage.getItem('token');
        token && (config.headers.Authorization = token);
        let user_id = store.getters['user/getUserId'];
        user_id = user_id ? user_id : window.localStorage.getItem('user_id');
        user_id && (config.headers.user_id = user_id);

        return config;
    },
    error => {
        return Promise.error(error);
    });

axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。
                case 401:
                    router.replace({
                        path: '/login',
                        query: {redirect: router.currentRoute.fullPath}
                    });
                    break;
                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面
                case 403:
                    HeyUI.$Message.error('登录过期，请重新登录');
                    // 清除token
                    localStorage.removeItem('token');
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    setTimeout(() => {
                        router.replace({
                            path: '/login',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        });
                    }, 1000);
                    break;
                // 404请求不存在
                case 404:
                    HeyUI.$Message('网络请求不存在');
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    HeyUI.$Message(error.response.data.message);
            }
            return Promise.reject(error.response);
        }
    }
);


export default axios;
