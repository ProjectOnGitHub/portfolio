import { useState, useEffect } from 'react';
import * as api from 'utils/api';

function usePopup(endpoint, data) {
  const [currentPopup, setCurrentPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
    console.log(data);
  }, [data]);

  function openPopup(popupName) {
    console.log(popupName);
    setCurrentPopup(popupName);
  }

  function removeItem(currentData) {
    const { itemId, currentArray } = currentData;
    api.deleteItem(endpoint, itemId).then(() => {
      const newArr = currentArray.filter((item) => item.id !== itemId);
      setItems(newArr);
    });
  }

  function changeData(currentData) {
    const { itemId, setState } = currentData;
    api.changeInfo(endpoint, itemId).then((newItem) => {
      setState(newItem);
    });
  }

  function confirmRemoveItem(isConfirmed) {
    if (isConfirmed) {
      removeItem(selectedItem);
    }
    setCurrentPopup(false);
  }

  function confirmSaveItem(isConfirmed) {
    if (isConfirmed) {
      changeData(selectedItem);
    }
    setCurrentPopup(false);
  }

  return {
    currentPopup,
    items,
    openPopup,
    confirmRemoveItem,
    setSelectedItem,
    removeItem,
    confirmSaveItem,
  };
}

export default usePopup;
