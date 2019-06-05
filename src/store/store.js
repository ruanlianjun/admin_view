import Vue from 'vue'
import Vuex from 'vuex'
import user from '../store/common/userInfo'
import permission from '../store/common/permission'

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        user,
        permission
    }
});
