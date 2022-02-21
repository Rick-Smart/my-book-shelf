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

// this will be the baseURL once all of the server features are implimented
// https://book-shelf-5000.herokuapp.com
