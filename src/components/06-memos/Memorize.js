import { useState } from 'react';
import Small from './Small';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';

// Gracias a memo no se renderiza el componente <Small /> al hacer click en el <button>Show / Hide</button>
const Memorize = () => {

  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true)

  return (
    <div>
      <h1>Memorize</h1>
      <hr/>
      <h2>Counter: <Small value={ counter } /> </h2>
      <button
        className="btn btn-outline-dark"
        onClick={ () => increment() }
      >+1</button>
      <button
        className="btn btn-outline-dark ms-2"
        onClick={ () => {
          setShow(!show)
        } }
      >
        Show / Hide { JSON.stringify(show) }
      </button>
    </div>
  )
}

export default Memorize
