import axios from 'axios';

import * as config from '../config';

const BASE_URL = config.API_URL;

export async function postUserSignup(payload) {
  const { data } = await axios.post(`${BASE_URL}/auth/signup`, payload);
  return data;
}

export async function postUserLogin(payload) {
  const response = await axios.post(`${BASE_URL}/auth/signin`, payload);
  return {
    ...response.data.data,
    token: response.headers.token,
  };
}

export async function postAdminLogin(payload) {
  const response = await axios.post(`${BASE_URL}/admin/signin`, payload);
  return {
    ...response.data.data,
    token: response.headers.token,
  };
}

export async function postAdminProduct(payload) {
  const { data } = await axios.post(`${BASE_URL}/admin/item`, payload);
  return data;
}

export async function getProducts(page) {
  const { data } = await axios.get(`${BASE_URL}/admin/item/${page}`);
  return data.data;
}

export async function getProductDetails(productId) {
  const { data } = await axios.get(`${BASE_URL}/admin/item/details/${productId}`);
  return data.data;
}

export async function toggleCart(productId, token) {
  await axios.post(`${BASE_URL}/cart/${productId}`, {}, {
    headers: { token },
  });
}

export async function getCart(token) {
  const { data } = await axios.get(`${BASE_URL}/cart`, {}, {
    headers: { token },
  });
  return data.data;
}
