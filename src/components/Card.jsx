import { Link } from 'react-router-dom';

function Card({ data }) {
  return (
    <li className="Card">
      <Link to={ `accommodation/${ data.id }` }>
        <figure>
          <img src={ data.cover } alt={ data.title } />
          <figcaption className="overlay">{ data.title }</figcaption>
        </figure>
      </Link>
    </li>
  );
}

export default Card;
