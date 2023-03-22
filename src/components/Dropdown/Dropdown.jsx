import { useState } from 'react';
import { Icon } from '../Assets';

function Dropdown({ title, content }) {
  const [ visible, setVisible ] = useState(false);

  return (
    <div className={`Dropdown ${ visible ? "expand" : "collapse" }`}>
      <div className="title" onClick={ () => setVisible(!visible) }>
        <h3>{ title }</h3>
        <Icon className="icon-arrow-dropdown" />
      </div>
      <div className="content">
        {
          Array.isArray(content)
          ? <ul>{ content.map((item, index) => <li key={ index }>{ item }</li>) }</ul>
          : <p>{ content }</p>
        }
      </div>
    </div>
  );
}

export default Dropdown;
