import { useState } from 'react';
import '../css/Collapse.css';

function Collapse({ title, children }) {
  const [ visible, setVisible ] = useState(false);

  return (
    <div className="Collapse">
      <div className="title" onClick={ () => setVisible(!visible) }>
        <h2>{ title }</h2>
        <div className="arrow">
          <i className={`icon-arrow-collapse ${ visible ? "expand" : "collapse" }`}></i>
        </div>
      </div>
      <div className={`content ${ visible ? "expand" : "collapse" }`}>
        { children }
      </div>
    </div>
  );
}

export default Collapse;
