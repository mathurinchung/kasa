import { useState } from 'react';
import '../css/Slideshow.css';

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
                <div key={ index } className={`slide ${ index === current ? "active" : null}`}>
                  <img src={ picture } alt="" />
                  <p className="numberText">{ index + 1 }/{ pictures.length }</p>
                </div>
              ))
            }
            <div className="arrow previous" onClick={ previousSlide }><i className="icon-arrow-left"></i></div>
            <div className="arrow next" onClick={ nextSlide }><i className="icon-arrow-right"></i></div>
          </>
      }

    </div>
  );
}

export default Slideshow;
