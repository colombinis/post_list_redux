import React from 'react';
import Colores from './hoc/Colores';

const About = (props) =>  {
  
  return (
    <div className="container">
      <h1 className="center">About</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa incidunt sint fuga qui quos. Similique sit excepturi at maiores explicabo consectetur esse deleniti fuga eum rerum aut, ipsum cum quia?
        </p>
    </div>
  );
}

export default Colores(About);
