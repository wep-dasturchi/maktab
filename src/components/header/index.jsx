import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search";
import useLanguage from "../../hooks/useLanguage";

function Header() {
  // darkMode holatini localStorage dan olish
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true"; // string bo‘lishi mumkin
  });

  // darkMode o‘zgarganda localStorage ga yozish
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const wrapperElement = document.querySelector(".wrapper");
    const menuElement = document.querySelector(".sidebar");
    const language = document.querySelector(".header__language");
    const footer = document.querySelector(".footer");
    const btn = document.querySelectorAll(".btn");
    const icons = document.querySelectorAll(".course-icon");
    const about = document.querySelectorAll(".about__title");
    const title = document.querySelector(".title");
    const lesson = document.querySelectorAll(".lesson-black");
    const lessonTitle = document.querySelectorAll(".lesson-title");
    const lessonItem = document.querySelectorAll(".lesson-item");

    const backgroundColor = darkMode ? "black" : "white";
    const textColor = darkMode ? "white" : "black";
    const wrapperColor = darkMode ? "#002" : "#4f46e5";
    const iconColor = darkMode ? "white" : "#4f46e5";
    // const aboutTitle = darkMode ? "white" : "#4f46e5";

    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;

    if (wrapperElement) wrapperElement.style.backgroundColor = wrapperColor;
    if (menuElement) menuElement.style.backgroundColor = wrapperColor;
    if (language) language.style.backgroundColor = wrapperColor;
    if (footer) footer.style.backgroundColor = wrapperColor;
    if (title) title.style.color = iconColor;
    if (about.length > 0)
      about.forEach((e) => {
        e.style.color = iconColor;
      });

    if (btn.length > 0) {
      btn.forEach((e) => {
        e.style.backgroundColor = wrapperColor;
      });
    }

    if (icons.length > 0) {
      icons.forEach((e) => {
        e.style.color = iconColor;
      });
    }
    if (lesson.length > 0)
      lesson.forEach((e) => {
        e.style.color = iconColor;
      });
    if (lessonTitle.length > 0)
      lessonTitle.forEach((e) => {
        e.style.color = iconColor;
      });

       if (lessonItem.length > 0)
      lessonItem.forEach((e) => {
        e.style.color = iconColor;
      });
  }, [darkMode]);

  const handlChange = (e) => {
    const selectedLang = e.target.value;
    localStorage.setItem("lang", selectedLang);
    window.location.reload(); // til o‘zgartirish uchun reload
  };

  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="wrapper">
      <div className="container">
        <header className="header">
          <Link to="/" className="header__logo">
            47 {t("logo")}
          </Link>
          <nav className="header__pages">
            <Link to="/" className="header__link">
              {t("home")}
            </Link>
            <Link to="about" className="header__link">
              {t("about")}
            </Link>
            <Link to="lessons" className="header__link">
              {t("lessons")}
            </Link>
            <Link to="news" className="header__link">
              {t("news")}
            </Link>
            <Link to="photo" className="header__link">
              {t("foto")}
            </Link>
            <Link to="connection" className="header__link">
              {t("connection")}
            </Link>
          </nav>

          <div className="header__icon">
            <SearchBar />

            <div className="header__dark">
              <Switch
                className="header__switch"
                checked={darkMode}
                onChange={(checked) => setDarkMode(checked)}
                checkedChildren="🌙"
                unCheckedChildren="☀"
              />
            </div>

            <select
              className="header__language"
              defaultValue={localStorage.getItem("lang")}
              onChange={handlChange}
            >
              <option value="uz">{t("uz")}</option>
              <option value="ru">{t("ru")}</option>
              <option value="eng">{t("eng")}</option>
            </select>

            <div className="header__outlined">
              <MenuFoldOutlined
                className={`openbtn ${isOpen ? "hidden" : ""}`}
                onClick={openSidebar}
              />
            </div>
          </div>

          <div className="header__menu">
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
              <MenuUnfoldOutlined className="closebtn" onClick={closeSidebar} />
              <nav className="header__pages-menu">
                <Link to="/" onClick={closeSidebar} className="header__link">
                  {t("home")}
                </Link>
                <Link
                  to="about"
                  onClick={closeSidebar}
                  className="header__link"
                >
                  {t("about")}
                </Link>
                <Link
                  to="lessons"
                  onClick={closeSidebar}
                  className="header__link"
                >
                  {t("lessons")}
                </Link>
                <Link to="news" onClick={closeSidebar} className="header__link">
                  {t("news")}
                </Link>
                <Link
                  to="photo"
                  onClick={closeSidebar}
                  className="header__link"
                >
                  {t("foto")}
                </Link>
                <Link
                  to="connection"
                  onClick={closeSidebar}
                  className="header__link"
                >
                  {t("connection")}
                </Link>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
