import dealitApi from "@/api/dealit-api";

export function login(username, password) {
    return dealitApi
        .post("auth/token", {
            username,
            password
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("error with login req");
            throw error;
        });
}