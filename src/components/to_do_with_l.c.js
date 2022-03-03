import React from 'react'
import {useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'


const Todo_lc = ()=>{
    const [input , setinput] = useState()
    const [items , seitems] = useState([])
    const [edit , setedit] = useState(null)

    useEffect(()=>{
        let items = localStorage.getItem('todo_list' ,)
        items = JSON.parse(items)
        // seitems(items)
    }, [input])
    



    const onchangefield = (e)=> setinput(e.target.value)
    const additem =()=>{


        if(edit !== null){
             items[edit] = input
             seitems([...items ,input])
             
             seitems([...items])
             localStorage.setItem('todo_list' , JSON.stringify(items))

             setedit(null)
        }else{
            if(items){
                items.push(input)
            }else{
                seitems([...items , input])
                
            }
               
               localStorage.setItem('todo_list', JSON.stringify(items))
               
               
        }
        setinput('')
    } 


    const deleteitems = (index)=>{
        items.splice(index,1)
        seitems([...items])
        localStorage.setItem('todo_list', JSON.stringify(items))

    }

    const edititem = (data , index)=>{
      setedit(index)
      setinput(items[index])
    }

    return(
        <div>
            <h1> hello from todo list with local storage </h1>
            
            <input type="text"value={input} placeholder='Todo list' onChange={onchangefield}  />
            <button onClick={additem}>{edit !== null ? 'Edit' : 'Add'}</button>

                <div>
                    <ul>
                    {
                            items.map((data , index)=>{
                                return(
                                    
                                            <li key={index}>
                                                {data}
                                                <button onClick={()=>deleteitems(index)}> Delete</button>
                                                <button onClick={()=>edititem(data ,index)}>Edit</button>
                                            </li>
                
                                )

                            })
                        }
                    </ul>
                        
                </div>



        </div>
    )

}


export default Todo_lc