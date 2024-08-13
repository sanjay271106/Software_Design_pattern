

import { axiosInstance } from "./Api";
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
const setToken = (token) => localStorage.setItem('token', token);

const baseURL = 'http://localhost:8080/api/auth';

const getToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return token;
    }
    return null;
}


const getUserEmail = () => {
    const token = getToken();
    if (token) {
        const payLoad = jwtDecode(token);
        return payLoad?.sub;
    }
    return null;
}

const getUserRole = () => {
    const token = getToken();
    if (token) {
        const payLoad = jwtDecode(token);
        return payLoad?.role;
    }
    return null;
}

const isLoggedIn = () => {
    const token = getToken();
    if (token) {
        const payLoad = jwtDecode(token);
        const isLogin = Date.now() < payLoad.exp * 1000;
        return isLogin;

    }
}

const getUserDetails =(userId)=> {
    try {
      const response = axios.get(`/get/${userId}`);
      return response;
    } catch (error) {
      console.error('Error fetching user details:', error);
      throw error;
    }
  }

const SignIn = (email, password) => axios.post(`${baseURL}/login`, { email, password });
const SignOut = () => localStorage.clear()


export const authService = { getToken,setToken,  getUserEmail, getUserRole, isLoggedIn, SignIn, SignOut,getUserDetails };
