import data from '../__mocks__/accommodations.json';
import Banner from '../components/Banner';
import Card from '../components/Card';
import '../css/Home.css'

function Home() {
  return (
    <div id="Home">
      <Banner>
        <p>Chez vous partout et ailleurs</p>
      </Banner>
      <div className="accommodations">
        { data.map(({ id, cover, title }) => <Card key={ id } id={ id } cover={ cover } title={ title } />) }
      </div>
    </div>
  );
}

export default Home;
