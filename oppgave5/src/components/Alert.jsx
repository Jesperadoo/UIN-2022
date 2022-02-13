import React, { useState } from 'react';

const Alert = (props) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
    props.changeInputValue(e.target.value);
    props.changeClicked(false);
  };

  const handleClick = () => {
    props.changeClicked(true);
    alert(text);
  };
  return (
    <>
      <input
        type="text"
        id="inputField"
        name="inputField"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Vis tekst</button>
    </>
  );
};

export default Alert;
