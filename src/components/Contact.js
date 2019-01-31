import React from 'react';

const Contact = (props) =>  {

  console.log(props);

  setTimeout(
    () =>{
      props.history.push('/about');
    },
    3000
  );
  
  return (
    <div className="container">
      <h1 className="center">Contact</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa incidunt sint fuga qui quos. Similique sit excepturi at maiores explicabo consectetur esse deleniti fuga eum rerum aut, ipsum cum quia?
        </p>
    </div>
  );
}

export default Contact;
