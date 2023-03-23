function Host({ data }) {
  return (
    <div className="host">
      <h3 className="hostname">{ data.host.name }</h3>
      <div className="profile">
        <img src={ data.host.picture } alt={ data.title } />
      </div>
    </div>
  );
}

export default Host;
