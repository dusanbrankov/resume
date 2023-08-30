import { useTranslation } from 'react-i18next';
import CVPdf from '/cv.pdf';

function DownloadButton() {
  const { t } = useTranslation();

  return (
    <a href={CVPdf} download className="pdf-dl-btn">
      <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(4 3)"><path d="m2.5 7.5 4 4.232 4-4.191"/><path d="m6.5.5v11"/><path d="m.5 14.5h12"/></g></svg>
      <span>{t('download_pdf')}</span>
    </a>
  )
}

export default DownloadButton;
