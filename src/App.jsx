import { Route, Routes } from "react-router-dom";
// import { createI18n, I18nProvider, useI18n } from "react-simple-i18n";
import Footer from "./components/footer";
import Header from "./components/header";
import { routes } from "./constants/routes";
import { useContext, useEffect, useState } from "react";
import { LangContext } from "./context/languageConext";

// import 'antd/dist/antd.css';

function App() {
  // const [langData, setLangData] = useState({});

  // const getLangData = async () => {
  //   const data = localStorage.getItem("langData");
  //   if (!data) {
  //     await fetchCurrentLang();
  //   }
  // };

  // const fetchCurrentLang = async () => {
  //   let lang = localStorage.getItem("lang");
  //   if (!lang) {
  //     localStorage.setItem("lang", "uz");
  // }
  // const response = await fetch(`http://localhost:3003/lang/`);

  // const data = await response.json();
  // localStorage.setItem("langData", JSON.stringify(data));
  // setLangData({
  //   ...data,
  // });
  // };

  // useEffect(() => {
  //   getLangData();
  // }, []);

  const { language } = useContext(LangContext);
  // useEffect(() => {} , [language])

  return (
    <>
      <Header />
      <main>
        <Routes key="id">
          {routes.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={item.element}
              id={item.id || index}
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
