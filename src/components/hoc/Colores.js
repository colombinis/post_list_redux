import React from 'react';

const Colores = (WrappedComponent) =>  {

  const colors = ['red','pink','orange','blue','green','yellow'];
  const rc = colors[ Math.floor(Math.random() * 5) ] ;
  const className = rc +'-text';

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    )
  };
}

export default Colores;
