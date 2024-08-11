// // import { axiosInstance } from "./Api";
// // import { jwtDecode } from "jwt-decode";

// // const setToken = (token) => localStorage.setItem('token', token);

// // const getToken = () => {
// //     const token = localStorage.getItem('token');
// //     if (token) {
// //         return token;
// //     }
// //     return null;
// // }


// // const getUserEmail = () => {
// //     const token = getToken();
// //     if (token) {
// //         const payLoad = jwtDecode(token);
// //         return payLoad?.sub;
// //     }
// //     return null;
// // }

// // const getUserRole = () => {
// //     const token = getToken();
// //     if (token) {
// //         const payLoad = jwtDecode(token);
// //         return payLoad?.role;
// //     }
// //     return null;
// // }

// // const isLoggedIn = () => {
// //     const token = getToken();
// //     if (token) {
// //         const payLoad = jwtDecode(token);
// //         const isLogin = Date.now() < payLoad.exp * 1000;
// //         return isLogin;

// //     }
// // }

// // const SignIn = (email, password) => axiosInstance.post("api/auth/login", { email, password });
// // const SignOut = () => localStorage.clear()


// // export const authService = { getToken, setToken, getUserEmail, getUserRole, isLoggedIn, SignIn, SignOut };

// import axios from 'axios';
// import {jwtDecode} from 'jwt-decode';

// const baseURL = 'http://localhost:8080';
// const axiosInstance = axios.create({
//     baseURL,
// });

// // axiosInstance.interceptors.request.use(
// //     (config) => {
// //         const token = localStorage.getItem('token');
// //         if (token) {
// //             config.headers.Authorization = `Bearer ${token}`;
// //         }
// //         return config;
// //     },
// //     (error) => {
// //         return Promise.reject(error);
// //     }
// // );

// const setToken = (token) => localStorage.setItem('token', token);

// const getToken = () => localStorage.getItem('token');

// const getUserRole = () => {
//     const token = getToken();
//     if (token) {
//         const payload = jwtDecode(token);
//         return payload?.role;
//     }
//     return null;
// };

// const isLoggedIn = () => {
//     const token = getToken();
//     if (token) {
//         const payload = jwtDecode(token);
//         return Date.now() < payload.exp * 1000;
//     }
//     return false;
// };

// const SignUp = (name, email, password) => axios.post('api/auth/register', { name, email, password });
// const SignIn = (email, password) => axios.post('api/auth/login', { email, password });

// export const authService = { setToken, getToken, getUserRole, isLoggedIn, SignUp, SignIn };

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
      // Replace with your actual API endpoint
      const response = axios.get(`/api/users/${userId}`);
      return response;
    } catch (error) {
      console.error('Error fetching user details:', error);
      throw error;
    }
  }

const SignIn = (email, password) => axios.post(`${baseURL}/login`, { email, password });
const SignOut = () => localStorage.clear()


export const authService = { getToken, setToken, getUserEmail, getUserRole, isLoggedIn, SignIn, SignOut };
