import dealitApi from "@/api/dealit-api";
import {getAccessTokenCookie, setAuthenticationCookies} from "@/util/cookie-helper";
import {handleError} from "@/util/api-error-handler";
import {useStore} from "vuex";

export async function fetchUserInfo() {
    const store = useStore();
    return dealitApi.get('/users/info', {
        headers: {
            Authorization: 'Bearer ' + getAccessTokenCookie()
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

export async function updateUsernameApi(newUsername) {
    const store = useStore();
    return dealitApi.patch('/users', {"username": newUsername},{
        headers: {
            Authorization: 'Bearer ' + getAccessTokenCookie()
        }
    })
        .then((response) => {
            setAuthenticationCookies(response.data);
        })
        .catch((error) => {
            handleError(error, store);
            throw error;
        });
}

export async function updateDisplayNameApi(newDisplayName) {
    const store = useStore();
    return dealitApi.patch('/users', {"displayName": newDisplayName},{
        headers: {
            Authorization: 'Bearer ' + getAccessTokenCookie()
        }
    })
        .then((response) => {
            setAuthenticationCookies(response.data);
        })
        .catch((error) => {
            handleError(error, store);
            throw error;
        });
}

export async function updateEmailApi(newEmail) {
    const store = useStore();
    return dealitApi.patch('/users', {"email": newEmail},{
        headers: {
            Authorization: 'Bearer ' + getAccessTokenCookie()
        }
    })
        .then((response) => {
            setAuthenticationCookies(response.data);
        })
        .catch((error) => {
            handleError(error, store);
            throw error;
        });
}

export async function updatePhoneNumberApi(newPhoneNumber) {
    const store = useStore();
    return dealitApi.patch('/users', {"phoneNumber": newPhoneNumber},{
        headers: {
            Authorization: 'Bearer ' + getAccessTokenCookie()
        }
    })
        .then((response) => {
            setAuthenticationCookies(response.data);
        })
        .catch((error) => {
            handleError(error, store);
            throw error;
        });
}