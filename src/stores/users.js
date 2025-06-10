import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: null,
  }),
  actions: {
    async registerUser(formData) {
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
            window.location.href = "/login";
          }
        });

        return response.data;
      } catch (error) {
        console.log(error);
      }
    },

    async loginUser(credentials) {
      try {
        const response = await axios.post(`${API_URL}/login`, credentials);

        const { token, user } = response.data;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        this.users = user;

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome back, ${user.name || "User"}!`,
        });

        switch (user.role) {
          case "student":
            window.location.href = "/student/dashboard";
            break;
          case "parent":
            window.location.href = "/parent/dashboard";
            break;
          case "tutor":
            window.location.href = "/tutor/dashboard";
            break;
          case "admin":
            window.location.href = "/admin/dashboard";
            break;
          default:
            window.location.href = "/";
        }

        return user;
      } catch (error) {
        let message = "Login failed.";
        if (error.response?.data?.message) {
          message = error.response.data.message;
        } else if (error.message) {
          message = error.message;
        }

        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: message,
        });

        throw error;
      }
    },
  },
});
