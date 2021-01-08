import { useForm } from '../../hooks/useForm';

const TodoAdd = ({ handleAddTodo }) => {

  const [{ description }, handleInputChange, reset] = useForm({
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }
    handleAddTodo(newTodo);
    reset();
  }

  return (
    <>
      <h4>Agregar ToDo</h4>
      <hr/>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          className="form-control mb-3"
          name="description"
          value={ description }
          onChange={ handleInputChange }
          placeholder="Descripción"
          autoComplete="off"
        />
        <div className="d-grid gap-2">
          <button
            className="btn btn-outline-success"
            type="submit"
          >Agregar</button>
        </div>
      </form>
    </>
  )
}

export default TodoAdd
