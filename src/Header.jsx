import Language from './Language.jsx';

function Header() {
  return <>
    <header>
      <a href="#0" className="logo" aria-label="brand homepage">#brand</a>
      <nav aria-label="main">
        <button
          className="main-menu-toggle"
          aria-expanded="false"
          aria-controls="menu">
          Menu
        </button>
        <ul id="menu" className="main-menu" role="list">
          <li><a href="#0">Products</a></li>
          <li><a href="#0">Services</a></li>
          <li><a href="#0">Contact</a></li>
          <li><a href="#0">About</a></li>
        </ul>
        <Language />
      </nav>
    </header>
  </>;
}

export default Header;
