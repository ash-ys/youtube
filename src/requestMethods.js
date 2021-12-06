import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";       
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTllYzY2MmQ2MmMzMzJhNTAxYTkxZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Mzg3ODAxNTksImV4cCI6MTYzOTAzOTM1OX0.bipQ0o1bDlzp29H7Fqe2hVnelcs94Z-Df20Q7BuvqIw";       

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});