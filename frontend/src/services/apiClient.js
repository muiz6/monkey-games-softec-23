import axios from 'axios';

import * as config from '../config';

const BASE_URL = config.API_URL;

export function postUserSignup(payload) {
  const { data } = axios.post(`${BASE_URL}/auth/signup`, payload);
  return data;
}

export function postUserLogin(payload) {
  const { data } = axios.post(`${BASE_URL}/auth/signin`, payload);
  return data;
}
