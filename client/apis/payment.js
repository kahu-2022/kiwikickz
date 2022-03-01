import axios from "axios";
import request from "superagent"


const BASE_URL = "http://localhost:3000";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});


export function sendTransaction(){
    return request.post('/api/v1/payment')
    .then(res => console.log('res.body from api', res))
}