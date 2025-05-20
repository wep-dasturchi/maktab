import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../../context/languageConext";
import useLanguage from "../../hooks/useLanguage";

const teachers = [
  {
    id: 1,
    name: "Jon Smit",
    name_ru: "Джон Смит",
    name_en: "John Smith",
    subject: "Matematika",
    subject_ru: "Математика",
    subject_en: "Mathematics",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Emili Jonson",
    name_ru: "Эмили Джонсон",
    name_en: "Emily Johnson",
    subject: "Biologiya",
    subject_ru: "Биология",
    subject_en: "Biology",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Maykl Braun",
    name_ru: "Майкл Браун",
    name_en: "Michael Brown",
    subject: "Informatika",
    subject_ru: "Informatika",
    subject_en: "Informatics",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Teachers = () => {
  const { language } = useContext(LangContext);
    const { t } = useLanguage();
  return (
    <div className="container">
      <div className="teachers-section">
        <h2 className="teacher-text">{t("teachers")}</h2>
        <div className="teachers-grid">
          {teachers.map((item, index) => (
            <div key={index} className="teacher-card">
              <img src={item.image} alt={item.name} />
              <h3>
                {" "}
                {language == "uz"
                  ? item.name
                  : language == "ru"
                  ? item.name_ru
                  : item.name_en}
              </h3>
              <p> {language == "uz"
                    ? item.subject
                    : language == "ru"
                    ? item.subject_ru
                    : item.subject_en}</p>
            </div>
          ))}
        </div>
        <Link to="teachers">
          <button className="btn">{t("login")}</button>
        </Link>
      </div>
    </div>
  );
};

export default Teachers;
