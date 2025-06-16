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
          student: "/",
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

    async forgetPassword(email, router) {
      try {
        // 1. Show loading indicator
        await Swal.fire({
          title: "Sending reset link...",
          html: "Please wait while we process your request.",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
          timer: 5000, //
          timerProgressBar: true,
        });

        // 2. Make request after delay (or during it)
        const response = await axios.post(
          `${API_URL}/api/auth/forgot-password`,
          {
            email,
          }
        );

        const { message } = response.data;

        return message;
      } catch (error) {
        // 4. Show error message
        await Swal.fire({
          icon: "error",
          title: error.response?.data?.error || "Something went wrong",
          text: "Please try again.",
          timer: 3000,
        });

        router.push("/forget-password");
        return null;
      }
    },

    async resetPassword(formData, router) {
      try {
        const response = await axios.post(
          `${API_URL}/api/auth/reset-password`,
          formData
        );

        const { message } = response.data;

        await Swal.fire({
          icon: "success",
          title: "Success!",
          text: message,
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/login");
          }
        });

        return message;
      } catch (error) {
        await Swal.fire({
          icon: "error",
          title: error.response?.data?.error || "Something went wrong",
          text: "Please check your password if matches.",
          timer: 3000,
        });
        return null;
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
      }).then(() => {
        router.push("/login");
      });
    },
  },
});
