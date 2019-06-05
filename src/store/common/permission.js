export default {
    namespaced: true,
    state: {
        permissionList: []
    },
    mutations: {
        updatePermissionList: ({state, payload}) => {
            state.permissionList = payload;
        }
    },
    actions: {
        userHasPermission: async ({state, commit}) => {
            let user_id = state('userInfo/state.userInfo').user_id;
            const list = await axios.post(window.location.host + '/getUserPermissions', {user_id}).then(res => {
                return res.data.data;
            }).catch(err => {
                if (err.response) {
                    this.$message.error(err.response.statusText)
                    return;
                }
                this.$message.error(err.message)
            });
            commit('updatePermissionList', list)
        }
    }
};
