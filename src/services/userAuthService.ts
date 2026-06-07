import {
  loginUser,
  getProfile,
  updateUserProfile,
  logoutUser,
} from "../store/localStore";
import type { LoginCredentials, UpdateUserPayload, UserProfileResponse } from "../types";

export function getOtp(
  data: LoginCredentials
): Promise<{ message: string } & UserProfileResponse> {
  return loginUser(data);
}

export function getUser(): Promise<UserProfileResponse> {
  return getProfile();
}

export function setupdateUser(
  data: UpdateUserPayload
): Promise<{ message: string } & UserProfileResponse> {
  return updateUserProfile(data);
}

export function userLogout(): Promise<{ message: string }> {
  return logoutUser();
}
