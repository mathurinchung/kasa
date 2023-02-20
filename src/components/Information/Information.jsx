import Tags from "./Tags";
import Host from "./Host";
import Rating from "./Rating";

function Information({ data }) {
  return (
    <div className="information">
      <h2 className="title">{ data.title }</h2>
      <div className="location">{ data.location }</div>

      <Tags data={ data } />

      <Host data={ data } />

      <Rating data={ data } />
    </div>
  );
}

export default Information;
