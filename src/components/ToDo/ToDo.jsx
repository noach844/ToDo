import React from 'react';
import './ToDo.css';
import { BiTrash } from 'react-icons/bi';

export default function ToDo({ id, text, checked, onDelete, onCheck }) {
  return (
    <div className='ToDo-container'>
      <input
        type='checkbox'
        style={{ cursor: 'pointer' }}
        value={checked}
        onChange={() => {
          onCheck(id);
        }}
      />
      <h1>{text}</h1>
      <BiTrash
        className='Icon'
        onClick={() => {
          onDelete(id);
        }}
      />
    </div>
  );
}
