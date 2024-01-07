import dealitApi from "@/api/dealit-api";
import {getAccessTokenCookie} from "@/util/cookie-helper";

export function fetchFreelancerInfoApi() {
    return dealitApi.get('/accounts/freelancer-info', {
        headers: {
            Authorization: 'Bearer ' + getAccessTokenCookie()
        }
    })
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            throw error;
        });
}

export function fetchClientInfoApi() {
    return dealitApi.get('/accounts/client-info', {
        headers: {
            Authorization: 'Bearer ' + getAccessTokenCookie()
        }
    })
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            throw error;
        });
}

