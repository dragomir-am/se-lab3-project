import React, { useState } from 'react';
import List from "../components/List";

export default function HomePage() {
  const [items, setItems] = useState([]); // State to maintain the list of to-do items
  const [newItem, setNewItem] = useState(''); // State to maintain the value of the input field

  // Function to handle adding a new item
  const handleAdd = () => {
    if (newItem.trim()) { // Ensure the item is not just whitespace
      setItems([...items, newItem]);
      setNewItem(''); // Reset the input field
    }
  };

  // Function to handle deleting an item by its index
  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <div>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter new to-do item"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <List items={items} onDelete={handleDelete} />
    </div>
  );
}

