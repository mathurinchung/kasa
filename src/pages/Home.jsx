import data from '../__mocks__/accommodations.json';
import { Banner, Card } from '../components';
import '../css/Home.css'

function Home() {
  return (
    <div id="Home">
      <Banner>
        <p>Chez vous, partout et ailleurs</p>
      </Banner>
      <div className="accommodations">
        { data.map(({ id, cover, title }) => <Card key={ id } id={ id } cover={ cover } title={ title } />) }
      </div>
    </div>
  );
}

export default Home;
