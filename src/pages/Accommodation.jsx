import { Navigate, useParams } from 'react-router-dom';
import { Main, Dropdown, Slideshow, Information } from '../components';
import data from '../data/accommodations.json';

function Accommodation() {
  const params = useParams();
  const accommodation = data.find(host => host.id === params.id);

  if (!accommodation) return <Navigate to="/notfound" />

  return (
    <Main className="Accommodation">
      <Slideshow pictures={ accommodation.pictures } />

      <Information data={ accommodation } />

      <Dropdown title="Description" content={ accommodation.description } />
      <Dropdown title="Équipements" content={ accommodation.equipments } />
    </Main>
  );
}

export default Accommodation;
