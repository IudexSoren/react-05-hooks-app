import { shallow, mount } from 'enzyme';
import { act } from '@testing-library/react';
import TodoApp from '../../../components/08-useReducer/TodoApp';
import { initialState } from '../../fixtures/demoTodos';

describe('Pruebas de TodoApp', () => {

  const wrapper = shallow(<TodoApp />);
  Storage.prototype.setItem = jest.fn();

  test('Debe renderizar correctamente el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe agregar un Todo', () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(initialState[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(initialState[1]);
    });

    expect(wrapper.find('h1').text()).toBe('TodoApp (2 pendientes)');
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test('Debe eliminar un Todo', () => {
    wrapper.find('TodoAdd').prop('handleAddTodo')(initialState[0]);
    wrapper.find('TodoList').prop('handleDelete')(initialState[0].id);

    expect(wrapper.find('h1').text()).toBe('TodoApp (0 pendientes)');
  });


})
