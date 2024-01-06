import { useState, useEffect } from 'react';
import * as api from 'utils/api';

function usePopup(endpoint, data) {
  const [currentPopup, setCurrentPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, [data]);

  function openPopup(popupName) {
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
    const { item } = currentData;

    api.changeInfo(endpoint, item).then((newItem) => {
      setItems(newItem);
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
