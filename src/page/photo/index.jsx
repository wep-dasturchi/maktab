import React from "react";

import { motion } from "framer-motion";
import useLanguage from "../../hooks/useLanguage";

const photos = [
  "https://sayt.maktab.uz/uploads/media//bed9cba1-e9e5-331d-6237-a43c96bbc0d5_mini.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAxZhYyNXWt0WFq1gZpW6oeU1DKfBZ0dQ64A&s",
  "https://i.ytimg.com/vi/POfhAlNbXAM/maxresdefault.jpg",
  "https://storage.kun.uz/source/3/Vf4Boe1shztYUp3VpgQfHTcebovkFww-.jpg",
  "https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/0cc7b92f241eb57acaf7dc7382ca96fa.jpeg",
  "https://www.samdu.uz/upload/cover-images/62e29f9756fec-62e29f9756fee-62e29f9756fef-62e29f9756ff0.jpg",
  "https://sayt.maktab.uz/uploads/media//bed9cba1-e9e5-331d-6237-a43c96bbc0d5_mini.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAxZhYyNXWt0WFq1gZpW6oeU1DKfBZ0dQ64A&s",
  "https://i.ytimg.com/vi/POfhAlNbXAM/maxresdefault.jpg",
  "https://storage.kun.uz/source/3/Vf4Boe1shztYUp3VpgQfHTcebovkFww-.jpg",
  "https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/0cc7b92f241eb57acaf7dc7382ca96fa.jpeg",
  "https://www.samdu.uz/upload/cover-images/62e29f9756fec-62e29f9756fee-62e29f9756fef-62e29f9756ff0.jpg",
];

const photoFoto = () => {
  const { t } = useLanguage();
  return (
    <div className="container">
      <div className="foto-galereya">
        <motion.h2
          className="galereya-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📸 {t("galery_title")}
        </motion.h2>

        <motion.p
          className="galereya-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {t("galery_item")}
        </motion.p>

        <div className="photo-grid">
          {photos.map((src, index) => (
            <motion.div
              className="photo-item"
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={src} alt={`gallery-${index}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default photoFoto;
