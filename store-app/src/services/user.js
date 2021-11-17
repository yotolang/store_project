import httpService, { setDefaultCommonHeader } from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";
const TOKEN_KEY = "token";

setDefaultCommonHeader("x-auth-token", getJwt());

export function getJwt() {
  return localStorage.getItem(TOKEN_KEY);
}

export function createUser(user) {
  return httpService.post(`${apiUrl}/users`, user);
}
export async function login(email, password) {
  const {
    data: { token },
  } = await httpService.post(`${apiUrl}/auth`, { email, password });
  localStorage.setItem(TOKEN_KEY, token);
}
export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(TOKEN_KEY);
    return jwtDecode(jwt);
  } catch {
    return null;
  }
}
export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}
const userService = {
  createUser,
  login,
  getCurrentUser,
  logout,
  getJwt,
};

export default userService;
