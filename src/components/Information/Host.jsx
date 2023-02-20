function Host({ data }) {
  return (
    <div className="host">
      <h3 className="hostname">
        { data.host.name.split(" ")[0] } <br />
        { data.host.name.split(" ")[1] }
      </h3>
      <div className="profile">
        <img src={ data.host.picture } alt={ data.title } />
      </div>
    </div>
  );
}

export default Host;
