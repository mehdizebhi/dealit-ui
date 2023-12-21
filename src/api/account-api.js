import dealitApi from "@/api/dealit-api";

import {getCookie} from "@/util/cookie-helper";

export function getOverview() {
    return dealitApi.get('/accounts/overview', {
        headers: {
            Authorization: 'Bearer ' + getCookie("access_token")
        }
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("error with get account overview req");
            throw error;
        });
}

export function getInfo() {
    return dealitApi.get('/accounts/info', {
        headers: {
            Authorization: 'Bearer ' + getCookie("access_token")
        }
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("[Account API] - Something Wrong in get account information.");
            throw error;
        });
}

export function getUserInfo() {
    return dealitApi.get('/users/info', {
        headers: {
            Authorization: 'Bearer ' + getCookie("access_token")
        }
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("[Account API] - Something Wrong in get user info.");
            throw error;
        });
}