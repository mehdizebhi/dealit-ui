import {useStore} from "vuex";
import dealitApi from "@/api/dealit-api";
import {getAccessTokenCookie} from "@/util/cookie-helper";
import {handleError} from "@/util/api-error-handler";


export async function fetchCreditCardDetailsApi() {
    const store = useStore();
    return dealitApi.get('/wallets/credit-card', {
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

export async function saveCreditCardDetailsApi(cardNumber, ownerName, expiredMonth, expiredYear, type, bank, iban) {
    const store = useStore();
    return dealitApi.post('/wallets/credit-card', {
        "cardNumber": cardNumber,
        "ownerName": ownerName,
        "expiredMonth": expiredMonth,
        "expiredYear": expiredYear,
        "type": type,
        "bank": bank,
        "iban": iban
    },{
        headers: {
            Authorization: 'Bearer ' + getAccessTokenCookie()
        }
    })
        .then(() => {})
        .catch((error) => {
            handleError(error, store);
            throw error;
        });
}