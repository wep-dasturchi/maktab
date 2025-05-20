import React from "react";
import { Link } from "react-router-dom";
import useLanguage from "../../hooks/useLanguage";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZT1bj7bIws0KNjETfwsK6TGFAYCx5Jg1Slw&s",
  "https://xabar.uz/static/crop/3/6/920__95_3694255566.jpg",
  "https://i.ytimg.com/vi/POfhAlNbXAM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCqZbaNbezdgWrtuV49pSHXECv0vw",
];

const Gallery = () => {
  const { t } = useLanguage();
  return (
    <div className="gallery-section">
      <h2>📸 {t("photo_gallery")}</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-card">
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
      <Link to="photo">
        <button className="btn">{t("login")}</button>
      </Link>
    </div>
  );
};

export default Gallery;
