import React, {useState} from "react";



function Item({ name, category }) {
  const [addItem, setAddItem] = useState(" ")
  
  function handleAddToCart(){
    setAddItem(!addItem)
  }

  return (
    <li className={addItem ? " " : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{addItem ? "Add to Cart" : "Remove from cart"}</button>
    </li>
  );
}

export default Item;
