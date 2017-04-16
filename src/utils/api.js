import createAxios from 'axios';

const axios = createAxios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    common: {
      'Content-Type': 'application/json',
    },
    post: {
      'Content-Type': 'application/json',
    },
  },
});

export default {
  async get(url, params) {
    const response = await axios.get(url, { params });
    return response.data;
  },

  async post(url, params) {
    const response = await axios.post(url, params);
    return response.data;
  },
};
