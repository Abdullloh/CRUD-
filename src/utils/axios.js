import axios from "axios";
const Axios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 30000,
  timeoutErrorMessage: "Connection is lost. Server not responded",
});

Axios.interceptors.request.use(
  (configs) => {
    return configs;
  },
  (err) => {
    console.log(err.response);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

export default Axios;
