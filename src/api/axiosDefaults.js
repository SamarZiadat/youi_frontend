import axios from "axios";

axios.defaults.baseURL = "https://youi-backend-25262e22ef8b.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;