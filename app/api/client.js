import { create } from "apisauce";
import { LOCAL_API, SERVER_API, GOOGLE_API } from "@env";

// in production mode this needs to be set to SERVER_API
const apiClient = create({
  baseURL: "http://192.168.0.32:3001/api",
});

const searchClient = create({
  baseURL: GOOGLE_API,
});

export default {
  apiClient,
  searchClient,
};
