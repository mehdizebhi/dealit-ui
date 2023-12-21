import {getCookie} from "@/util/cookie-helper";

// Function to check if the user is authenticated by checking the "token" cookie
export function isAuthenticated() {
    const c = getCookie("access_token");
    return c !== null;
}