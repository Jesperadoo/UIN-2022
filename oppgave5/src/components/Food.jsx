import React from 'react';

const Food = () => {
  const foods = ['Pizza', 'Hamburger', 'Coke'];
  return (
    <ul>
      {foods.map((food, index) => (
        <li key={index}> {food} </li>
      ))}
    </ul>
  );
};

export default Food;
