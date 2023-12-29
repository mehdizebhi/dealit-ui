import {fetchCreditCardDetailsApi} from "@/api/wallet-api";

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
    }
};

const mutations = {
    setCreditCard(state, creditCard) {
        state.creditCard = creditCard;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};