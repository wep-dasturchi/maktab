import React, { useContext } from "react";
import { motion } from "framer-motion";
import useLanguage from "../../hooks/useLanguage";
import { LangContext } from "../../context/languageConext";

const schedule = {
  "5-sinf": [
    {
      day: "Dushanba",
      day_ru: "Понедельник",
      day_eng: "Monday",
      lessons: ["Informatika", "Biologiya", "Tarix"],
      lessons_ru: ["Информатика", "Биология", "История"],
      lessons_eng: ["Informatics", "  Biology", "History"],
    },
    {
      day: "Seshanba",
      day_ru: "Вторник",
      day_eng: "Tuesday",
      lessons: ["Matematika", "Kimyo", "Geografiya"],
      lessons_ru: ["Математика", "Химия", "География"],
      lessons_eng: ["Mathematics", "Chemistry", "Geography"],
    },
    {
      day: "Chorshanba",
      day_ru: "Среда",
      day_eng: "Wednesday",
      lessons: ["Fizika", "Ingliz tili", "Tarix"],
      lessons_ru: ["Физика", "Английский язык", "История"],
      lessons_eng: ["Physics", "English", "History"],
    },
    {
      day: "Payshanba",
      day_ru: "Четверг",
      day_eng: "Thursday",
      lessons: ["Matematika", "Informatika", "Biologiya"],
      lessons_ru: ["Математика", "Информатика", "Биология"],
      lessons_eng: ["Mathematics", "Informatics", "Biology"],
    },
    {
      day: "Juma",
      day_ru: "Пятница",
      day_eng: "Friday",
      lessons: ["Kimyo", "Ingliz tili", "Geografiya"],
      lessons_ru: ["Химия", "Английский язык", "География"],
      lessons_eng: ["Chemistry", "English", "Geography"],
    },
  ],

  "6-sinf": [
    {
      day: "Dushanba",
      day_ru: "Понедельник",
      day_eng: "Monday",
      lessons: ["Informatika", "Biologiya", "Tarix"],
      lessons_ru: ["Информатика", "Биология", "История"],
      lessons_eng: ["Informatics", "Biology", "History"],
    },
    {
      day: "Seshanba",
      day_ru: "Вторник",
      day_eng: "Tuesday",
      lessons: ["Matematika", "Kimyo", "Geografiya"],
      lessons_ru: ["Математика", "Химия", "География"],
      lessons_eng: ["Mathematics", "Chemistry", "Geography"],
    },
    {
      day: "Chorshanba",
      day_ru: "Среда",
      day_eng: "Wednesday",
      lessons: ["Fizika", "Ingliz tili", "Tarix"],
      lessons_ru: ["Физика", "Английский язык", "История"],
      lessons_eng: ["Physics", "English", "History"],
    },
    {
      day: "Payshanba",
      day_ru: "Четверг",
      day_eng: "Thursday",
      lessons: ["Matematika", "Informatika", "Biologiya"],
      lessons_ru: ["Математика", "Информатика", "Биология"],
      lessons_eng: ["Mathematics", "Informatics", "Biology"],
    },
    {
      day: "Juma",
      day_ru: "Пятница",
      day_eng: "Friday",
      lessons: ["Kimyo", "Ingliz tili", "Geografiya"],
      lessons_ru: ["Химия", "Английский язык", "География"],
      lessons_eng: ["Chemistry", "English", "Geography"],
    },
  ],

  "7-sinf": [
    {
      day: "Dushanba",
      day_ru: "Понедельник",
      day_eng: "Monday",
      lessons: ["Matematika", "Fizika", "Kimyo"],
      lessons_ru: ["Математика", "Физика", "Химия"],
      lessons_eng: ["Mathematics", "Physics", "Chemistry"],
    },
    {
      day: "Seshanba",
      day_ru: "Вторник",
      day_eng: "Tuesday",
      lessons: ["Biologiya", "Tarix", "Ingliz tili"],
      lessons_ru: ["Биология", "История", "Английский язык"],
      lessons_eng: ["Biology", "History", "English"],
    },
    {
      day: "Chorshanba",
      day_ru: "Среда",
      day_eng: "Wednesday",
      lessons: ["Matematika", "Kimyo", "Geografiya"],
      lessons_ru: ["Математика", "Химия", "География"],
      lessons_eng: ["Mathematics", "Chemistry", "Geography"],
    },
    {
      day: "Payshanba",
      day_ru: "Четверг",
      day_eng: "Thursday",
      lessons: ["Fizika", "Ingliz tili", "Tarix"],
      lessons_ru: ["Физика", "Английский язык", "История"],
      lessons_eng: ["Physics", "English", "History"],
    },
    {
      day: "Juma",
      day_ru: "Пятница",
      day_eng: "Friday",
      lessons: ["Matematika", "Biologiya", "Informatika"],
      lessons_ru: ["Математика", "Биология", "Информатика"],
      lessons_eng: ["Mathematics", "Biology", "Informatics"],
    },
  ],

  "8-sinf": [
    {
      day: "Dushanba",
      day_ru: "Понедельник",
      day_eng: "Monday",
      lessons: ["Matematika", "Fizika", "Kimyo"],
      lessons_ru: ["Математика", "Физика", "Химия"],
      lessons_eng: ["Mathematics", "Physics", "Chemistry"],
    },
    {
      day: "Seshanba",
      day_ru: "Вторник",
      day_eng: "Tuesday",
      lessons: ["Biologiya", "Tarix", "Ingliz tili"],
      lessons_ru: ["Биология", "История", "Английский язык"],
      lessons_eng: ["Biology", "History", "English"],
    },
    {
      day: "Chorshanba",
      day_ru: "Среда",
      day_eng: "Wednesday",
      lessons: ["Matematika", "Kimyo", "Geografiya"],
      lessons_ru: ["Математика", "Химия", "География"],
      lessons_eng: ["Mathematics", "Chemistry", "Geography"],
    },
    {
      day: "Payshanba",
      day_ru: "Четверг",
      day_eng: "Thursday",
      lessons: ["Fizika", "Ingliz tili", "Tarix"],
      lessons_ru: ["Физика", "Английский язык", "История"],
      lessons_eng: ["Physics", "English", "History"],
    },
    {
      day: "Juma",
      day_ru: "Пятница",
      day_eng: "Friday",
      lessons: ["Matematika", "Biologiya", "Informatika"],
      lessons_ru: ["Математика", "Биология", "Информатика"],
      lessons_eng: ["Mathematics", "Biology", "Informatics"],
    },
  ],

  "9-sinf": [
    {
      day: "Dushanba",
      day_ru: "Понедельник",
      day_eng: "Monday",
      lessons: ["Matematika", "Tarix", "Ingliz tili"],
      lessons_ru: ["Математика", "История", "Английский язык"],
      lessons_eng: ["Mathematics", "History", "English"],
    },
    {
      day: "Seshanba",
      day_ru: "Вторник",
      day_eng: "Tuesday",
      lessons: ["Biologiya", "Fizika", "Kimyo"],
      lessons_ru: ["Биология", "Физика", "Химия"],
      lessons_eng: ["Biology", "Physics", "Chemistry"],
    },
    {
      day: "Chorshanba",
      day_ru: "Среда",
      day_eng: "Wednesday",
      lessons: ["Matematika", "Ingliz tili", "Geografiya"],
      lessons_ru: ["Математика", "Английский язык", "География"],
      lessons_eng: ["Mathematics", "English", "Geography"],
    },
    {
      day: "Payshanba",
      day_ru: "Четверг",
      day_eng: "Thursday",
      lessons: ["Tarix", "Fizika", "Biologiya"],
      lessons_ru: ["История", "Физика", "Биология"],
      lessons_eng: ["History", "Physics", "Biology"],
    },
    {
      day: "Juma",
      day_ru: "Пятница",
      day_eng: "Friday",
      lessons: ["Matematika", "Ingliz tili", "Kimyo"],
      lessons_ru: ["Математика", "Английский язык", "Химия"],
      lessons_eng: ["Mathematics", "English", "Chemistry"],
    },
  ],

  "10-sinf": [
    {
      day: "Dushanba",
      day_ru: "Понедельник",
      day_eng: "Monday",
      lessons: ["Informatika", "Biologiya", " ", "Tarix"],
      lessons_ru: ["Информатика", "Биология", "История"],
      lessons_eng: ["Informatics", "Biology", "History"],
    },
    {
      day: "Seshanba",
      day_ru: "Вторник",
      day_eng: "Tuesday",
      lessons: ["Matematika", "Kimyo", "Geografiya"],
      lessons_ru: ["Математика", "Химия", "География"],
      lessons_eng: ["Mathematics", "Chemistry", "Geography"],
    },
    {
      day: "Chorshanba",
      day_ru: "Среда",
      day_eng: "Wednesday",
      lessons: ["Fizika", "Ingliz tili", "Tarix"],
      lessons_ru: ["Физика", "Английский язык", "История"],
      lessons_eng: ["Physics", "English", "History"],
    },
    {
      day: "Payshanba",
      day_ru: "Четверг",
      day_eng: "Thursday",
      lessons: ["Matematika", "", " Informatika", "Biologiya"],
      lessons_ru: ["Математика", "Информатика", "Биология"],
      lessons_eng: ["Mathematics", "Informatics", "Biology"],
    },
    {
      day: "Juma",
      day_ru: "Пятница",
      day_eng: "Friday",
      lessons: ["Kimyo", "Ingliz tili", "Geografiya"],
      lessons_ru: ["Химия", "Английский язык", "География"],
      lessons_eng: ["Chemistry", "English", "Geography"],
    },
  ],

  "11-sinf": [
    {
      day: "Dushanba",
      day_ru: "Понедельник",
      day_eng: "Monday",
      lessons: ["Matematika", "Fizika", "Kimyo"],
      lessons_ru: ["Математика", "Физика", "Химия"],
      lessons_eng: ["Mathematics", "Physics", "Chemistry"],
    },
    {
      day: "Seshanba",
      day_ru: "Вторник",
      day_eng: "Tuesday",
      lessons: ["Biologiya", "Tarix", "Ingliz tili"],
      lessons_ru: ["Биология", "История", "Английский язык"],
      lessons_eng: ["Biology", "History", "English"],
    },
    {
      day: "Chorshanba",
      day_ru: "Среда",
      day_eng: "Wednesday",
      lessons: ["Matematika", "Kimyo", "Geografiya"],
      lessons_ru: ["Математика", "Химия", "География"],
      lessons_eng: ["Mathematics", "Chemistry", "Geography"],
    },
    {
      day: "Payshanba",
      day_ru: "Четверг",
      day_eng: "Thursday",
      lessons: ["Fizika", "Ingliz tili", "Tarix"],
      lessons_ru: ["Физика", "Английский язык", "История"],
      lessons_eng: ["Physics", "English", "History"],
    },
    {
      day: "Juma",
      day_ru: "Пятница",
      day_eng: "Friday",
      lessons: ["Matematika", "Biologiya", "Informatika"],
      lessons_ru: ["Математика", "Биология", "Информатика"],
      lessons_eng: ["Mathematics", "Biology", "Informatics"],
    },
  ],
};

const LessonsPage = () => {
  const { language } = useContext(LangContext);
  const { t } = useLanguage();

  const getLessons = (item) => {
    if (language === "uz") return item.lessons;
    if (language === "ru") return item.lessons_ru;
    return item.lessons_eng;
  };

  return (
    <div className="container">
      <div className="darsliklar-container">
        <h1 className="title">📘 {t("расписание")}</h1>
        {Object.entries(schedule).map(([grade, days], idx) => (
          <motion.div
            key={idx}
            className="grade-schedule"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="lesson-item">{grade}</h2>
            <div className="week-days">
              {days.map((item, i) => (
                <div key={i} className="day-block">
                  <h3 className="lesson-black">
                    {language === "uz"
                      ? item.day
                      : language === "ru"
                      ? item.day_ru
                      : item.day_eng}
                  </h3>
                  <ul className="lesson-list">
                    {getLessons(item).map((lesson, j) => (
                      <li className="lesson-title" key={j}>{lesson}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LessonsPage;
