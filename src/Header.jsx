import Language from './Language.jsx';

function Header() {
  return <>
    <header className='site-header'>
      <a href="/" className="logo" aria-label="Dusan Brankov homepage">Dusan Brankov</a>
      <Language />
    </header>
  </>;
}

export default Header;
