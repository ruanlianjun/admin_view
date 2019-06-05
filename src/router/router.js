import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/login.vue'
import utils from '../js/common/utils'
import {mapActions} from "vuex";

Vue.use(Router);
const expect = ['login', 'noPermission'];

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            redirect:'Dashboard',
            meta: {
                permissions: 1
            },
            children: [
                {
                    path: "/dashboard",
                    name: "Dashboard",
                    component: () => import('../views/dashboard/index.vue')
                },
                {
                    path: "/powerManage",
                    name: "PowerManage",
                    component: () => import('../views/powerManage/index.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                permissions: 2
            }
        },
        {
            path: '/noPermission',
            name: 'noPermission',
            component: () => import('_views/error/403.vue'),
            meta: {
                permissions: 4
            }
        }
    ]
});

router.beforeEach(async (to, from, next) => {
    if (expect.includes(to.name)) {
        return next();
    }

    if (!utils.isLogin()) {
        return next({name: 'login'})
    }

    await mapActions(['permission/userHasPermission']);
    let {permissions} = to.meta;

    if (permissions) {
        let hasPower = utils.hasPermission(permissions);

        let isAccess = 0;
        await hasPower.then(res => {
            isAccess = res;
        });

        if (1 !== isAccess) {
            return next({name: 'noPermission'})
        }
    }
    return next()

});
export default router
