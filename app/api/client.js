import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.0.6:3001/api",
});

const searchClient = create({
  baseURL: "https://www.googleapis.com/books/v1/volumes?q=",
});

export default {
  apiClient,
  searchClient,
};
