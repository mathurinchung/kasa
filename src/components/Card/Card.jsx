import { Link } from 'react-router-dom';
import { Figure } from '../Assets';

function Card({ data }) {
  return (
    <li className="Card">
      <Link to={ `accommodation/${ data.id }` }>
        <Figure src={ data.cover } alt={ data.title } caption={ data.title } />
      </Link>
    </li>
  );
}

export default Card;
