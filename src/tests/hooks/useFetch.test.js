import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Pruebas de useFetch', () => {

  test('Debe retornar la información por defecto', () => {
    const { result } = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1`));
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBeTruthy();
    expect(error).toBe(null);
  });

  test('Debe retornar la información deseada', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1`));
    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBeFalsy();
    expect(error).toBe(null);
  });

  test('Debe retornar un error controlado', async() => {
    const variableError = 'd';
    const { result, waitForNextUpdate } = renderHook(() => useFetch(`https://reqres.in/ap${variableError}i/users?page=2`));
    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBeFalsy();
    expect(error).toBe('La información no pudo ser cargada');
  });

});
