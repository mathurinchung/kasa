import { Icon } from '../Assets';

function Rating({ data }) {
  const stars = [ 1, 2, 3, 4, 5 ];

  return (
    <div className="rating">
      { stars.map((star, index) => data.rating >= star ? <Icon key={ index } className="icon-star red" /> : <Icon key={ index } className="icon-star grey" />) }
    </div>
  );
}

export default Rating;
