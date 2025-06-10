// api/index.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7142' // ⚠️ Cambiar si deployás
});

export default api;
