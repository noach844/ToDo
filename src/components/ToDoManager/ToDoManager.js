import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export const ToDosLogic = () => {
  const [toDos, setToDos] = useState({});

  const addToDo = (text) => {
    let id = uuid();
    let tmpState = { ...toDos };
    tmpState[id] = { text: text, checked: false };
    setToDos(tmpState);
  };

  const deleteToDo = (id) => {
    let tmpState = { ...toDos };
    delete tmpState[id];
    setToDos(tmpState);
  };

  const markToDo = (id) => {
    setToDos((prevState) => {
      prevState[id].checked = true;
      return prevState;
    });
  };

  const deleteMarked = () => {
    let tmpState = { ...toDos };

    Object.keys(toDos).map((id) => {
      if (toDos[id].checked) {
        delete tmpState[id];
      }
    });

    setToDos(tmpState);
  };

  return { toDos, addToDo, deleteToDo, markToDo, deleteMarked };
};
