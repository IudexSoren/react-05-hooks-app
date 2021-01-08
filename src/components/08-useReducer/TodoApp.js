import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

import './styles.css';


const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = ( todoId ) => {
    const action = {
      type: 'delete',
      payload: todoId
    }
    dispatch(action);
  }

  const handleComplete = (todoId) => {
    const action = {
      type: 'complete',
      payload: todoId
    }
    dispatch(action);
  }

  const handleAddTodo = (newTodo) => {
    const action = {
      type: 'add',
      payload: newTodo
    }
    dispatch(action);
  }

  return (
    <div>
      <h1>TodoApp ({ todos.filter(t => !t.done).length } pendientes)</h1>
      <hr/>
      <div className="row">
        <div className="col-4">
          <TodoAdd
            handleAddTodo={ handleAddTodo }
          />
        </div>
        <div className="col-8">
          Todos
          <TodoList
            todos={ todos }
            handleComplete={ handleComplete }
            handleDelete={ handleDelete }
          />
        </div>
      </div>
    </div>
  )
}

export default TodoApp
