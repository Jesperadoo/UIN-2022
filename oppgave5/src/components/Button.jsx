import React from 'react';

const Button = (props) => {
  const clickedFunction = () => {
    alert(props.data);
  };

  return <button onClick={clickedFunction}> {props.title} </button>;
};

export default Button;
