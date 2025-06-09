import { defineStore } from "pinia";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: null,
  }),
  actions: {
    async registerUser(formData) {
      try {
        const response = await axios.post(
          `${API_URL}/users`,
          formData
        );
        this.users = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
