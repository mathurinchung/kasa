import { Main, Banner, Dropdown } from '../components';
import about from '../data/about.json';

function About() {
  return (
    <Main className="About">
      <Banner />

      { about.map((section, index) => <Dropdown key={ index } title={ section.title } content={ section.content } />) }
    </Main>
  );
}

export default About;
