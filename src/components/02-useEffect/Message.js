import { useEffect, useState } from 'react';

const Message = () => {

  const [coords, setCoords] = useState({
    x: 0,
    y: 0
  });
  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      const coords = {
        x: e.x,
        y: e.y
      }
      setCoords(coords);
    }
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    }
  }, []);

  return (
    <div>
      <h3>Purrumaw</h3>
      <p>
        x: { x }   y: { y }
      </p>
    </div>
  )
}

export default Message;
