import { Link } from "react-router-dom";
import '../css/NotFound.css';

function NotFound() {
  return (
    <div id="NotFound">
      <p className="errorCode">404</p>
      <p className="errorMsg">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default NotFound;
