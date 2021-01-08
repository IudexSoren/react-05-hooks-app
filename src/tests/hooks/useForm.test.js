import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from '../../hooks/useForm';

describe('Pruebas de useForm', () => {

  const initialForm = {
    name: 'Purrumaw',
    email: 'purru.maw@gmail.com'
  }

  test('Debe retornar un formulario por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [ values, handleInputChange, reset ] = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('Debe cambiar el valor del formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [ , handleInputChange ] = result.current;
    act(() => {
      const ev = {
        target: {
          name: 'name',
          value: 'Putando'
        }
      }
      handleInputChange(ev);
    });
    const [ values ] = result.current;

    expect(values).not.toEqual(initialForm);
  });

  test('Debe reiniciar el formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [ , handleInputChange, reset ] = result.current;
    act(() => {
      const ev = {
        target: {
          name: 'name',
          value: 'Putando'
        }
      }
      handleInputChange(ev);
      reset();
    });
    const [ values ] = result.current;

    expect(values).toEqual(initialForm);
  });

});
