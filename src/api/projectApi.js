import { handleResponse, handleError, getConfig } from "./apiUtils";
const baseUrl = process.env.API_URL + "/project";

export function createProject(user) {
  const config = getConfig({ method: "POST", body: JSON.stringify(user) });
  return fetch(baseUrl, config).then(handleResponse).catch(handleError);
}
