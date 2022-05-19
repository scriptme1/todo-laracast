import { useState } from 'react';
import '../reset.css';
import '../App.css';
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Finish Laravel Series',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 3,
      title: 'Get a Job or Make a Business',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 4,
      title: 'Practice coding',
      isComplete: true,
      isEditing: false,
    },
  ]);

  // const [todoInput, setTodoInput] = useState('');
  const [todoId, setTodoId] = useState(5);

  const addTodo = todo => {
    setTodos([
      ...todos,
      {
        id: todoId,
        title: todo,
        isComplete: false,
      },
    ]);

    setTodoId(prevtodoId => prevtodoId + 1);
  };

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

  const cancelEdit = id => {
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
  // const handleInput = event => {
  //   setTodoInput(event.target.value);
  // };

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo} />
        {todos.length > 0 ? (
          <TodoList
            todos={todos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            editingTodo={editingTodo}
            cancelEdit={cancelEdit}
            updateTodo={updateTodo}
          />
        ) : (
          <NoTodos />
        )}
      </div>
    </div>
  );
}

export default App;
