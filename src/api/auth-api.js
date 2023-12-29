import dealitApi from "@/api/dealit-api";
import {getCookie} from "@/util/cookie-helper";
import {useStore} from "vuex";
import {handleError} from "@/util/api-error-handler";

export function signupApi(username, password, confirmPassword, email, displayName, phoneNumber, account) {
    const store = useStore();
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
            return response.data
        })
        .catch((error) => {
            handleError(error, store);
            throw error;
        });
}

export async function loginApi(username, password) {
    const store = useStore();
    return dealitApi
        .post("auth/token", {
            username,
            password
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            handleError(error, store);
            throw error;
        });
}

export function logoutApi() {
    const store = useStore();
    return dealitApi
        .post("auth/logout", {}, {
            headers: {
                Authorization: 'Bearer ' + getCookie("access_token")
            }
        })
        .catch((error) => {
            handleError(error, store);
            throw error;
        });
}

export function sendOTPApi() {
    const store = useStore();
    return dealitApi
        .post("auth/otp", {}, {
            headers: {
                Authorization: 'Bearer ' + getCookie("access_token")
            }
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            handleError(error, store);
            throw error;
        });
}

export function verifyOTPApi(code) {
    return dealitApi
        .post("auth/verify-otp", {code}, {
            headers: {
                Authorization: 'Bearer ' + getCookie("access_token")
            }
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("[Verify OTP API] - Something wrong in verifying otp code.");
            throw error;
        });
}