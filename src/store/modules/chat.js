
const state = {
    info: {
        newMessages: 0,
    }
};

const getters = {
    newMessages(state) {
        return state.info.newMessages;
    }
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
};