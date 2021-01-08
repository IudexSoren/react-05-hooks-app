import { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

import '../02-useEffect/effects.css';

const RealExampleRef = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr/>
      { show && <MultipleCustomHooks /> }
      <button
        className="btn btn-outline-dark mt-3"
        onClick={ () => { setShow(!show) } }
      >{ (show) ? 'Hide' : 'Show' } quote</button>
    </div>
  )
}

export default RealExampleRef;
