import React, { useContext } from "react";
import { BookOpen, FlaskConical, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";
import useLanguage from "../../hooks/useLanguage";
import { LangContext } from "../../context/languageConext";
// import "./Courses.scss";

const courses = [
  {
    id: 1,
    title: "Matematika",
    title_ru: "Математика",
    title_en: "Mathematics",
    icon: LayoutGrid,
  },
  {
    id: 2,
    title: "Biologiya",
    title_ru: "Биология",
    title_en: "Biology",
    icon: FlaskConical,
  },
  {
    id: 3,
    title: "Informatika",
    title_ru: "Информатика",
    title_en: "Informatics",
    icon: BookOpen,
  },
];

const Courses = () => {
    const { language } = useContext(LangContext);
   const { t } = useLanguage();
  return (
    <div className="container">
      <section className="courses-section">
        <h2 className="section-title">📘 {t("lessons")}</h2>
        <div className="courses-grid">
          {courses.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="course-card" key={index}>
                <Icon size={52} className="course-icon" />
                <p style={{ fontSize: 20 }} className="course-title">
                  {language == "uz"
                    ? item.title
                    : language == "ru"
                    ? item.title_ru
                    : item.title_en}
                </p>
              </div>
            );
          })}
        </div>
        <Link to="lessons">
          <button className="btn">{t("login")}</button>
        </Link>
      </section>
    </div>
  );
};

export default Courses;
