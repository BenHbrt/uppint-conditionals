import './App.scss';
import { useState } from 'react';

import Quiz from './components/quiz/Quiz'
import Reference from './components/reference/Reference'
import Credits from './components/credits/Credits'
import Button from './components/Button';

function App() {

  const [display, setDisplay] = useState('Quiz')

  return (
    <div className="App">
      <div className='App_title'>
        <h1>Conditionals</h1>
        <div className='App_title_buttons'>
          <Button name="Quiz" display={display} func={() => setDisplay("Quiz")} />
          <Button name="Reference" display={display} func={() => setDisplay("Reference")} />
          <Button name="Credits" display={display} func={() => setDisplay("Credits")} />
        </div>
      </div>
      <div className="App_container">
        {display === "Quiz" && <Quiz />}
        {display === "Reference" && <Reference />}
        {display === "Credits" && <Credits />}
      </div>
    </div>
  );
}

export default App;
