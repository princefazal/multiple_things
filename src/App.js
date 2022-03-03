import logo from './logo.svg';
import Todo from './components/todolist'
import Todo_lc from './components/to_do_with_l.c'
import './App.css';
import Currency_exchanger from './components/currency';
import Reactquiz from './components/reactquiz';
import Home from './components/home'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo-lc" element={<Todo_lc />} />
        <Route path="currency" element={<Currency_exchanger />} />
        <Route path="todo" element={<Todo />} />
        <Route path="quiz" element={< Reactquiz/>} />
      </Routes>
    </div>
  );
}

export default App;
