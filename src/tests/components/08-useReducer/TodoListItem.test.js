import { shallow } from 'enzyme';
import TodoListItem from '../../../components/08-useReducer/TodoListItem';
import { initialState } from '../../fixtures/demoTodos';


describe('Pruebas de TodoListItem', () => {

  const todo = initialState[0];
  const handleDelete = jest.fn();
  const handleComplete = jest.fn();

  const wrapper = shallow(<TodoListItem
                              { ...todo }
                              index={ 0 }
                              handleComplete={ handleComplete }
                              handleDelete={ handleDelete }
                          />);

  test('Debe renderizar correctamente el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe llamar la función handleDelete', () => {
    wrapper.find('button').simulate('click');

    expect(handleDelete).toHaveBeenCalledWith(todo.id);
  });

  test('Debe llamar la función handleComplete', () => {
    wrapper.find('p').simulate('click');

    expect(handleComplete).toHaveBeenCalledWith(todo.id);
  });

  test('Debe mostrar el texto correcto', () => {
    const texto = wrapper.find('p').text();

    expect(texto).toBe(`1. ${ todo.desc }`);
  });

  test('Debe tener la clase complete si el todo.done === true', () => {
    todo.done = true;
    const wrapper = shallow(<TodoListItem
                              { ...todo }
                          />);

    expect(wrapper.find('p').hasClass('complete')).toBeTruthy();
  });

});
