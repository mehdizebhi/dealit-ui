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
            return response.data
        })
        .catch((error) => {
            console.log("[Signup API] - Something wrong in signup api call.");
            throw error;
        });
}

export function loginApi(username, password) {
    return dealitApi
        .post("auth/token", {
            username,
            password
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("[Login API] - Something wrong in login api call.");
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
            console.log("[Logout API] - Something wrong in logout api call.");
            throw error;
        });
}

export function sendOTPApi() {
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
            console.log("[OTP API] - Something wrong in sending otp code.");
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