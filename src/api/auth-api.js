import dealitApi from "@/api/dealit-api";
import {getCookie} from "@/util/cookie-helper";

export function signupApi(username, password, confirmPassword, email, displayName, phoneNumber, account) {
    return dealitApi.post(
        "auth/signup", {
            username,
            password,
            confirmPassword,
            email,
            displayName,
            phoneNumber,
            account
        })
        .then((response) => {
            return response.data.data
        })
        .catch((error) => {
            throw error;
        });
}

export async function loginApi(username, password) {
    return dealitApi
        .post("auth/token", {
            username,
            password
        })
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            throw error;
        });
}

export function logoutApi() {
    return dealitApi
        .post("auth/logout", {}, {
            headers: {
                Authorization: 'Bearer ' + getCookie("access_token")
            }
        })
        .catch((error) => {
            throw error;
        });
}

export function forgetPasswordApi(email) {
    return dealitApi
        .post("auth/forget-password?email=" + email)
        .then((response) => {
            return response.data.message;
        })
        .catch((error) => {
            throw error;
        });
}

export function checkResetPasswordTokenApi(token) {
    return dealitApi
        .get("auth/check-reset-password-token?token=" + token)
        .then((response) => {
            return response.data.message;
        })
        .catch((error) => {
            throw error;
        });
}

export function resetPasswordApi(password, confirmPassword, token){
    return dealitApi
        .post("auth/reset-password?token=" + token, {
            "password" : password,
            "confirmPassword": confirmPassword
        })
        .then((response) => {
            return response.data.message;
        })
        .catch((error) => {
            throw error;
        });
}
