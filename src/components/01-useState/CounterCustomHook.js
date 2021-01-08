import { useCounter } from '../../hooks/useCounter';

import './counter.css';

const CounterCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter custom hook: { counter }</h1>
      <hr/>
      <button
        className="btn btn-outline-dark"
        onClick={ () => increment() }
      >+1</button>
      <button
        className="btn btn-outline-dark"
        onClick={ reset }
      >Reset</button>
      <button
        className="btn btn-outline-dark"
        onClick={ () => decrement() }
      >-1</button>
    </>
  )
}

export default CounterCustomHook;