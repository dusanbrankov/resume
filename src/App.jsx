import { useState, useContext } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './Header.jsx';
import lang from './locales/de/translation.json';
import { LanguageContext } from './LanguageContext.js';

function App() {
  const [count, setCount] = useState(0);
  const lang = useContext(LanguageContext);

  console.log(lang.section1);

  return <>
      <Header />
      <footer>Footer</footer>
  </>;
}

export default App;
