import axios from 'axios';

import * as config from '../config';

const BASE_URL = config.API_URL;

export async function postUserSignup(payload) {
  const { data } = await axios.post(`${BASE_URL}/auth/signup`, payload);
  return data;
}

export async function postUserLogin(payload) {
  const { data } = await axios.post(`${BASE_URL}/auth/signin`, payload);
  return data;
}

export async function postAdminLogin(payload) {
  const { data } = await axios.post(`${BASE_URL}/admin/signin`, payload);
  return data;
}

export async function postAdminProduct(payload) {
  const { data } = await axios.post(`${BASE_URL}/admin/item`, payload);
  return data;
}
