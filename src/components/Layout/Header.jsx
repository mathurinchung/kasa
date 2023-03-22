import { NavLink } from 'react-router-dom';
import { Icon } from '../Assets';

function Header() {
  return (
    <header id="Header">
      <Icon className="icon-logo" />

      <nav>
        <ul>
          <li><NavLink className="navlink" to="/">Accueil</NavLink></li>
          <li><NavLink className="navlink" to="/about">A Propos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
