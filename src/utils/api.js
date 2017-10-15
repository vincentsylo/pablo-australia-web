import createAxios from 'axios';

const prodUrl = 'http://108.61.251.103/api';
const devUrl = 'http://localhost:8080/api';

const axios = createAxios.create({
  headers: {
    common: {
      'Content-Type': 'application/json',
    },
  },
});

export default {
  async get(url, params) {
    const baseUrl = process.env.NODE_ENV === 'production' ? prodUrl : devUrl;
    const response = await axios.get(`${baseUrl}${url}`, { params });
    return response.data;
  },

  async post(url, params) {
    const baseUrl = process.env.NODE_ENV === 'production' ? prodUrl : devUrl;
    const response = await axios.post(`${baseUrl}${url}`, params);
    return response.data;
  },
};
