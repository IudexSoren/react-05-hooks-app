import { memo } from 'react';

const ShowIncrement = memo(({ increment }) => {

  console.log('Generado de nuevo');

  return (
    <button
      className="btn btn-outline-dark"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  )
})

export default ShowIncrement
