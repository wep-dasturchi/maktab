import React, { useContext } from "react";

import { motion } from "framer-motion";
import { title } from "framer-motion/client";
import useLanguage from "../../hooks/useLanguage";
import { LangContext } from "../../context/languageConext";

const newsData = [
  {
    title: "Yangi sport zali ochildi",
    title_ru: "Открылся новый спортивный зал",
    title_eng: "New Sports Hall Opened",
    date: "2025-05-01",
    date_ru: "01.05.2025",
    date_eng: "May 1, 2025",
    description: "Maktabimizda zamonaviy sport zali foydalanishga topshirildi.",
    description_ru:
      "В нашей школе сдан в эксплуатацию современный спортивный зал.",
    description_eng: "A modern sports hall has been inaugurated in our school.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU0z9gT-lynjWF8D_o9bC0y2rft1zUmb0qXw&s",
  },

  {
    title: "Robototexnika musobaqasi",
    title_ru: "Соревнование по робототехнике",
    title_eng: "Robotics Competition",
    date: "2025-04-25",
    date_ru: "25.04.2025",
    date_eng: "April 25, 2025",
    description:
      "O'quvchilarimiz viloyat robototexnika musobaqasida qatnashdi va g'olib bo'lishdi.",
    description_ru:
      "Наши ученики участвовали и победили в областном соревновании по робототехнике.",
    description_eng:
      "Our students participated and won in the regional robotics competition.",
    image:
      "https://piima.uz/storage/public/userfiles/photos/4/photo_2022-04-27_16-13-54.jpg",
  },
  {
    title: "Ingliz tili olimpiadasi",
    title_ru: "Олимпиада по английскому языку",
    title_eng: "English Language Olympiad",
    date: "2025-04-18",
    date_ru: "18.04.2025",
    date_eng: "April 18, 2025",
    description:
      "O'quvchimiz respublika olimpiadasida ingliz tilidan 1-o'rinni egalladi.",
    description_ru:
      "Наш ученик занял 1-е место на республиканской олимпиаде по английскому языку.",
    description_eng:
      "Our student took 1st place in the national English language Olympiad.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3rXTnxb6sQ_pGthyGYg4aIemC7fO1r58jhQ&s",
  },
  {
    title: "Yangi kutubxona ochildi",
    title_ru: "Открылась новая библиотека",
    title_eng: "New Library Opened",
    date: "2025-03-30",
    date_ru: "30.03.2025",
    date_eng: "March 30, 2025",
    description: "Maktabimizda yangi, zamonaviy kutubxona ish boshladi.",
    description_ru: "В нашей школе начала работу новая современная библиотека.",
    description_eng:
      "A new, modern library has started operating at our school.",
    image:
      "https://amity.uz/uploads/b4497595-af20-5e47-1439-963afcc420b8_lists_slider_19.jpg",
  },
  {
    title: "Dasturlash kurslari boshlandi",
    title_ru: "Начались курсы программирования",
    title_eng: "Programming Courses Started",
    date: "2025-03-15",
    date_ru: "15.03.2025",
    date_eng: "March 15, 2025",
    description:
      "Endilikda maktabimizda bepul dasturlash kurslari o'tkaziladi.",
    description_ru:
      "Теперь в нашей школе проходят бесплатные курсы программирования.",
    description_eng:
      "Free programming courses are now being held at our school.",
    image:
      "https://frankfurt.apollo.olxcdn.com/v1/files/5xpapbpgfh8h2-UZ/image;s=4000x3000",
  },
];

const NewsPage = () => {
  const { language } = useContext(LangContext);
  const { t } = useLanguage();
  return (
    <div className="container">
      <div className="yangiliklar-container">
        <h1 className="title">📰 {t("news")}</h1>
        <div className="news-grid">
          {newsData.map((item, idx) => (
            <motion.div
              key={idx}
              className="news-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={item.image} alt={item.title} />
              <div className="card-content">
                <h3>
                  {" "}
                  {language == "uz"
                    ? item.title
                    : language == "ru"
                    ? item.title_ru
                    : item.title_eng}
                </h3>
                <span>
                  {language == "uz"
                    ? item.date
                    : language == "ru"
                    ? item.date_ru
                    : item.date_eng}
                </span>
                <p>
                  {language == "uz"
                    ? item.description
                    : language == "ru"
                    ? item.description_ru
                    : item.description_eng}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
