import { signupApi, loginApi, logoutApi, sendOTPApi, verifyOTPApi } from "@/api/auth-api";

export function signup(user) {
    return signupApi(
        user.username,
        user.password,
        user.confirmPassword,
        user.email,
        user.displayName,
        user.phoneNumber,
        user.account)
        .then((signedInUser) => {
            return signedInUser;
        });
}

export function login(username, password) {
    return loginApi(username, password)
        .then((token) => {
            return token;
        });
}

export function logout() {
    logoutApi();
}

export function sendOTP() {
    return sendOTPApi().then((otp) => {
        return otp;
    })
}

export function verifyOTP(code) {
    return verifyOTPApi(code).then((response) => {
        return response;
    })
}