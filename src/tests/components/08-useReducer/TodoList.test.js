import { shallow } from 'enzyme';
import TodoList from '../../../components/08-useReducer/TodoList';
import { initialState } from '../../fixtures/demoTodos';

describe('Pruebas de TodoList', () => {

  const handleComplete = jest.fn();
  const handleDelete = jest.fn();

  const wrapper = shallow(<TodoList
                            todos={ initialState }
                            handleComplete={ handleComplete }
                            handleDelete={ handleDelete }
                            />);

  test('Debe renderizar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe renderizar los componentes TodoListItem correctamente', () => {
    expect(wrapper.find('TodoListItem').length).toBe(initialState.length);
    expect(wrapper.find('TodoListItem').at(0).prop('handleComplete')).toEqual(expect.any(Function));
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
  });

})
