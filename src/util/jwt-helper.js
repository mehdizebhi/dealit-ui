import {jwtDecode} from "jwt-decode";

export function extractClaim(token, key) {
    const decode = jwtDecode(token);
    return decode[key];
}