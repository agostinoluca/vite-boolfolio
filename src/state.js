import axios from "axios";
import { reactive } from "vue";

export const state = reactive({
  base_api_url: "http://127.0.0.1:8000",
  projects_endpoint: "/api/projects",
  search_project: "",
  projects: null,

  callApi(projects_url) {
    axios
      .get(projects_url)
      .then((resp) => {
        // console.log(resp);
        this.projects = resp.data.results;
      })
      .catch((err) => {
        console.error(err);
      });
  },

  changePage(url) {
    this.callApi(url);
  },

  search() {
    const projects_url =
      this.base_api_url +
      this.projects_endpoint +
      `?search=${this.search_project}`;

    // console.log(projects_url);
    this.callApi(projects_url);
  },
});
