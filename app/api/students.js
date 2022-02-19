import client from "./client";

const endpoint = "/students";

const getStudents = () => client.get(endpoint);

export default {
  getStudents,
};
