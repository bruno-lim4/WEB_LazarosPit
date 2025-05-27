import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3122',
});

export default api;