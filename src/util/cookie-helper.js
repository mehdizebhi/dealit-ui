import VueCookies from 'vue-cookies';
// Separate JavaScript module for cookie-related functions

// Function to get a specific cookie value by its name
export function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null; // Return null if the cookie doesn't exist
}

export function getAccessTokenCookie() {
    return getCookie("access_token");
}

export function setAuthenticationCookies(token) {
    const expiredPeriod = Math.floor(token.exp - (Date.now() / 1_000));
    VueCookies.set("access_token", token.accessToken, expiredPeriod);
    VueCookies.set("refresh_token", token.refreshToken);
}

/*
export function setCookie(name, value, expired = "1d") {
    this.$cookies.set(name, value, expired);
}*/
