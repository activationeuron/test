import axios from 'axios';

const request = axios.create({
  baseURL: 'https://620dfdda20ac3a4eedcf5a52.mockapi.io/api/',
});

export default request;
