import { defineStore } from "pinia";

// STUDY
import EE_TML_2010 from "@/data/timeline/data/study/ee_tml_2010.json";
import EE_TML_2011 from "@/data/timeline/data/study/ee_tml_2011.json";
import EE_TML_2013 from "@/data/timeline/data/study/ee_tml_2013.json";
import EE_TML_2016 from "@/data/timeline/data/study/ee_tml_2016.json";
import EE_TML_2017 from "@/data/timeline/data/study/ee_tml_2017.json";
import EE_TML_2019 from "@/data/timeline/data/study/ee_tml_2019.json";
import EE_TML_2023 from "@/data/timeline/data/study/ee_tml_2023.json";

// WORK
import we_TML_2001 from "@/data/timeline/data/work/we_tml_2001.json";
import we_TML_2007 from "@/data/timeline/data/work/we_tml_2007.json";
import we_TML_2012 from "@/data/timeline/data/work/we_tml_2012.json";
import we_TML_2013 from "@/data/timeline/data/work/we_tml_2013.json";
import we_TML_2016 from "@/data/timeline/data/work/we_tml_2016.json";
import we_TML_2017 from "@/data/timeline/data/work/we_tml_2017.json";
import we_TML_2020 from "@/data/timeline/data/work/we_tml_2020.json";

