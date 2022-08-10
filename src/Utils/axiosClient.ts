import axios from 'axios';
import {API_URL} from '../Constants/api';

export const AxiosClient = axios.create({
  baseURL: API_URL,
  timeout: 4000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
