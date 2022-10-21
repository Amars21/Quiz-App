import { useState } from 'react';
import './App.css';
import StartScreen from "../src/components/StartScreen";
import Quiz from "../src/components/Quiz";
import EndScreen from "../src/components/EndScreen";
import {QuizContext} from "../src/helpers/Context";
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  const [gameState, setGameState]= useState("startGame");
  const [score, setScore]= useState(0);


  return (
    <ChakraProvider>

      <div className="App">

        <h1>Quiz app</h1>

        <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
        {gameState==="startGame" && <StartScreen/>}
        {gameState==="quiz" && <Quiz/>}
        {gameState==="endGame" && <EndScreen/>}
        </QuizContext.Provider>  

      </div>

    </ChakraProvider>
    
  );
}

export default App;
