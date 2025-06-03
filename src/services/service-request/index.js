import axios from "axios";
import { TIME_OUT, BASE_URL } from "./config";

class ServiceRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout,
        });

        // 请求拦截器
        this.instance.interceptors.request.use((config) => {
            return config;
        });

        // 响应拦截器
        this.instance.interceptors.response.use(
            (res) => {
                return res.data;
            },
            (err) => {
                return err;
            }
        );
    }

    // 发送请求
    request(config) {
        return this.instance.request(config);
    }

    // get请求
    get(config) {
        return this.request({ ...config, method: "get" });
    }

    // post请求
    post(config) {
        return this.request({ ...config, method: "post" });
    }

    // delete请求
    delete(config) {
        return this.request({ ...config, method: "delete" });
    }

    // patch请求
    patch(config) {
        return this.request({ ...config, method: "patch" });
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ServiceRequest(BASE_URL, TIME_OUT);
