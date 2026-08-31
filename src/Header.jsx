import reactLogo from './assets/react.svg'

function Header() {
  return (
    <header className="main-header">
      <div className="header-logo">
        <img src={reactLogo} alt="Logo" className="logo-img" />
        <span className="logo-text">GitProj</span>
      </div>
      <nav className="header-nav">
        <a href="#center">Home</a>
        <a href="#docs">Docs</a>
        <a href="#social">Community</a>
      </nav>
      <div className="header-actions">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="header-btn"
        >
          GitHub
        </a>
      </div>
    </header>
  )
}

export default Header

