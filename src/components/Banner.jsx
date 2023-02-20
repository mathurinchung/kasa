function Banner({ text }) {
  return (
    <div className="banner">
      <div className="overlay"></div>
      { text ? <h2>{ text }</h2> : null }
    </div>
  );
}

export default Banner;
