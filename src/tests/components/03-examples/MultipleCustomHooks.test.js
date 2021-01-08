import { shallow } from 'enzyme';
import MultipleCustomHook from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas de MultipleCustomHook', () => {

  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 0,
      increment: () => {}
    });
  });

  test('Debe renderizar el componente correctamente', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });
    const wrapper = shallow(<MultipleCustomHook />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar la información', () => {
    useFetch.mockReturnValue({
      data: [{
        author: 'Putando',
        quote: 'Que buenas tetas'
      }],
      loading: false,
      error: null
    });
    const wrapper = shallow(<MultipleCustomHook />);

    expect(wrapper.find('.alert').exists()).toBeFalsy();
    expect(wrapper.find('.mb-3').text().trim()).toBe('Que buenas tetas');
    expect(wrapper.find('.blockquote-footer').text().trim()).toBe('Putando');
  });


});