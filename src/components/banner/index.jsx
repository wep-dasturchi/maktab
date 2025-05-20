import useLanguage from "../../hooks/useLanguage";

// import { Link   } from "react-router-dom";

const HeaderBanner = () => {
  const { t } = useLanguage();
  return (
    <div className="container">
      <section className="banner">
        <div className="banner-content">
          <h1>{t("banner_title")}</h1>
          <p>{t("banner_text")}</p>
          <button className="banner-button">{t("banner_btn")}</button>
        </div>
      </section>
    </div>
  );
};

export default HeaderBanner;
