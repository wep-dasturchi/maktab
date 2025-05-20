import React from "react";
import useLanguage from "../../hooks/useLanguage";
import { Link } from "react-router-dom";

const AboutSchool = () => {
  const { t } = useLanguage();
  return (
    <div className="container">
      <div className="about-school">
        <Link to="/about">
          <h2>{t("about_school")}</h2>
          <p>{t("about_text")}</p>
        </Link>
      </div>
    </div>
  );
};

export default AboutSchool;
