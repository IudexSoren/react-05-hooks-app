import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import '../02-useEffect/effects.css';

const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);

  const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr/>
      { (loading) ?
        (<div className="alert alert-info text-center">
          Loading...
        </div>) :
        (<blockquote className="blockquote text-end">
          <p className="mb-3">{ quote }</p>
          <footer className="blockquote-footer">{ author }</footer>
        </blockquote>)
      }
      <button
        className="btn btn-outline-dark"
        onClick={ () => increment() }
      >
        Next quote
      </button>
    </div>
  )
}

export default MultipleCustomHooks;