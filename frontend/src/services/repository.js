import * as apiClient from './apiClient';
import * as myLocalStorage from './myLocalStorage';

export const signUserUp = apiClient.postUserSignup;
export const createProduct = apiClient.postAdminProduct;
export const { getProducts } = apiClient;
export const { getProductDetails } = apiClient;
export const { getUser } = myLocalStorage;

export async function logUserIn(payload) {
  const user = await apiClient.postUserLogin(payload);
  myLocalStorage.setUser(user);
}

export async function logAdminIn(payload) {
  const admin = await apiClient.postAdminLogin(payload);
  myLocalStorage.setAdmin(admin);
}

export function toggleCart(productId) {
  const user = myLocalStorage.getUser();
  if (user) {
    return apiClient.toggleCart(productId, user.token);
  }
  throw new Error('Please sign in first');
}

export function getCart() {
  const user = myLocalStorage.getUser();
  if (user) {
    return apiClient.toggleCart(user.token);
  }
  throw new Error('Please sign in first');
}
