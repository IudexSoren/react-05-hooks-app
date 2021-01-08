import TodoListItem from "./TodoListItem"


const TodoList = ({ todos, handleComplete, handleDelete }) => {
  return (
    <ul className="list-group list-group-flush">
      {
        todos.map((todo, i) => {
          return (
            <TodoListItem
              key={ todo.id }
              {...todo}
              index={ i }
              handleComplete={ handleComplete }
              handleDelete={ handleDelete }
            />
          )
        })
      }
    </ul>
  )
}

export default TodoList
