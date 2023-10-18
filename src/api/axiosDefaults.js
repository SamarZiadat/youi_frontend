import axios from "axios";

axios.defaults.baseURL = "https://youi-backend-25262e22ef8b.herokuapp.com/";
// axios.defaults.baseURL = "https://8000-samarziadat-youidrfapi-ppfpffzgbhy.ws-eu105.gitpod.io";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();