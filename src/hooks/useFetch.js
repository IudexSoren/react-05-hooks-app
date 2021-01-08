import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {

  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {
    setState({data: null, loading:true, error: null});
    fetch(url)
    .then((resp) => resp.json())
    .then( async(data) => {
      // isMounted evita error por componente desmontado
      if (isMounted.current) {
        setState({
          data: data,
          loading: false,
          error: null
        });
      }
    })
    .catch(() => {
      setState({
        data: null,
        loading: false,
        error: 'La información no pudo ser cargada'
      });
    });
  }, [url]);

  return state;
}