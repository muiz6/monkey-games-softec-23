const keyUser = 'user';
const keyAdmin = 'admin';

export function setUser(user) {
  localStorage.setItem(keyUser, JSON.stringify(user));
}

export function getUser() {
  return JSON.parse(localStorage.getItem(keyUser));
}

export function setAdmin(admin) {
  localStorage.setItem(keyUser, JSON.stringify(admin));
}

export function getAdmin() {
  return JSON.parse(localStorage.getItem(keyAdmin));
}
