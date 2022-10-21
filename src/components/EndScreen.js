import React,{useContext} from "react";
import { QuizContext } from "../helpers/Context";
import { Button } from '@chakra-ui/react'


function EndScreen() {

    const {setGameState,score} = useContext(QuizContext);

    const Restart = () =>{
        setGameState("startGame")
    }


    return(
        <div>
             <p>Your score is: {score}</p>
             <Button onClick={Restart} colorScheme='teal' variant='outline'>Restart Quiz</Button>
        </div>
       

    )

    

    

    
    }


export default EndScreen;