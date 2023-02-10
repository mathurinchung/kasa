import { Link } from 'react-router-dom';
import '../css/Card.css'

function Card({ id, cover, title }) {
  return (
    <div className="Card">
      <Link to={ `accommodation/${id}` }>
        <img src={ cover } alt={ title } />
        <div className="overlay">
          <p>{ title }</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;