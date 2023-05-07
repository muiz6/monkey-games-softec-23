import * as apiClient from './apiClient';
import * as myLocalStorage from './myLocalStorage';

export const signUserUp = apiClient.postUserSignup;
export const createProduct = apiClient.postAdminProduct;

export async function logUserIn(payload) {
  const user = await apiClient.postUserLogin(payload);
  myLocalStorage.setUser(user);
}

export async function logAdminIn(payload) {
  const admin = await apiClient.postAdminLogin(payload);
  myLocalStorage.setAdmin(admin);
}
