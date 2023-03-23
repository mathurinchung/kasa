import { Icon } from '../Assets';

function Rating({ data }) {
  const stars = [ 1, 2, 3, 4, 5 ];

  return (
    <div className="rating">
      { stars.map((star, index) => <Icon key={ index } className={`icon-star ${ data.rating >= star ? "red" : "grey" }`} />) }
    </div>
  );
}

export default Rating;
