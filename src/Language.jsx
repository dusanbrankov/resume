import React from "react";
import { useTranslation } from 'react-i18next';

function Language() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={handleLanguageChange}>
      <option lang="en" value="en">English</option>
      <option lang="de" value="de">Deutsch</option>
    </select>
  );
}

export default Language
