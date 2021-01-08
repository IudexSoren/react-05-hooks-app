import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { initialState, newTodo } from '../../fixtures/demoTodos';


describe('Pruebas de todoReducer', () => {

  test('Debe retornar el estado por defecto', () => {
    const state = todoReducer(initialState, {});

    expect(state).toEqual(initialState);
  });

  test('Debe agregar un todo', () => {
    const action = {
      type: 'add',
      payload: newTodo
    }
    const state = todoReducer(initialState, action);

    expect(state.find(t => t.id === newTodo.id)).toEqual(newTodo);
    expect(state).toEqual([...initialState, newTodo]);
  });

  test('Debe eliminar un todo', () => {
    const action = {
      type: 'delete',
      payload: 1
    }
    const state = todoReducer(initialState, action);

    expect(state.find(t => t.id === 1)).toBeUndefined();
  })

  test('Debe hacer el toggle del todo', () => {
    const action = {
      type: 'complete',
      payload: 1
    }
    const state = todoReducer(initialState, action);

    expect(state.find(t => t.id === 1).done).toBeTruthy();
  });

})
