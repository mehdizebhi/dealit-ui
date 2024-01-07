import {fetchCreditCardDetailsApi, saveCreditCardDetailsApi} from "@/api/wallet-api";
import {handleError} from "@/util/api-error-handler";

const state = {
    balance: 0,
    creditCard: {},
    transactions: [],
    invoices: [],
    defaultCurrency: 'IRR',
    assets: [],
    totalIncome: 0,
    totalOutcome: 0,
    info: {
        newIncomeTransactions: 0,
        newWithdrawConfirmation: 0,
        transactionRequests: 0,
    }
};

const getters = {
    isCreditCardPresent(state) {
        return 'cardNumber' in state.creditCard;
    },
    creditCardInfo(state) {
        if ('cardNumber' in state.creditCard) {
            return state.creditCard;
        }
        return null;
    },
    walletInfo(state) {
        return state.info;
    },
    newWithdrawConfirmation(state) {
        return state.info.newWithdrawConfirmation;
    }
};

const actions = {
    async getCreditCardFromApi({commit}) {
        commit('load');
        await fetchCreditCardDetailsApi().then((creditCard) => {
            commit('setCreditCard', creditCard);
        }).catch((error) => {
            handleError(error, commit, () => {
                commit('setSnackbar', {text: 'اطلاعات یافت نشد!', type: 'danger'});
            })
        }).finally(() => {
            commit('unload');
        });
    },
    async saveCreditCard({commit}, creditCard) {
        commit('load');
        await saveCreditCardDetailsApi(creditCard.cardNumber,
            creditCard.ownerName,
            creditCard.expiredMonth,
            creditCard.expiredYear,
            creditCard.type,
            creditCard.bank,
            creditCard.iban).then(() => {
            commit('setCreditCard', {...creditCard, confirmed: false, payable: false});
            commit('setSnackbar', {text: 'کارت اعتباری برای تاییدیه، ارسال شد.', type: 'success'}
            );
        }).catch((error) => {
            handleError(error, commit, () => {
                commit('setSnackbar', {text: 'اطلاعات وارد شده صحیح نیست! لطفا از صحت اطلاعات بانکی خود اطمینان حاصل فرمایید.', type: 'danger'});
            })
        }).finally(() => {
            commit('unload');
        });
    }
};

const mutations = {
    setCreditCard(state, creditCard) {
        state.creditCard = creditCard;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};