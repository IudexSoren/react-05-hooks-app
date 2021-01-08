import { memo } from 'react';

// Memo renderiza el componente cuando sus propiedades cambien, de otra forma no pasará.
const Small = memo(({ value }) => {

  console.log('It\' me, Small');

  return (
    <small>
      { value }
    </small>
  )
});

export default Small
