import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'


const Currency_exchanger = ()=>{

    const [input , setinput] = useState('')
    const [exdollar , setexdollar] = useState('')
    const [exriyal , setexriyal] = useState('')




    const getinput =(e)=> setinput(e.target.value);
    const usDollar =()=>{
         let dol =  input / 180
         setexdollar(dol)

    }

    const Saudiriyal = ()=>{
        let riy = input / 70
        setexriyal(riy)

    }

    return(
         <div>

                
             <h1> hello from Currency_exchanger</h1>
             <input type="number" placeholder="Type reppes" value={input} onChange={getinput}/>
             <button onClick={usDollar}>Exchange TO US Dollar</button>
             <button onClick={Saudiriyal}>Exchange To Saudi Riyal</button>
             <div>
                 <span>Exchange Dollar {exdollar}</span>
                 <br />
                 <span> Exchange RIyal {exriyal}</span>

             </div>
         </div>
    )
}

export default Currency_exchanger