import { Store } from 'vuex';
import { createStore } from 'vuex-extensions';
import user from './modules/user';
import wallet from './modules/wallet';

// Create a new store instance.
const store = createStore(Store,{
    state () {
        return {
            loading: false,
            loadingCount: 0,
            snackbar: false,
            snackbarText: '',
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
        setSnackbar(state, text) {
            state.snackbar = true;
            state.snackbarText = text;
        },
        closeSnackbar(state) {
            state.snackbar = false;
            state.snackbarText = '';
        }
    },
    modules: {
        user,
        wallet
    }
});

export default store;