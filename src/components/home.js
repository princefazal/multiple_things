import React from 'react'
import { Link } from 'react-router-dom'

const Home = ()=>{
    return(
            <>
                 <h1> Hello this Web page have multipule script and you where you want to go </h1>

                 <Link to="quiz"><button> Quiz </button></Link>
                 <Link to="currency"><button> Currency Exchanger </button></Link>
                 <Link to="todo-lc"><button> ToDo list with local storage </button></Link>
                 <Link to="todo"><button> Simple ToDo list </button></Link>



            </>
    )
}

export default Home
