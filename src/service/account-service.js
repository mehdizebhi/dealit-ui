import {getInfo, getUserInfo} from "@/api/account-api";

export function getAccountInfo() {
    return getInfo().then((info) => {
        return info;
    })
}

export function userInfo() {
    return getUserInfo().then((userInfo) => {
        return userInfo;
    })
}

export function getStatus() {
    // TODO: Call API
    return {

    }
}

/*export function getNotifications(size, page) {
    // TODO: Call API
    return {

    }
}*/

export function getAccountDetails() {
    // TODO: Call API
    return {

    }
}

/*
export function updateAccount(account) {
    // TODO: Call API
    return {

    }
}*/
