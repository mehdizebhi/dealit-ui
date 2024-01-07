import {fetchClientInfoApi} from "@/api/account-api";
import {handleError} from "@/util/api-error-handler";

const state = {
    projectSpaces: [],
    profile: {},
    info: {}
};

const getters = {
    /*projectSpaces(state) {},
    projectSpace: (state) => (id) => {},
    jobPositions: (state) => (projectSpaceId) => {},
    jobPosition: (state) => (jobPositionId) => {},
    profile(state) {},*/
    clientInfo(state){
        return state.info
    }
};

const actions = {
    async getClientInfoFromApi({commit}) {
        commit('load');
        await fetchClientInfoApi().then((info) => {
            commit('setClientInfo', info);
        }).catch((error) => {
            handleError(error, commit, () => {
                commit('setSnackbar', {text: 'اطلاعات یافت نشد!', type: 'danger'});
            })
        }).finally(() => {
            commit('unload');
        });
    }
};

const mutations = {
    setClientInfo(state, info) {
        state.info = info;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};