export const useLoaderTmlStore = defineStore("loaderTml", {
  state: () => ({
    // study_list: [
    //   EE_TML_2010,
    //   EE_TML_2011,
    //   EE_TML_2013,
    //   EE_TML_2016,
    //   EE_TML_2017,
    //   EE_TML_2019,
    //   EE_TML_2023,
    // ],
    // work_list: [
    //   we_TML_2001,
    //   we_TML_2007,
    //   we_TML_2012,
    //   we_TML_2013,
    //   we_TML_2016,
    //   we_TML_2017,
    //   we_TML_2020,
    // ],
  }),

  getters: {},

  actions: {
    getAllCards(study_list, work_list) {
      let cardsList: any[] = [];
      let id = 0;

      // STUDY STUDY STUDY STUDY STUDY STUDY STUDY STUDY STUDY STUDY STUDY STUDY STUDY STUDY STUDY
      for (const study of study_list) {
        const classroomMonitorList = study.classroom_monitor;
        const requiredInternshipList = study.required_internship;
        const internshipList = study.internship;
        const researchList = study.research;

        const _local =
          study.location.city +
          ", " +
          study.location.state +
          ", " +
          study.location.country;

        const _category = study.category;

        let startCard = {
          isToDisplay: study.display,
          isStartCard: true,
          isEndCard: false,
          type: study.type,
          category: _category,
          dataStart: study.date_start,
          dataEnd: study.date_end,
          title: null,
          subTitle: null,
          localParteA: null,
          localParteB: null,
          localParteC: null,
          txtStart: "Iniciou os estudos no curso de " + study.course_name,
          txtFullText: null,
          txtTopics: null,
          txtLinks: null,
          id: id,
        };
        id += 1;
        cardsList.push(startCard);

        for (const classroomMonitor of classroomMonitorList) {
          for (const project of classroomMonitor.projects) {
            let card = {
              isToDisplay: project.display,
              isStartCard: false,
              isEndCard: false,
              type: study.type,
              category: _category,
              dataStart: project.date_start,
              dataEnd: project.date_end,
              title: classroomMonitor.job_title,
              subTitle: study.institution_name,
              localParteA: project.department,
              localParteB: project.project,
              localParteC: _local,
              txtStart: null,
              txtFullText:
                project.description.intro +
                " " +
                project.description.conclusion,
              txtTopics: project.description.tasks,
              txtLinks: study.link,
              id: id,
            };
            id += 1;
            cardsList.push(card);
          }
        }

        for (const requiredInternship of requiredInternshipList) {
          for (const project of requiredInternship.projects) {
            let card = {
              isToDisplay: project.display,
              isStartCard: false,
              isEndCard: false,
              type: study.type,
              category: _category,
              dataStart: project.date_start,
              dataEnd: project.date_end,
              title: requiredInternship.job_title,
              subTitle: study.institution_name,
              localParteA: project.department,
              localParteB: project.project,
              localParteC: _local,
              txtStart: null,
              txtFullText:
                project.description.intro +
                " " +
                project.description.conclusion,
              txtTopics: project.description.tasks,
              txtLinks: study.link,
              id: id,
            };
            id += 1;
            cardsList.push(card);
          }
        }

        for (const internship of internshipList) {
          for (const project of internship.projects) {
            let card = {
              isToDisplay: project.display,
              isStartCard: false,
              isEndCard: false,
              type: study.type,
              category: _category,
              dataStart: project.date_start,
              dataEnd: project.date_end,
              title: internship.job_title,
              subTitle: study.institution_name,
              localParteA: project.department,
              localParteB: project.project,
              localParteC: _local,
              txtStart: null,
              txtFullText:
                project.description.intro +
                " " +
                project.description.conclusion,
              txtTopics: project.description.tasks,
              txtLinks: study.link,
              id: id,
            };
            id += 1;
            cardsList.push(card);
          }
        }

        for (const research of researchList) {
          for (const project of research.projects) {
            let card = {
              isToDisplay: project.display,
              isStartCard: false,
              isEndCard: false,
              type: study.type,
              category: _category,
              dataStart: project.date_start,
              dataEnd: project.date_end,
              title: research.job_title,
              subTitle: study.institution_name,
              localParteA: project.department,
              localParteB: project.project,
              localParteC: _local,
              txtStart: null,
              txtFullText:
                project.description.intro +
                " " +
                project.description.conclusion,
              txtTopics: project.description.tasks,
              txtLinks: study.link,
              id: id,
            };
            id += 1;
            cardsList.push(card);
          }
        }
      }

      for (const work of work_list) {
        const positionsList = work.positions;

        const _local =
          work.location.city +
          ", " +
          work.location.state +
          ", " +
          work.location.country;

        const _category = work.category;

        let startCard = {
          isToDisplay: work.display,
          isStartCard: true,
          isEndCard: false,
          type: work.type,
          category: _category,
          dataStart: work.date_start,
          dataEnd: work.date_end,
          title: null,
          subTitle: null,
          localParteA: null,
          localParteB: null,
          localParteC: null,
          txtStart: "Iniciou a trabalhar na " + work.institution_name,
          txtFullText: null,
          txtTopics: null,
          txtLinks: null,
          id: id,
        };
        id += 1;
        cardsList.push(startCard);

        for (const position of positionsList) {
          for (const project of position.projects) {
            let card = {
              isToDisplay: project.display,
              isStartCard: false,
              isEndCard: false,
              type: work.type,
              category: _category,
              dataStart: project.date_start,
              dataEnd: project.date_end,
              title: position.job_title,
              subTitle: work.institution_name,
              localParteA: project.department,
              localParteB: project.project,
              localParteC: _local,
              txtStart: null,
              txtFullText:
                project.description.intro +
                " " +
                project.description.conclusion,
              txtTopics: project.description.tasks,
              txtLinks: work.link,
              id: id,
            };
            id += 1;
            cardsList.push(card);
          }
        }
      }

      var startCard = cardsList.filter((card) => card.isStartCard);

      for (const card of startCard) {
        let endCard = {
          isToDisplay: card.isToDisplay,
          isStartCard: true,
          isEndCard: true,
          type: card.type,
          category: card.category,
          dataStart: card.dataStart,
          dataEnd: card.dataEnd,
          title: null,
          subTitle: null,
          localParteA: null,
          localParteB: null,
          localParteC: null,
          txtStart: card.txtStart.replace("Iniciou", "Encerrou"),
          txtFullText: null,
          txtTopics: null,
          txtLinks: null,
          id: id,
        };
        id += 1;
        cardsList.push(endCard);
      }

      cardsList = cardsList.map((card) => {
        if (card.isEndCard) {
          card.pointInTimeline = Date.parse(card.dataEnd);
          return card;
        }
        card.pointInTimeline = Date.parse(card.dataStart);
        return card;
      });

      // SORT ASC

      // const sortedAsc = arr1.sort(
      //   (objA, objB) => Number(objA.date) - Number(objB.date),
      // );

      // SORT DESC

      // const sortedDesc = arr1.sort(
      //   (objA, objB) => Number(objB.date) - Number(objA.date),
      // );

      cardsList = cardsList.map((card) => {
        if (card.isEndCard) {
          const date = card.dataEnd.split("-");
          card.year = date[0];
          card.month = date[1];
          card.day = date[2];
          return card;
        }
        const date = card.dataStart.split("-");
        card.year = date[0];
        card.month = date[1];
        card.day = date[2];
        return card;
      });

      cardsList = cardsList.sort(
        (objA, objB) =>
          Number(objB.pointInTimeline) - Number(objA.pointInTimeline)
      );

      let cards_by_year_and_month: any[] = [];

      for (const card of cardsList) {
        if (
          !cards_by_year_and_month.find(
            (obj) => obj.year === card.year && obj.month === card.month
          )
        ) {
          cards_by_year_and_month.push({
            year: card.year,
            month: card.month,
            cards: cardsList.filter(
              (card_filter) =>
                card_filter.year === card.year &&
                card_filter.month === card.month
            ),
          });
        }
      }

      return cards_by_year_and_month;
    },
  },
});
