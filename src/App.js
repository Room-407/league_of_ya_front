import './App.css';
import React, { useEffect, useState } from 'react';
import useBackground from './hooks/useBackground';
import useGame from './hooks/useGame';
import Input from './components/input';

const App = () => {
  const setBackground = useBackground();
  const [hasText, setHasText] = useState(false);
  const [input, setInput] = useState('');
  const [championList, setChampionList] = useState([]);
  const { answer, error, count, getSimilarChampionList, tryAnswer } = useGame();

  useEffect(() => {
    if (input === '')
      setHasText(true);
  }, [input]);

  const changeInputHandler = async ({ target: { value } }) => {
    setInput(value);
    setHasText(true);
  }

  // useEffect(() => {
  //   setBackground(); 
  // }, [])

  return (
    <div className="App">
      <Input count={count} handler={changeInputHandler} list={championList} />
    </div>
  );
}

export default App;
