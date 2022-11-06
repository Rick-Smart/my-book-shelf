import client from "./client";

const endpoint = "/students";

const getStudents = () => client.apiClient.get(endpoint);

const getStudent = () => client.apiClient.get(`${endpoint}/${student._id}`);

const addStudent = (student) => client.apiClient.post(endpoint, student);

const addBooksToStudent = (book, student) =>
  client.apiClient.patch(`${endpoint}/${student._id}`, book);

export default {
  getStudent,
  getStudents,
  addStudent,
  addBooksToStudent,
};
