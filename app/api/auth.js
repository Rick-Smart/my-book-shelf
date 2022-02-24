import client from "./client";

const endpoint = "/auth";

const authLogin = (user) => client.apiClient.post(endpoint, user);

export default {
  authLogin,
};
