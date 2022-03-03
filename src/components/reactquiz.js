import React, { useState } from "react";
import { Link } from 'react-router-dom'



const Reactquiz = ()=>{

    const question = [
       {
            questiontext : 'java and java script is same',
            answeroption : [
                { option1 : 'yes' , correct : false},
                { option1 : 'no', correct : true },
                { option1 : 'yes'  , correct : false},
                { option1 : 'yes' ,  correct : false},
            ] 
        },

        {
            questiontext : 'What the capital of pakistan',
            answeroption : [
                { option1 : 'karachi' ,  correct : false},
                { option1 : 'islamabad' ,  correct : true},
                { option1 : 'sindh' ,  correct : false},
                { option1 : 'panjab' ,  correct : false},
            ] 
        },

        {
            questiontext : 'what the capital of  india ',
            answeroption : [
                { option1 : 'dehli' ,  correct : true},
                { option1 : 'heydrabad' ,  correct : false},
                { option1 : 'lakhnao' ,  correct : false},
                { option1 : 'channai' ,  correct : false},
            ] 
        },

        {
            questiontext : 'java script is case sensitive',
            answeroption : [
                { option1 : 'yes' ,  correct : false},
                { option1 : 'no' ,  correct : true},
            ] 
        },
        
        

        {
            questiontext : 'cli stand for ',
            answeroption : [
                { option1 : 'command line inter face' ,  correct : true},
                { option1 : 'command line interval' ,  correct : false},
                { option1 : 'capital line inter face' ,  correct : false},
                { option1 : 'command leaving inter face' ,  correct : false},
            ] 
        },
        
    ]


    const  [currentquestion , setcurrentquestion] = useState(0)
    const [score , setscore] = useState(0)
    const [showscore , setshowscore]= useState(false)


    const handleanswer =(correct)=>{
        if(correct){
            setscore(score + 1)
        }
        
		const nextQuestion = currentquestion + 1;
		if (nextQuestion < question.length) {
			setcurrentquestion(nextQuestion);
		} else {
			setshowscore(true);
		}
    }


    return(
        <div className='app'>
       
            {showscore ? (
            <div> your {score} of {question.length} </div>
        ):(
            <>
            <div className="questions">
                <span>{currentquestion +1}/ {question.length}</span>
                <br />
                <br />
                {question[currentquestion].questiontext}
            </div>
            <div className="answers">
                {
            
                    question[currentquestion].answeroption.map((answeroption , index)=>{

                        return(
                            <div key={index}> 
                            <button onClick={()=>handleanswer(answeroption.correct)}> {answeroption.option1}</button>
                              
                            </div>
                        )
                    })
                }
                 
            </div>
            
            </>
            
        )}

        </div>


    );


}

export default Reactquiz;