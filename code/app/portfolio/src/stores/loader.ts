import { defineStore } from "pinia";

import languages from "@/data/languages.json";
import english from "@/data/portfolio/english.json";
import portuguese from "@/data/portfolio/portuguese.json";
import italian from "@/data/portfolio/italian.json";

const ENGLISH = languages.list[0];
const PORTUGUESE = languages.list[1];
const ITALIAN = languages.list[2];

export const useLoaderStore = defineStore("loader", {
  state: () => ({
    selectedLanguage: "english",
    selectedLanguageData: english,
  }),

  getters: {
    menuLanguage: (state) => languages.list,

    coverInterface: (state) => state.selectedLanguageData.sections.cover,
    aboutInterface: (state) => state.selectedLanguageData.sections.about,
    skillsInterface: (state) => state.selectedLanguageData.sections.skills,
    showcasesInterface: (state) => state.selectedLanguageData.sections.showcases,
    projectsInterface: (state) => state.selectedLanguageData.sections.projects,
    contatInterface: (state) => state.selectedLanguageData.sections.contact,
  },

  actions: {
    setupLanguage(language: string) {
      this.$patch((state) => {
        state.selectedLanguage = language;
      });
    },

    setupSelectedLanguageData() {
      switch (this.selectedLanguage) {
        case ENGLISH:
          this.selectedLanguageData = english;
          break;
        case PORTUGUESE:
          this.selectedLanguageData = portuguese;
          break;
        case ITALIAN:
          this.selectedLanguageData = italian;
          break;
        default:
          break;
      }
    },

    configUserLanguage() {
      switch (navigator.language.substring(0, 2)) {
        case "en":
          this.setupLanguage(ENGLISH);
          break;
        case "pt":
          this.setupLanguage(PORTUGUESE);
          break;
        case "it":
          this.setupLanguage(ITALIAN);
          break;
        default:
          this.setupLanguage(ENGLISH);
          break;
      }
      this.setupSelectedLanguageData();
    },

    setSelectedLanguage(json: any) {
      this.$patch((state) => {
        state.selectedLanguageData = json;
      });
    },

    changePortfolioLanguage(language: string) {
      this.setupLanguage(language);
      this.setupSelectedLanguageData();
    },
  },
});
