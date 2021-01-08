import { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

import '../02-useEffect/effects.css';

// Gracias a memo no se renderiza el componente <Small /> al hacer click en el <button>Show / Hide</button>
const MemoHook = () => {

  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);



  // Los console.log se van a ejecutar cuando el contador cambie, no cuando algo como el show lo haga
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <hr/>
      <h3>Counter: <small>{ counter }</small></h3>
      <p>{ memoProcesoPesado }</p>
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

export default MemoHook;
