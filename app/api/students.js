import client from "./client";

const endpoint = "/students";

const getStudents = () => client.apiClient.get(endpoint);

const addStudent = (student) => client.apiClient.post(endpoint, student);

const addBooksToStudent = (book, student) =>
  client.apiClient.patch(`${endpoint}/${student._id}`, book);

export default {
  getStudents,
  addStudent,
  addBooksToStudent,
};
