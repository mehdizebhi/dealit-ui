import dealitApi from "@/api/dealit-api";

import {getCookie} from "@/util/cookie-helper";

export function getOverview() {
    return dealitApi.get('/accounts/overview', {
        headers: {
            Authorization: 'Bearer ' + getCookie("token")
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