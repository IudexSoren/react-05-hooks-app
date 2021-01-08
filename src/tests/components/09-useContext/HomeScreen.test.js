import { mount } from 'enzyme';
import HomeScreen from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas de HomeScreen', () => {

  const user = {
    name: 'Purrumaw',
    email: 'purru.maw@gmail.com'
  }

  const wrapper = mount(
    <UserContext.Provider value={{
      user
    }}>
      <HomeScreen />
    </UserContext.Provider>

  );

  test('Debe renderizar correctamente el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });


})
