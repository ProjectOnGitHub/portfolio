import { useState, useEffect } from 'react';
import { getItemInfo } from 'utils/api';
import { useParams } from 'react-router-dom';

function useItemInfo(outerEndpoint) {
  const { '*': innerEndpoint } = useParams();
  let endpoint;

  if (outerEndpoint) {
    endpoint = outerEndpoint;
  } else {
    endpoint = innerEndpoint;
  }

  const [item, setItem] = useState({});

  useEffect(() => {
    async function fetchData() {
      const newItem = await getItemInfo(endpoint);
      setItem(newItem);
    }
    fetchData();
  }, [endpoint]);

  return item;
}

export default useItemInfo;
