import axios from 'axios';

const api = axios.create ({
  baseURL: 'http://172.19.223.170:3333',
});

export default api;