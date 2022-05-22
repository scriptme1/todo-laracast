import React, { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

function CompleteAllTodos() {
  const { todos, setTodos } = useContext(TodosContext);

  const completeAllTodos = () => {
    const updatedTodos = todos.map(todo => {
      todo.isComplete = true;

      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <button className="button" onClick={completeAllTodos}>
        Check All
      </button>
    </div>
  );
}

export default CompleteAllTodos;
