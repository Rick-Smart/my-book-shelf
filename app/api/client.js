import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://book-shelf-5000.herokuapp.com/api",
});

const searchClient = create({
  baseURL: "https://www.googleapis.com/books/v1/volumes?q=",
});

export default {
  apiClient,
  searchClient,
};

// This is the local address for our server make sure to check
// ipconfig if this is responding
// http://192.168.0.6:3001/api

// this is our heroku deployment of the server
// https://book-shelf-5000.herokuapp.com/api
