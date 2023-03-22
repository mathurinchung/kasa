import { useState } from 'react';
import { Icon } from '../Assets';

function Slideshow({ pictures }) {
  const [ current, setCurrent ] = useState(0);
  const nextSlide = () => setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  const previousSlide = () => setCurrent(current === 0 ? pictures.length - 1 : current - 1);

  return (
    <div className="Slideshow">
      {
        (pictures.length === 1)
        ? <img src={ pictures[0] } alt="" />
        : <>
            {
              pictures.map((picture, index) => (
                <figure key={ index } className={`slide ${ index === current ? "active" : null }`}>
                  <img src={ picture } alt="" />
                  <figcaption className="numberText">{ index + 1 }/{ pictures.length }</figcaption>
                </figure>
              ))
            }
            <div className="arrow previous" onClick={ previousSlide }><Icon className="icon-arrow-left" /></div>
            <div className="arrow next" onClick={ nextSlide }><Icon className="icon-arrow-right" /></div>
          </>
      }
    </div>
  );
}

export default Slideshow;
