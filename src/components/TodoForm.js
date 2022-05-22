import React, { useContext, useState } from 'react';
import { TodosContext } from '../context/TodosContext';

function TodoForm() {
  const { todos, setTodos, todoId, setTodoId } = useContext(TodosContext);
  const [todoInput, setTodoInput] = useState('');

  const handleInput = event => {
    setTodoInput(event.target.value);
  };

  const addTodo = event => {
    event.preventDefault();

    if (todoInput.trim().length === 0) {
      return;
    }
    setTodos([
      ...todos,
      {
        id: todoId,
        title: todoInput,
        isComplete: false,
      },
    ]);

    setTodoId(prevTodoId => prevTodoId + 1);

    setTodoInput('');
  };

  return (
    <form action="#" onSubmit={addTodo}>
      <input
        type="text"
        value={todoInput}
        onChange={handleInput}
        className="todo-input"
        placeholder="What do you need to do?"
      />
    </form>
  );
}

export default TodoForm;
