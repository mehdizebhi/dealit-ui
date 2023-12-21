import { createStore } from 'vuex';
import user from './modules/user';

// Create a new store instance.
const store = createStore({
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