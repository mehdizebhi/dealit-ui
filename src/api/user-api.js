import dealitApi from "@/api/dealit-api";
import {getAccessTokenCookie, setAuthenticationCookies} from "@/util/cookie-helper";

export async function fetchUserInfo() {
    return dealitApi.get('/users/info', {
        headers: {
            Authorization: 'Bearer ' + getAccessTokenCookie()
        }
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
}

export async function updateUsernameApi(newUsername) {
    return dealitApi.patch('/users', {"username": newUsername},{
        headers: {
            Authorization: 'Bearer ' + getAccessTokenCookie()
        }
    })
        .then((response) => {
            setAuthenticationCookies(response.data);
        })
        .catch((error) => {
            throw error;
        });
}

export async function updateDisplayNameApi(newDisplayName) {
    return dealitApi.patch('/users', {"displayName": newDisplayName},{
        headers: {
            Authorization: 'Bearer ' + getAccessTokenCookie()
        }
    })
        .then((response) => {
            setAuthenticationCookies(response.data);
        })
        .catch((error) => {
            throw error;
        });
}

export async function updateEmailApi(newEmail) {
    return dealitApi.patch('/users', {"email": newEmail},{
        headers: {
            Authorization: 'Bearer ' + getAccessTokenCookie()
        }
    })
        .then((response) => {
            setAuthenticationCookies(response.data);
        })
        .catch((error) => {
            throw error;
        });
}

export async function updatePhoneNumberApi(newPhoneNumber) {
    return dealitApi.patch('/users', {"phoneNumber": newPhoneNumber},{
        headers: {
            Authorization: 'Bearer ' + getAccessTokenCookie()
        }
    })
        .then((response) => {
            setAuthenticationCookies(response.data);
        })
        .catch((error) => {
            throw error;
        });
}

export async function updatePasswordApi(currentPassword, newPassword, confirmNewPassword) {
    return dealitApi.patch('/users/password', {
        "currentPassword": currentPassword,
        "newPassword": newPassword,
        "confirmNewPassword": confirmNewPassword
    },{
        headers: {
            Authorization: 'Bearer ' + getAccessTokenCookie()
        }
    })
        .then(() => {})
        .catch((error) => {
            throw error;
        });
}

export async function getActivitiesApi(page, size) {
    return dealitApi.get(`/users/activities?page=${page}&size=${size}`, {
        headers: {
            Authorization: 'Bearer ' + getAccessTokenCookie()
        }
    }).then((response) => {response.data.content})
        .catch((error) => {
            throw error;
        });
}