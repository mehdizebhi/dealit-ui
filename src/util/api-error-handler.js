export function handleError(error, store) {
    if (error.response) {
        store.commit('setSnackbar', "مشکل در برقراری ارتباط شبکه");
    } else if (error.request) {
        store.commit('setSnackbar', "مشکل در برقراری ارتباط شبکه");
    } else {
        store.commit('setSnackbar', "مشکل در برقراری ارتباط شبکه");
    }
}