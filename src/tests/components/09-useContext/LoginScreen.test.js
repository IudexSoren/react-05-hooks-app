import { mount } from 'enzyme';
import LoginScreen from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas de LoginScreen', () => {

  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{
      setUser
    }}>
      <LoginScreen />
    </UserContext.Provider>
  )

  test('Debe renderizar correctamente el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe ejecutar setUser con el argumento esperado', () => {
    wrapper.find('button').simulate('click');
    // wrapper.find('button').prop('onClick')();

    expect(setUser).toHaveBeenCalledWith({
      id: 4444,
      name: 'Jhin'
    });
  });

});
