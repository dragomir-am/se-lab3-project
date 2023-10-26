import React from 'react';

const TodoItem = ({ text, onDelete }) => {
  return (
    <li>
      {text}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
