import React, { useContext } from 'react';
import TodoItemsRemaining from './TodoItemsRemaining';
import ClearComplete from './ClearComplete';
import CompleteAllTodos from './CompleteAllTodos';

import TodoFilters from './TodoFilters';
import useToggle from '../hooks/useToggle';
import { TodosContext } from '../context/TodosContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function TodoList() {
  const { todos, setTodos, todosFiltered } = useContext(TodosContext);
  const [isFeaturesOneVisible, setFeaturesOneVisible] = useToggle();
  const [isFeaturesTwoVisible, setFeaturesTwoVisible] = useToggle();

  const deleteTodo = id => {
    setTodos([...todos].filter(todo => todo.id !== id)); //copies the original todo array then filters
    //it so that it returns only the todos which have the id not equal to the id passed
  };

  const completeTodo = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const editingTodo = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isEditing = true;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const cancelEdit = (event, id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isEditing = false;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (event, id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        if (event.target.value.trim().length === 0) {
          todo.isEditing = false;
          return todo;
        }
        todo.title = event.target.value;
        todo.isEditing = false;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <TransitionGroup component="ul" className="todo-list">
        {todosFiltered().map((todo, index) => (
          <CSSTransition
            key={todo.id}
            timeout={500}
            classNames="slide-horizontal"
          >
            <li className="todo-item-container">
              <div className="todo-item">
                <input
                  type="checkbox"
                  onChange={() => completeTodo(todo.id)}
                  checked={todo.isComplete ? true : false}
                />
                {!todo.isEditing ? (
                  <span
                    onDoubleClick={() => editingTodo(todo.id)}
                    className={`todo-item-label ${
                      todo.isComplete ? 'line-through' : ''
                    }`}
                  >
                    {todo.title}
                  </span>
                ) : (
                  <input
                    type="text"
                    onBlur={event => updateTodo(event, todo.id)}
                    onKeyDown={event => {
                      if (event.key === 'Enter') {
                        updateTodo(event, todo.id);
                      } else if (event.key === 'Escape') {
                        cancelEdit(event, todo.id);
                      }
                    }}
                    className="todo-item-input"
                    defaultValue={todo.title}
                    autoFocus
                  />
                )}
              </div>
              <button onClick={() => deleteTodo(todo.id)} className="x-button">
                <svg
                  className="x-button-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>

      <div className="toggles-container">
        <button onClick={setFeaturesOneVisible} className="button">
          Features One Toggle
        </button>
        <button onClick={setFeaturesTwoVisible} className="button">
          Features Two Toggle
        </button>
      </div>

      <CSSTransition
        in={isFeaturesOneVisible}
        timeout={500}
        classNames="slide"
        unmountOnExit
      >
        <div className="check-all-container">
          <CompleteAllTodos />

          <TodoItemsRemaining />
        </div>
      </CSSTransition>

      <CSSTransition
        in={isFeaturesTwoVisible}
        timeout={500}
        classNames="slide"
        unmountOnExit
      >
        <div className="other-buttons-container">
          <TodoFilters />
          <div>
            <ClearComplete />
          </div>
        </div>
      </CSSTransition>
    </>
  );
}

export default TodoList;
