import {fetchCreditCardDetailsApi, saveCreditCardDetailsApi} from "@/api/wallet-api";

const state = {
    balance: 0,
    creditCard: {},
    transactions: [],
    invoices: [],
    defaultCurrency: 'IRR',
    assets: [],
    totalIncome: 0,
    totalOutcome: 0,
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
    }
};

const actions = {
    async getCreditCardFromApi({commit}) {
        commit('load');
        await fetchCreditCardDetailsApi().then((creditCard) => {
            commit('setCreditCard', creditCard);
        }).catch(() => {})
        commit('unload');
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
        }).catch(() => {
        })
        commit('unload');
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