import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com/weather?key=1bdc11f4&',
});

export default api;
