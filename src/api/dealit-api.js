import axios from "axios";

const instance = axios.create(
    {
        baseURL: "http://localhost:8085/v1/",
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json'
        }
    }
);

// show req config or error before api access it
instance.interceptors.request.use(
    function (config) {
        // console.log(config);
        return config;
    },
    function (error) {
        // console.log(error);
        return Promise.reject(error);
    }
);

// show res config or error before front-end access it
instance.interceptors.response.use(
    function (response) {
        // console.log(response);
        return response;
    },
    function (error) {
        // console.log(error);
        return Promise.reject(error);
    }
);

export default instance;