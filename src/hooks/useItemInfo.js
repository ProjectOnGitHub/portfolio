import { useState, useEffect } from 'react';
import { getItemInfo } from 'utils/api';
import { useParams } from 'react-router-dom';

function useItemInfo() {
  const { '*': endpoint } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    getItemInfo(endpoint).then((newItem) => {
      setItem(newItem);
    });
  }, [endpoint]);
  return item;
}

export default useItemInfo;
