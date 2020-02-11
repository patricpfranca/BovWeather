import { API_URL, TOKEN } from 'react-native-dotenv';

import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.hgbrasil.com/weather?key=${TOKEN}&`,
});

export default api;
