import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'


const Todo = ()=>{
    const [inpu , setinput ] = useState('')
    const [items , setitems] = useState([])
    const [edit , setEdit]  = useState(null)

    const getinput =(e)=>{
        setinput(e.target.value)
        // console.log(inpu)

    }


    const additem = ( data, index )=>{
        if(edit !== null){
           items[edit] = inpu
           setitems([...items , inpu])
          
           setitems([...items])

            setEdit(null)
           
        }else{
            
        setitems([...items , inpu])
        setinput('')
        console.log('add wala chala')


        }
       
       }
    


    const getEdit = (index , data)=>{
        setEdit(index)
        console.log('edit wala chala')
        setinput(data)

    }

    return(
        <div> 
          
            <input type="text" placeholder='ToDo list' value={inpu} onChange={getinput} />
            <button onClick={additem}>{edit !== null ? 'getEdit' : 'additem'}</button>
            
            {items.map((data , index)=>{
                return(
                    <div  key={index}>
                    <span > {data}</span>
                    <button onClick={()=>{
                        items.splice(index ,1)
                        setitems([...items])
                    }}> Delete</button>
                    <button onClick={()=>getEdit(index , data )}>Edit</button>
                    </div>
                )

            })}
        </div>
    )
}

export default Todo