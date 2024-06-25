import { useEffect, useState } from "react";
import { TodoProvider } from "/src/contexts/TodoContext";
import {TodoForm, TodoItem} from './components/index'
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updatedTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0)
      {
        setTodos(todos);
      }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])
  
  return (
    <TodoProvider
      value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}

            {todos.map((todo) => (
              <div key={todo.id}
              className="w-full"> 
              <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
        <h1 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 text-center font-bold">By <a href="https://github.com/TheChiragKaushik" target="_blank">Chirag Kaushik</a></h1>
      </div>
      
    </TodoProvider>
  );
}

export default App;
