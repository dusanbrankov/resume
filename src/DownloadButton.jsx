import { useTranslation } from "react-i18next";
import generatePDF, { Margin } from "react-to-pdf";

function DownloadButton() {
  const { t } = useTranslation();

  const options = {
    page: {
      margin: Margin.LARGE,
    },
    filename: "Dusan-Brankov_Curriculum-Vitae.pdf",
  };

  const getTargetElement = () => document.querySelector(".cv-container");
  const downloadPDF = () => generatePDF(getTargetElement, options);

  return (
    <button className="pdf-dl-btn" onClick={downloadPDF}>
      <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(4 3)"><path d="m2.5 7.5 4 4.232 4-4.191"/><path d="m6.5.5v11"/><path d="m.5 14.5h12"/></g></svg>
      <span>{t("download_pdf")}</span>
    </button>
  )
}

export default DownloadButton;
