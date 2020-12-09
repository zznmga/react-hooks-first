import { useEffect, useState, useContext } from 'react';
import React from 'react';
import './App.css';
import { TodoList } from './TodoList';

function App() {
  const [todoTitle, setTodoTitle] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'React',
      completed: false,
    },
    {
      id: 2,
      title: 'Angular',
      completed: true,
    },
  ]);

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

  return (
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
  );
}

export default App;
