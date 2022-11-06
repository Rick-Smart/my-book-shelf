import { create } from "apisauce";
import { LOCAL_API, SERVER_API, GOOGLE_API } from "@env";

// in production mode this needs to be set to SERVER_API
const apiClient = create({
<<<<<<< HEAD
  baseURL: "http://192.168.0.32:3001/api",
=======
  baseURL: LOCAL_API,
  // baseURL: "http://192.168.0.16:3001/api",
>>>>>>> a72ca3b4ed877d58010689e2d2bfbeea30fa8ff6
});

const searchClient = create({
  baseURL: GOOGLE_API,
});

export default {
  apiClient,
  searchClient,
};
