import { Navigate, useParams } from 'react-router-dom';
import data from '../__mocks__/accommodations.json';
import { Collapse, Slideshow } from '../components';
import '../css/Accommodation.css';

function Accommodation() {
  const params = useParams();
  const accommodation = data.find(host => host.id === params.id);
  const stars = [ 1, 2, 3, 4, 5 ];

  if (!accommodation) return <Navigate to="/notfound" />

  return (
    <div id="Accommodation">
      <Slideshow>
        { <img src={ accommodation.pictures[0] } alt="" /> }
      </Slideshow>

      <div className="information">
        <h2 className="title">{ accommodation.title }</h2>
        <div className="location">{ accommodation.location }</div>
        <ul className="tags">
          { accommodation.tags.map((tag, index) => <div className="tag" key={ index }>{ tag }</div>) }
        </ul>

        <div className="host">
          <h3 className="hostname">{ accommodation.host.name.split(" ")[0] } <br /> { accommodation.host.name.split(" ")[1] }</h3>
          <div className="profile"><img src={ accommodation.host.picture } alt={ accommodation.title } /></div>
        </div>
        <div className="rating">
          { stars.map((star, index) => accommodation.rating >= star ? <i key={ index } className="icon-star red"></i> : <i key={ index } className="icon-star grey"></i>) }
        </div>
      </div>

      <Collapse title="Description">
        <p>{ accommodation.description }</p>
      </Collapse>
      <Collapse title="Équipements" >
        <ul>
          { accommodation.equipments.map((item, index) => <li key={ index }>{ item }</li>) }
        </ul>
      </Collapse>
    </div>
  );
}

export default Accommodation;
