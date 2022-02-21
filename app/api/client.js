import { create } from "apisauce";
import { LOCAL_API, SERVER_API, GOOGLE_API } from "@env";


// in production mode this neds to be set to SERVER_API
const apiClient = create({
  baseURL: LOCAL_API,
});

const searchClient = create({
  baseURL: GOOGLE_API,
});

export default {
  apiClient,
  searchClient,
};
