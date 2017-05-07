import createAxios from 'axios';

const axios = createAxios.create({
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
    const response = await axios.get(`${process.env.API_URL}/api${url}`, { params });
    return response.data;
  },

  async post(url, params) {
    const response = await axios.post(`${process.env.API_URL}/api${url}`, params);
    return response.data;
  },
};
