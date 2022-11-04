import { create } from "apisauce";
import { LOCAL_API, SERVER_API, GOOGLE_API } from "@env";

// in production mode this needs to be set to SERVER_API
const apiClient = create({
<<<<<<< HEAD
  baseURL: LOCAL_API,
=======
  baseURL: "http://192.168.0.16:3001/api",
>>>>>>> 6882f6de041ef8e63b4e011905ab683f2ce4dc2b
});

const searchClient = create({
  baseURL: GOOGLE_API,
});

export default {
  apiClient,
  searchClient,
};
