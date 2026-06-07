import {
  loginUser,
  getProfile,
  updateUserProfile,
  logoutUser,
} from "../store/localStore";

export function getOtp(data) {
  return loginUser(data);
}

export function getUser() {
  return getProfile();
}

export function setupdateUser(data) {
  return updateUserProfile(data);
}

export function userLogout() {
  return logoutUser();
}
