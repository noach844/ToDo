import React from 'react';
import './ToDoManager.css';
import { ToDosLogic } from './ToDoManager';
import ToDo from '../ToDo/ToDo';

export default function ToDoManager() {
  const { toDos, addToDo, deleteToDo, markToDo, deleteMarked } = ToDosLogic();

  const enterText = (e) => {
    if (e.key === 'Enter') {
      addToDo(e.target.value);
      e.target.value = '';
    }
  };

  return (
    <div className='ToDosContainer'>
      <input
        className='ToDoInput'
        placeholder='Enter ToDo 🎯'
        onKeyPress={enterText}
      />
      <button className='Button' onClick={deleteMarked}>
        Delete All Completed
      </button>
      {Object.keys(toDos).map((id) => {
        let { text, checked } = toDos[id];
        return (
          <ToDo
            key={id}
            id={id}
            text={text}
            checked={checked}
            onDelete={deleteToDo}
            onCheck={markToDo}
          />
        );
      })}
    </div>
  );
}
