import { shallow } from 'enzyme';
import RealExampleRef from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas de RealExampleRef', () => {

  const wrapper = shallow(<RealExampleRef />);

  test('Debe renderizar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBeFalsy()
  });

  test('Debe mostrar el componente <MultipleCustomHooks />', () => {
    wrapper.find('button').simulate('click');

    expect(wrapper.find('MultipleCustomHooks').exists()).toBeTruthy();
  });

});
