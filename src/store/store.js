import { Store } from 'vuex';
import { createStore } from 'vuex-extensions';
import user from './modules/user';

// Create a new store instance.
const store = createStore(Store,{
    state () {
        return {
            loading: false
        }
    },
    mutations: {
        load (state) {
            state.loading = true;
        },
        unload(state) {
            state.loading = false;
        }
    },
    modules: {
        user
    }
});

export default store;