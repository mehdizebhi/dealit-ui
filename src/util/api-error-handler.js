export function handleError(error, commit, errorCallback) {
    if (error.response) {
        const { status } = error.response;
        if (status >= 400 && status < 500) {
            // Handle 4xx errors with the provided errorCallback
            errorCallback && errorCallback();
        } else {
            // Handle other HTTP errors with the provided callback
            commit('setSnackbar', {text: "درخواست شما با خطا مواجه شد. لطفا صفحه را رفرش کنید و مجددا درخواست دهید."});
        }
    } else if (error.request) {
        commit('setSnackbar', {text: "سرور پاسخگو نیست. لطفا در زمان دیگری درخواست دهید."});
    } else {
        commit('setSnackbar', {text: "مشکل در برقراری ارتباط شبکه. لطفا سفحه را رفرش کنید."});
    }
}