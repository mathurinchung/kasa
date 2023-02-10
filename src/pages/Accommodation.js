import { Navigate, useParams } from 'react-router-dom';
import data from '../__mocks__/accommodations.json';
import { Collapse } from '../components';
import '../css/Accommodation.css';

function Accommodation() {
  const params = useParams();
  const accommodation = data.find(host => host.id === params.id);

  if (!accommodation) return <Navigate to="/notfound" />

  return (
    <div id="Accommodation">
      <div className="carrousel"></div>
      <div className="information">
        <h2 className="title">{ accommodation.title }</h2>
        <div className="location">{ accommodation.location }</div>
        <h3 className="hostname">{ accommodation.host.name }</h3>
        <div className="profile"><img src={ accommodation.host.picture } alt={ accommodation.title } /></div>
        <ul className="tags">
          { accommodation.tags.map((tag, index) => <div className="tag" key={ index }>{ tag }</div>) }
        </ul>
        <div className="rating">{ accommodation.rating }</div>
      </div>
      <Collapse title="Description">
        <p>{ accommodation.description }</p>
      </Collapse>
      <Collapse title="Équipements">
        <ul>
          { accommodation.equipments.map((item, index) => <li key={ index }>{ item }</li>) }
        </ul>
      </Collapse>
    </div>
  );
}

export default Accommodation;
