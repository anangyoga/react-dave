import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

function AddItem({ newItem, setNewItem, handleSubmit }) {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input ref={inputRef} onChange={(e) => setNewItem(e.target.value)} value={newItem} autoFocus id="addItem" type="text" placeholder="Add Item" required />
      <button type="submit" aria-label="Add Item" onClick={() => inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  );
}

export default AddItem;
