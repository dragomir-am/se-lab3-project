import React from 'react';
import TodoItem from './TodoItem';

export default function List({ items, onDelete }) {
    return (
        <ul>
            {items.map((item, index) => (
                <TodoItem key={index} text={item} onDelete={() => onDelete(index)} />
            ))}
        </ul>
    );
}
