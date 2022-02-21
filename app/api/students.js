import client from "./client";

const endpoint = "/students";

const getStudents = () => client.apiClient.get(endpoint);

const addStudent = (student) => client.apiClient.post(endpoint, student);
export default {
  getStudents,
  addStudent,
};
