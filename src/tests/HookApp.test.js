import { shallow } from 'enzyme';
import HookApp from '../HookApp';

describe('Pruebas de HookApp', () => {

  test('Debe renderizar el componente correctamente', () => {
    const wrapper = shallow(<HookApp />);

    expect(wrapper).toMatchSnapshot();
  });


});