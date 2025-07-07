import { defineStore } from "pinia";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const useProgramsStore = defineStore("programs", {
  state: () => ({
    programs: [],
    loading: false,
    error: null,
  }),

  getters: {
    getPrograms: (state) => state.programs,
    getProgramById: (state) => (id) =>
      state.programs.find((program) => program.id === id),
  },

  actions: {
    async fetchPrograms() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(`${API_URL}/api/programs`);
        this.programs = response.data;
      } catch (error) {
        this.error = "Failed to load programs.";
      } finally {
        this.loading = false;
      }
    },
  },
});
