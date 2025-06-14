import axios from "axios";
import Swal from "sweetalert2";

export function setupAxiosInterceptors(router) {
  axios.interceptors.request.use((config) => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  axios.interceptors.response.use(
    (res) => res,
    async (err) => {
      if (err.response?.status === 401) {
        localStorage.clear();
        sessionStorage.clear();

        await Swal.fire({
          icon: "error",
          title: "Session Expired",
          text: "Please log in again.",
        });

        router.push("/login");
      }
      return Promise.reject(err);
    }
  );
}
