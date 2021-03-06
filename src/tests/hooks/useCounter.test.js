import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";


describe('Pruebas de useCounter', () => {

  test('Debe retornar el valor y los tipos por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;
    
    expect(counter).toBe(0);
    expect(typeof increment).toBe('function');
    expect(typeof decrement).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('Debe retornar el valor indicado', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('Debe incrementar el contador en 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    act(() => {
      increment();
    });
    const { counter } = result.current;

    expect(counter).toBe(100 + 1);
  });

  test('Debe decrementar el contador en 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
      decrement();
    });
    const { counter } = result.current;

    expect(counter).toBe(100 - 1);
  });

  test('Debe reiniciar el contador', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, reset } = result.current;
    act(() => {
      increment(); // + 1
      reset();
    });
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

});
