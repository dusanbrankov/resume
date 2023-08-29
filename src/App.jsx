import { useTranslation } from 'react-i18next';

import Header from './Header.jsx';
import Main from './Main.jsx';

function App() {
  const { t } = useTranslation();

  return <>
    <p>{t('section1')}</p> 
    <Header />
    <Main />
    <footer>Footer</footer>
  </>;
}

export default App;
