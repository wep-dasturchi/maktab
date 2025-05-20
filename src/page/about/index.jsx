import React, { useContext } from "react";
import useLanguage from "../../hooks/useLanguage";
import { LangContext } from "../../context/languageConext";

const leadership = [
  {
    id: 1,
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Rahmatilla Jo‘rayev",
    name_ru: "Рахматилла Джураев",
    name_eng: "Rahmatilla Juraev",
    position: "Direktor",
    position_ru: "Директор",
    position_eng: "Director",
  },
  {
    id: 2,
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Laylo To‘xtayeva",
    name_ru: "Лейла Тохтаева",
    name_eng: "Layla Tokhtayeva",
    position: "O‘quv ishlari bo‘yicha direktor o‘rinbosari",
    position_ru: "Заместитель директора по учебной работе",
    position_eng: "Deputy Director for Academic Affairs",
  },
  {
    id: 3,
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Islomov Sherzod",
    name_ru: "Исламов Шерзод",
    name_eng: "Islomov Sherzod",
    position: "Maktab psixologi",
    position_ru: "Школьный психолог",
    position_eng: "School psychologist",
  },
];

const AboutExtended = () => {
  const { language } = useContext(LangContext);
  const { t } = useLanguage();
  return (
    <div className="container">
      <div className="about-extended">
        {/* 1. Maktab Tarixi */}
        <section className="section history">
          <h2 className="about__title">📚{t("historyy")}</h2>
          <p>{t("history")}</p>
        </section>

        {/* 2. Rahbariyat jamoasi */}
        <section className="section team">
          <h2 className="about__title">👨‍🏫 {t("leadership")}</h2>
          <div className="team-grid">
            {leadership.map((item, index) => (
              <div key={index} className="team-member">
                <img
                  src={item.img}
                  alt={
                    language == "uz"
                      ? item.position
                      : language == "ru"
                      ? item.position_ru
                      : item.position_eng
                  }
                />
                <h4> </h4>
                <p>
                  {" "}
                  {language == "uz"
                    ? item.position
                    : language == "ru"
                    ? item.position_ru
                    : item.position_eng}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Yutuqlar */}
        <section className="section achievements">
          <h2 className="about__title">🏆 {t("achievements")}</h2>
          <ul>
            <li>{t("item1")}</li>
            <li>{t("item2")}</li>
            <li>{t("item3")}</li>
          </ul>
        </section>

        {/* 4. Video */}
        <section className="section video">
          <h2 className="about__title">🎥 {t("school_vidyo")}</h2>
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src=""
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* 5. Statistika */}
        <section className="section stats">
          <h2 className="about__title">📊 {t("statistics")}</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>1200+</h3>
              <p>{t("pupils")}</p>
            </div>
            <div className="stat-item">
              <h3>80+</h3>
              <p>{t("teacher")}</p>
            </div>
            <div className="stat-item">
              <h3>35</h3>
              <p>{t("sciences")}</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>{t("result")}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutExtended;
