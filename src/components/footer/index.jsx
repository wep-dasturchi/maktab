import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import useLanguage from "../../hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-section about">
            <h1>47 {t("logo")}</h1>
            <p>{t("school_desc")}</p>
          </div>

          <div className="footer-section links">
            <h4>{t("useful_links")}</h4>
            <ul>
              <li>
                <Link to="/">{t("home")}</Link>
              </li>
              <li>
                <Link to="/lessons">{t("lessons")}</Link>
              </li>
              <li>
                <Link to="/teachers">{t("teachers")}</Link>
              </li>
              <li>
                <Link to="/news">{t("news")}</Link>
              </li>
              <li>
                <Link to="/photo">{t("foto")}</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h4>{t("contact")}</h4>
            <a href="https://maps.app.goo.gl/zi5fgZY549AoRQQw7" target="_blank">
              <EnvironmentOutlined /> {t("location")}
            </a>
            <br />
            <a href="tel:+998930651760">📞 +998 93 065 17 60</a>
            <p>✉️ {t("emaill")}</p>
            <div className="footer-links">
              <a
                href="https://www.instagram.com/47_eco_green_force/"
                target="_blank"
              >
                <InstagramOutlined style={{ fontSize: 25 }} />
              </a>
              <a href="" target="_blank">
                <YoutubeOutlined style={{ fontSize: 25 }} />
              </a>
              <a href="" target="_blank">
                {" "}
                <FacebookOutlined style={{ fontSize: 25 }} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {t("footer")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
