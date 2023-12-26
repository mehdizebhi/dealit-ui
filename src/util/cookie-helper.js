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