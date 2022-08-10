import axios from "axios";
const baseURL =  "http://127.0.0.1:3100/"

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.withCredentials = true;

 const axiosInstance = axios.create({
    baseURL,
    withCredentials: true,
    headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
    
})

export default axiosInstance;
