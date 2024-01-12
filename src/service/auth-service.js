import { signupApi, loginApi, logoutApi} from "@/api/auth-api";

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