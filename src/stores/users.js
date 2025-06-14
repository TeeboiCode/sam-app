import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const useUsersStore = defineStore("users", {
  state: () => ({
    users:
      JSON.parse(
        localStorage.getItem("user") || sessionStorage.getItem("user")
      ) || null,
  }),

  getters: {
    getUser: (state) => state.users,
  },

  actions: {
    async registerUser(formData, router) {
      try {
        const response = await axios.post(
          `${API_URL}/api/auth/signup`,
          formData
        );

        this.users = response.data;

        Swal.fire({
          icon: "success",
          title: "Success!",
          html: `User registered successfully. <br/> Please login.`,
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/login");
          }
        });

        return response.data;
      } catch (error) {
        console.log(error);

        let message = "Failed to register user.";
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          message = error.response.data.message;
        } else if (error.message) {
          message = error.message;
        }

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: message,
          confirmButtonText: "Try Again",
        });
      }
    },

    async loginUser(credentials, router) {
      try {
        console.log(credentials);
        const response = await axios.post(
          `${API_URL}/api/auth/login`,
          credentials
        );

        const { token, user, message } = response.data;

        const storage = credentials.rememberMe ? localStorage : sessionStorage;
        storage.setItem("token", token);
        storage.setItem("user", JSON.stringify(user));

        this.users = user;

        Swal.fire({
          icon: "success",
          title: message,
          text: "You are now logged in!",
        });

        const roleRoutes = {
          student: "/student/dashboard",
          parent: "/parent/dashboard",
          tutor: "/tutor/dashboard",
          admin: "/admin/dashboard",
        };

        router.push(roleRoutes[user.role] || "/");

        return user;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: `${error.response.data.error} <br/> Please try again.`,
        });

        throw error;
      }
    },

    logoutUser(router) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      this.users = null;

      Swal.fire({
        icon: "success",
        title: "Logged out",
        timer: 1500,
        showConfirmButton: false,
      });

      router.push("/login");
    },
  },
});
