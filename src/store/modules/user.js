import {fetchUserInfo} from "@/api/user-api";

const state = {
    info: {
        username: '',
        displayName: '',
        email: '',
        phoneNumber: '',
        confirmedEmail: false,
        confirmedPhone: false,
        connections: 0,
        pictureHref: '',
        types: [],
        createdAt: 0,
        updatedAt: 0,
    },
};

const getters = {
    isUserPresent(state) {
        return state.info.username.length !== 0;
    },
    connections(state) {
        return state.info.connections;
    },
    username(state) {
        return state.info.username;
    },
    displayName(state) {
        return state.info.displayName;
    },
    email(state) {
        return state.info.email;
    },
    phoneNumber(state) {
        return state.info.phoneNumber;
    },
    confirmedEmail(state) {
        return state.info.confirmedEmail;
    },
    confirmedPhone(state) {
        return state.info.confirmedPhone;
    },
    pictureHref(state) {
        return state.info.pictureHref;
    },
    isFreelancer(state) {
        return state.info.types.includes('FREELANCER');
    },
    isClient(state) {
        return state.info.types.includes('CLIENT');
    },
    isAuthenticate(state) {
        return state.accessToken != null;
    }
};

const actions = {
    async getUserInfo({commit}) {
        const response = await fetchUserInfo();
        commit('setUserInfo', response);
    },
};

const mutations = {
    setUserInfo(state, userInfo) {
        state.info = userInfo;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};