import { Store } from 'vuex';
import { createStore } from 'vuex-extensions';
import user from '@/store/modules/user';
import wallet from '@/store/modules/wallet';
import chat from "@/store/modules/chat";
import freelancerAccount from "@/store/modules/freelancer-account";
import clientAccount from "@/store/modules/client-account";

// Create a new store instance.
const store = createStore(Store,{
    state () {
        return {
            loading: false,
            loadingCount: 0,
            snackbar: false,
            snackbarType: '',
            snackbarText: '',
            snackbarTimeout: 5000,
        }
    },
    mutations: {
        load (state) {
            state.loading = true;
            state.loadingCount += 1;
        },
        unload(state) {
            state.loadingCount -= 1;
            if (state.loadingCount < 1) {
                state.loading = false;
                state.loadingCount = 0;
            }
        },
        setSnackbar(state, data) {
            state.snackbar = true;
            state.snackbarText = data.text;
            state.snackbarType = data.type ? data.type : 'grey-darken-4';
            /*setTimeout(() => {
                state.snackbar = false;
                state.snackbarText = '';
            }, state.snackbarTimeout);*/
        },
        closeSnackbar(state) {
            state.snackbar = false;
            state.snackbarText = '';
        }
    },
    modules: {
        user,
        wallet,
        chat,
        freelancerAccount,
        clientAccount
    }
});

export default store;