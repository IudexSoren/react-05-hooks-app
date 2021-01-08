import { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './layout.css';

const LayoutEffect = () => {

  const { counter, increment } = useCounter(1);

  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { quote } = !!data && data[0];

  const pTag = useRef();

  const [boxSize, setBoxSize] = useState({});

  // Usado para cambios del Layout.  Muy parecido a useEffect, pero uno es usado para cambios en el DOM y el otro no.
  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr/>
      <blockquote className="blockquote text-end">
          <p
            className="mb-3"
            ref={ pTag }
          >{ quote }</p>
      </blockquote>
      <pre>
        { JSON.stringify(boxSize, null, 3) }
      </pre>
      <button
        className="btn btn-outline-dark"
        onClick={ () => increment() }
      >
        Next quote
      </button>
    </div>
  )
}

export default LayoutEffect;