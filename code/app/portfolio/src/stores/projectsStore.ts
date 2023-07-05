import { defineStore } from "pinia";

const API_GITHUB_DOMAIN = "https://api.github.com";
const API_GITHUB_PATH_USERS = "/users/";
const API_GITHUB_PATH_REPOS = "/repos";
const API_GITHUB_QUERY_PINNED = "?sort=updated&direction=desc";

export const useProjectsStore = defineStore("projectsStore", {
  state: () => ({}),

  getters: {},

  actions: {
    getGithubProjectsPath(user: string) {
      return (
        API_GITHUB_DOMAIN + API_GITHUB_PATH_USERS + user + API_GITHUB_PATH_REPOS
      );
    },

    getGithubPinnedProjectsPath(user: string) {
      return (
        API_GITHUB_DOMAIN +
        API_GITHUB_PATH_USERS +
        user +
        API_GITHUB_PATH_REPOS +
        API_GITHUB_QUERY_PINNED
      );
    },

    async getGithubProjects(user: string) {
      const response = await fetch(this.getGithubProjectsPath(user));
      const data = await response.json();
      return data;
    },

    async getGithubPinnedProjects(user: string) {
      const response = await fetch(this.getGithubPinnedProjectsPath(user));
      const data = await response.json();
      return data.filter((repo: any) => repo.pinned);
    },
  },
});
