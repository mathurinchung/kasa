import { NavLink } from 'react-router-dom';
import '../../css/Header.css';

function Header() {
  const activeStyle = "isActive";

  return (
    <header id="Header">
      <i className="icon-logo red"></i>

      <nav>
        <ul>
          <li><NavLink className="navlink" to="/">{({ isActive }) => <span className={isActive ? activeStyle : undefined}>Accueil</span>}</NavLink></li>
          <li><NavLink className="navlink" to="/about">{({ isActive }) => <span className={isActive ? activeStyle : undefined}>A Propos</span>}</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
