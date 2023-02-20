import { Main, Banner, Card } from '../components';
import data from '../__mocks__/accommodations.json';

function Home() {
  return (
    <Main className="Home">
      <Banner text="Chez vous, partout et ailleurs" />

      <ul className="accommodations">
        { data.map(item => <Card key={ item.id } data={ item } />) }
      </ul>
    </Main>
  );
}

export default Home;
