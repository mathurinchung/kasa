import { Figure } from "../Assets";

function Host({ data }) {
  return (
    <Figure className="host" src={ data.host.picture } alt={ data.title } caption={ data.host.name } />
  );
}

export default Host;
