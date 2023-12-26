import dealitApi from "@/api/dealit-api";
import {getCookie} from "@/util/cookie-helper";

export function fetchUserInfo() {
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