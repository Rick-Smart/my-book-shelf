import client from "./client";

const endpoint = "/users";

const authLogin = (user) => client.apiClient.post(endpoint, user);


export default {
  authLogin,
};
