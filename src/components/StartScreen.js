import React,{useContext} from "react";
import { QuizContext } from "../helpers/Context";
import { Button } from '@chakra-ui/react'

function StartScreen() {

    const {setGameState} = useContext(QuizContext);

    

    return(

        <Button marginTop='100px' onClick={() => {setGameState("quiz")}} colorScheme='teal' variant='outline'>
        Start Quiz
      </Button>
        

    );

    
    }


export default StartScreen;