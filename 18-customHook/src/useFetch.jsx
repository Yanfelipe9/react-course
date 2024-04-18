import { useCallback, useState } from 'react';

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [erro, setErro] = useState(null);

  const request = useCallback(async(url, options) => {
    let response;
    let json;
    try {
      setErro(null)
      setLoading(true);
      const response = await fetch(url, options);
      json = await response.json();
    } catch (error) {
      json = null
      setErro('Erro');
    } finally {
      setData(json);
      setLoading(false)
      return {response, json}
    }
  }, [])

  return { data, loading, erro, request };
};
