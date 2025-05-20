import React, { useContext } from "react";
import { LangContext } from "../context/languageConext";
import { translateDate } from "../utils/transletData";

function useLanguage() {
  const { language } = useContext(LangContext);

  const res = (key) => {
    return translateDate[key][language];
  };
  return { t: res };
}

export default useLanguage;
