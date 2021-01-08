const initialState = [{
  id: 1,
  todo: 'Comprar comida para Purrumaw',
  done: false
}];

const todoReducer = (state = initialState, action) => {

  switch (action?.type) {
    case 'Agregar':
      return [...state, action.payload];
    default:
  }

}

let todos = todoReducer();
// No se puede usar todos.push()

const newTodo = {
  id: 2,
  todo: 'Do a flip',
  done: false
}

const action = {
  type: 'Agregar',
  payload: newTodo
}

todos = todoReducer(todos, action);

console.log(todos);