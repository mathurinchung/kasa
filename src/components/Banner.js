import '../css/Banner.css';

function Banner({ children }) {
  return (
    <div className="banner">
      <div className="layer">{ children }</div>
    </div>
  );
}

export default Banner;
