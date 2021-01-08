

const TodoListItem = ({ id, desc, done , index, handleComplete, handleDelete}) => {
  return (
    <li
      key={ id }
      className="list-group-item"
    >
      <p
        className={ done ? 'complete' : '' }
        onClick={ () => handleComplete(id) }
      >{ index + 1 }. { desc }</p>
      <button
        className="btn btn-outline-danger"
        onClick={ () => handleDelete(id) }
      >Eliminar</button>
    </li>
  )
}

export default TodoListItem
