import client from "./client";

const endpoint = "/books";
const studentBooks = "/studentbooks";

const getBooks = () => client.apiClient.get(endpoint);
const getStudentBooks = (bookIDs) =>
  client.apiClient.post(endpoint + studentBooks, bookIDs);
const deleteBooks = (id) => client.apiClient.delete(endpoint, id);

const addBook = (book) => client.apiClient.post(endpoint, book);
const checkOutBook = (book) =>
  client.apiClient.patch(endpoint + "/" + book._id, book);

export default {
  addBook,
  getBooks,
  deleteBooks,
  checkOutBook,
  getStudentBooks,
};
