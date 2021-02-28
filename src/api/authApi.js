import { handleResponse, handleError, getConfig } from "./apiUtils";
const baseUrl = process.env.API_URL + "/auth";

export function getUserLogged() {
  const config = getConfig({ method: "GET" });
  return fetch(baseUrl, config).then(handleResponse).catch(handleError);
}

export function login(user) {
  const config = getConfig({ method: "POST", body: JSON.stringify(user) });
  return fetch(baseUrl, config).then(handleResponse).catch(handleError);
}
