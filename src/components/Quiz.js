import React, { useContext, useState } from "react";
import { questions } from "../helpers/Questions";
import { QuizContext } from "../helpers/Context";
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'



function Quiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answer, setAnswer] = useState("");
    const {setGameState, score, setScore} = useContext(QuizContext); 

    const nextQuestion = () =>{
        if(answer===questions[currentQuestion].answer){
            setScore(score+1)
        }
        setCurrentQuestion(currentQuestion+1);
    }

   

    return(
<Stack direction='column'>
        <div>

            <p>{questions[currentQuestion].question}</p>

            <div>
            
  
    <ButtonGroup gap='4'>

      <Button marginTop='10px' onClick={()=>{setAnswer("optionA")}} colorScheme='teal'>{questions[currentQuestion].optionA}</Button>
      <Button marginTop='10px' onClick={()=>{setAnswer("optionB")}} colorScheme='teal'>{questions[currentQuestion].optionB}</Button>
      <Button marginTop='10px' onClick={()=>{setAnswer("optionC")}} colorScheme='teal'>{questions[currentQuestion].optionC}</Button>

    </ButtonGroup>
            </div>

            {currentQuestion===questions.length-1 ? (
                
                <Button marginTop='10px' onClick={() => {setGameState("endGame"); if(answer===questions[currentQuestion].answer){
                    setScore(score+1)
                }}} colorScheme='teal'variant='outline' size='md'>
                Finish Quiz
              </Button>                
                
            ) : (
                <Button marginTop='10px' onClick={nextQuestion} colorScheme='teal' variant='outline' size='md'> Next Question</Button>
            )}
           


        </div>
        </Stack>
        
    )

    


    
    }


export default Quiz;