import React, { useContext } from "react";
import useLanguage from "../../hooks/useLanguage";
import { LangContext } from "../../context/languageConext";
import { Link } from "react-router-dom";

const newsItems = [
  {
    title: "Yangi kutubxona ochildi",
    title_ru: "Открыта новая библиотека.",
    title_en: "A new library was opened",
    date: "2025-03-30",
  },
  {
    title: "Dasturlash kurslari boshlandi",
    title_ru: "Курсы программирования начались",
    title_en: "Programming courses have started",
    date: "2025-03-15",
  },
];

const News = () => {
  const { language } = useContext(LangContext);

  const { t } = useLanguage();
  return (
    <div className="container">
      <section className="news">
        <Link to="/news">
          <div className="news-header">
            <h2>{t("news")}</h2>
          </div>
          <ul className="news-list">
            {newsItems.map((item, index) => (
              <li key={index} className="news-item">
                <p className="news-date">{item.date}</p>
                <p className="news-title">
                  {" "}
                  {language == "uz"
                    ? item.title
                    : language == "ru"
                    ? item.title_ru
                    : item.title_en}
                </p>
              </li>
            ))}
          </ul>
        </Link>
      </section>
    </div>
  );
};

export default News;
