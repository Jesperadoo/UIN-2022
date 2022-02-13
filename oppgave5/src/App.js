//Har jobbet og samarbeidet med Sindre Gundersen gjennom denne oppgaven.

import { useState } from 'react';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Food from './components/Food';
import Alert from './components/Alert';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [isClicked, setClicked] = useState(false);

  return (
    <Wrapper>
      <Title title="It works!" />
      <Food />
      <Alert changeInputValue={setInputValue} changeClicked={setClicked} />
      {isClicked ? <p> {inputValue} </p> : null}
    </Wrapper>
  );
};

export default App;
