import client from "./client";

const endpoint = "/students";

const getStudents = () => client.apiClient.get(endpoint);

const addStudent = (student) => client.apiClient.post(endpoint, student);

const addBooks = (book, studentId) =>
  client.apiClient.patch(`${endpoint}/${studentId}`, book);

export default {
  getStudents,
  addStudent,
  addBooks,
};
