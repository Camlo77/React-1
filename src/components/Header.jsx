import './Header.css'

function Header() {
  return (
    <header className="header-zelda">
      <img src='../src/assets/headerzelda3.jpg' alt="Header Zelda" className="header-img" />
      <div className="header-over">
        <h1>Bienvenido a la Zelda Store</h1>
        <p>Un lugar kokiri mágico</p>
      </div>
    </header>
  );
}

export default Header