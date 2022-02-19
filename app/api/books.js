import client from "./client";

const endpoint = "/books";

const getBooks = () => client.apiClient.get(endpoint);
const deleteBooks = (id) => client.apiClient.delete(endpoint + id);

export default {
  getBooks,
  deleteBooks,
};
