function Banner({ text }) {
  return (
    <div className="banner">
      { text && <h2>{ text }</h2> }
    </div>
  );
}

export default Banner;
