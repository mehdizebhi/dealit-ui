import {fetchUserInfo, updateUsernameApi, updateDisplayNameApi, updateEmailApi, updatePhoneNumberApi} from "@/api/user-api";

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
        commit('load');
        await fetchUserInfo().then((response) => {
            commit('setUserInfo', response);
        }).catch(() => {});
        commit('unload');
    },
    async updateUsername({commit}, username) {
        commit('load');
        await updateUsernameApi(username).then(() => {
            commit('updateUsername', username);
            commit('setSnackbar', "نام کاربری شما با موفقیت تغییر کرد.");
        }).catch(() => {})
        commit('unload');
    },
    async updateEmail({commit}, email) {
        commit('load');
        await updateEmailApi(email).then(() => {
            commit('updateEmail', email);
            commit('setSnackbar', "ایمیل شما با موفقیت تغییر کرد.");
        }).catch(() => {})
        commit('unload');
    },
    async updateDisplayName({commit}, displayName) {
        commit('load');
        await updateDisplayNameApi(displayName).then(() => {
            commit('updateDisplayName', displayName);
            commit('setSnackbar', "نام نمایشی شما با موفقیت تغییر کرد.");
        }).catch(() => {})
        commit('unload');
    },
    async updatePhoneNumber({commit}, phoneNumber) {
        commit('load');
        await updatePhoneNumberApi(phoneNumber).then(() => {
            commit('updatePhoneNumber', phoneNumber);
            commit('setSnackbar', "شماره همراه شما با موفقیت تغییر کرد.");
        }).catch(() => {})
        commit('unload');
    }
};

const mutations = {
    setUserInfo(state, userInfo) {
        state.info = userInfo;
    },
    updateUsername(state, username) {
        state.info.username = username;
    },
    updateEmail(state, email) {
        state.info.email = email;
        state.info.confirmedEmail = false;
    },
    updateDisplayName(state, displayName) {
        state.info.displayName = displayName;
    },
    updatePhoneNumber(state, phoneNumber) {
        state.info.phoneNumber = phoneNumber;
        state.info.confirmedPhone = false;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};