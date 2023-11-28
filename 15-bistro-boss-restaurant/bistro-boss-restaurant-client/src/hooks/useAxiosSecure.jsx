import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use(
    function (config) {
      console.log("requesting inside interceptors ");
      const token = localStorage.getItem("access-token");
      console.log(token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  // responce
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const status = error.response.status;
      console.log('status error  inside respone ', status);
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};
export default useAxiosSecure;
