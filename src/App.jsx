import { useTranslation } from 'react-i18next';

import Header from './Header.jsx';

function App() {
  const { t } = useTranslation();

  return <>
    <p>{t('section1')}</p> 
    <Header />
    <footer>Footer</footer>
  </>;
}

export default App;
