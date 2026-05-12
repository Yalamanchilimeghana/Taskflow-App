import axios from "axios"
const instance = axios.create({
    baseURL:"https://taskflow-app-backend-qvdx.onrender.com"
})
export default instance