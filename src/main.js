import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import HeyUI from 'heyui'
import 'heyui/themes/index.css'
import http from './js/common/http'

Vue.use(HeyUI);
Vue.prototype.$http = http;
// Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
