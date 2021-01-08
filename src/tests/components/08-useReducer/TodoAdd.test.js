import { shallow } from 'enzyme';
import TodoAdd from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas de TodoAdd', () => {

  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={ handleAddTodo } />);

  test('Debe renderizar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('No debe llamar la función handleAddTodo', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect(handleAddTodo).not.toHaveBeenCalled();
  });

  test('Debe llamar la función handleAddTodo', () => {
    const value = 'Aprender MongoDB';
    wrapper.find('input').simulate('change', {
      target: {
        name: 'description',
        value: value
      }
    });
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect(handleAddTodo).toHaveBeenCalled();
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false
    });
    expect(wrapper.find('input').prop('value')).toBe('');
  });

});
