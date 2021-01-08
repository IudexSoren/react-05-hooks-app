import { mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import AppRouter from '../../../components/09-useContext/AppRouter';

describe('Pruebas de AppRouter', () => {

  const user = {
    name: 'Purrumaw',
    email: 'purru.maw@gmail.com'
  }

  const wrapper = mount(
    <UserContext.Provider value={{
      user
    }}>
      <AppRouter />
    </UserContext.Provider>
  );

  test('Debe renderizar correctamente el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
