import {fetchUserInfo, updateUsernameApi, updateDisplayNameApi, updateEmailApi, updatePhoneNumberApi, updatePasswordApi} from "@/api/user-api";
import {handleError} from "@/util/api-error-handler";
import {signupApi} from "@/api/auth-api";
import {setAuthenticationCookies} from "@/util/cookie-helper";
import {Exception} from "sass";

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
    activities: [],
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
    },
    activities(state) {
        return state.activities;
    }
};

const actions = {
    async getUserInfo({commit}) {
        commit('load');
        await fetchUserInfo().then((response) => {
            commit('setUserInfo', response);
        }).catch((error) => {
            handleError(error, commit, () => {
                commit('setSnackbar', {text: 'اطلاعات یافت نشد!', type: 'danger'});
            })
        }).finally(() => {
            commit('unload');
        });
    },
    async updateUsername({commit}, username) {
        commit('load');
        await updateUsernameApi(username).then(() => {
            commit('updateUsername', username);
            commit('setSnackbar', {text: 'نام کاربری شما با موفقیت تغییر کرد.', type: 'success'});
        }).catch((error) => {
            handleError(error, commit, () => {
                commit('setSnackbar', {text: 'این نام کاربری دردسترس نیست یا قبلا توسط فرد دیگری استفاده شده است.', type: 'danger'});
            })
        }).finally(() => {
            commit('unload');
        });
    },
    async updateEmail({commit}, email) {
        commit('load');
        await updateEmailApi(email).then(() => {
            commit('updateEmail', email);
            commit('setSnackbar', {text: 'ایمیل شما با موفقیت تغییر کرد.', type: 'success'});
        }).catch((error) => {
            handleError(error, commit, () => {
                commit('setSnackbar', {text: 'این ایمیل قبلا توسط فرد دیگری استفاده شده است.', type: 'danger'});
            })
        }).finally(() => {
            commit('unload');
        });
    },
    async updateDisplayName({commit}, displayName) {
        commit('load');
        await updateDisplayNameApi(displayName).then(() => {
            commit('updateDisplayName', displayName);
            commit('setSnackbar', {text: 'نام نمایشی شما با موفقیت تغییر کرد.', type: 'success'});
        }).catch((error) => {
            handleError(error, commit, () => {
                commit('setSnackbar', {text: 'نام نمایشی وارد شده نامعتبر است. لطفا نام دیگری انتخاب کنید.', type: 'danger'});
            })
        }).finally(() => {
            commit('unload');
        });
    },
    async updatePhoneNumber({commit}, phoneNumber) {
        commit('load');
        await updatePhoneNumberApi(phoneNumber).then(() => {
            commit('updatePhoneNumber', phoneNumber);
            commit('setSnackbar', {text: 'شماره همراه شما با موفقیت تغییر کرد.', type: 'success'});
        }).catch((error) => {
            handleError(error, commit, () => {
                commit('setSnackbar', {text: 'این شماره همراه دردسترس نیست لطفا شماره دیگری وارد کنید.', type: 'danger'});
            })
        }).finally(() => {
            commit('unload');
        });
    },
    async updatePassword({commit}, updatePasswordForm) {
        commit('load');
        await updatePasswordApi(updatePasswordForm.currentPassword, updatePasswordForm.newPassword, updatePasswordForm.confirmNewPassword)
            .then(() => {
                commit('setSnackbar', {text: 'رمز عبور با موفقیت تغییر کرد', type: 'success'});
            }).catch((error) => {
                handleError(error, commit, () => {
                    commit('setSnackbar', {text: 'رمز عبور یا تکرار آن اشتباه است.', type: 'danger'});
                })
            }).finally(() => {
                commit('unload');
            });
    },
    async signup({commit}, user) {
        if (user.password !== user.confirmPassword){
            commit('setSnackbar', {text: 'رمز عبور و تکرار آن یکسان نیست!', type: 'danger'});
            throw new Exception();
        }
        commit('load');
        await signupApi(user.username, user.password, user.confirmPassword, user.email, user.displayName, user.phoneNumber, user.account)
            .then((signedInUser) => {
                setAuthenticationCookies(signedInUser.token);
                commit('setSnackbar', {text: 'ثبت نام با موفقیت انجام شد.', type: 'success'});
            }).catch((error) => {
                handleError(error, commit, () => {
                    commit('setSnackbar', {text: 'نام کاربری یا ایمیل وارد شده توسط فرد دیگری استفاده شده است.', type: 'danger'});
                });
                throw error;
            }).finally(() => {
                commit('unload');
            });
    },
    /*async getActivitiesFromApi({commit}, page) {
        commit('load');
    }*/
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