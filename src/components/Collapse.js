import '../css/Collapse.css';

function Collapse({ title, children }) {
  return (
    <div className="Collapse">
      <div className="title">
        <h2>{ title }</h2>
        <div className="arrow">
          <span></span>
        </div>
      </div>
      <div className="content">
        { children }
      </div>
    </div>
  );
}

export default Collapse;
