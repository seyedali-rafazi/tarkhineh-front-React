import http from "./httpService";

export function getOtp(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export function getUser() {
  return http.get("/user/profile").then(({ data }) => data.data);
}

export function setupdateUser(data) {
  return http.patch("/user/update", data).then(({ data }) => data.data);
}

export function userLogout() {
  return http.post("/user/logout").then(({ data }) => data.data);
}
