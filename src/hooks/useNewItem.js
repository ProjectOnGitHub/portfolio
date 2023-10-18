import { useEffect, useState } from 'react';

function useNewItem(defaultItem) {
  const [newItem, setNewItem] = useState({});
  useEffect(() => {
    setNewItem(defaultItem);
  }, [defaultItem]);

  function handleChangeInput(e) {
    const { name, value } = e.target;

    setNewItem((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  return { newItem, handleChangeInput };
}

export default useNewItem;
