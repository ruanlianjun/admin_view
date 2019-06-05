const rclass = /[\t\r\n\f]/g;
import Vue from 'vue'

export default {
    getClass(elem) {
        return (elem.getAttribute && elem.getAttribute('class')) || '';
    },
    hasClass(elem, selector) {
        let className;
        className = ` ${selector} `;
        if (elem.nodeType === 1 && (` ${this.getClass(elem)} `)
            .replace(rclass, ' ')
            .indexOf(className) > -1) {
            return true;
        }

        return false;
    },
    isLogin() {
        return window.localStorage.getItem('isLogin')
    },
    hasRoule(uid, roule) {
        return roule
    },
    async hasPermission() {
        let res = await Vue.prototype.$http.post('/api/checkUserAccess').then(res => {
            return res;
        });
        if (res && res.data.data && res.data.code === 200 && res.data.data.access === true) {
            return 1;
        }

        return 0;
    }
}


