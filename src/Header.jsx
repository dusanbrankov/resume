import Language from './Language.jsx';

function Header() {
  return <>
    <header className='site-header'>
      <p className="logo" aria-label="Dusan Brankov homepage">Dusan Brankov</p>
      <Language />
    </header>
  </>;
}

export default Header;
