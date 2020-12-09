import { useEffect, useState, useContext } from 'react';
import React from 'react';
import './App.css';
import { TodoList } from './TodoList';
import { Context } from './context';

function App() {
  const [todoTitle, setTodoTitle] = useState('');
  const [todos, setTodos] = useState([]);

  const handlerClick = () => console.log('click');

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handlerChangeInput = (event) => {
    setTodoTitle(event.target.value);
  };

  const handlerKey = (event) => {
    if (event.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: true,
        },
      ]);

      setTodoTitle('');
    }
  };

  const removeItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleItem = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <Context.Provider
      value={{
        removeItem,
        toggleItem,
      }}
    >
      <div className="row">
        <div className="row">
          <div className="input-field col s3">
            <input
              placeholder="Placeholder"
              id="first_name"
              type="text"
              value={todoTitle}
              className="validate"
              onChange={handlerChangeInput}
              onKeyPress={handlerKey}
            />
          </div>
        </div>
        <TodoList todos={todos} />
        <div id="history"></div>
      </div>
    </Context.Provider>
  );
}

export default App;
