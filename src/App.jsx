import { useTranslation } from 'react-i18next';

import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';

function App() {
  const { t } = useTranslation();

  return <>
    <div className="wrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  </>;
}

export default App;
