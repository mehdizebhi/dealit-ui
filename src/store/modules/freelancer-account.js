import {fetchFreelancerInfoApi} from "@/api/account-api";
import {handleError} from "@/util/api-error-handler";

const state = {
    info: {},
};

const getters = {
    freelancerInfo(state) {
        return state.info;
    },
};

const actions = {
    async getFreelancerInfoFromApi({commit}) {
        commit('load');
        await fetchFreelancerInfoApi().then((info) => {
            commit('setFreelancerInfo', info);
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
    setFreelancerInfo(state, info) {
        state.info = info;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};