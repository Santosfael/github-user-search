import axios, { Method } from "axios";

type RequestParams = {
    method?: Method;
    url: string;
}

const BASE_URL = "https://api.github.com/users";

function Api({ method = 'GET', url }: RequestParams) {
    return axios({
        method,
        baseURL: `${BASE_URL}${url}`,
    });
};

export default Api;