import { BASE_URL } from '../constant';
import axios from 'axios';

const axiosApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: localStorage.getItem('access_token')
      ? localStorage.getItem('access_token')
      : null,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default axiosApi;
