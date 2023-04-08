import React from "react";
import "./Item.css";
const Item = ({ item }) => {
  console.log(item);
  return (
    <div className="Product">
      <h1>{item.name}</h1>
      <img src={item.image} alt={item.name} width={"300px"} height={"200px"} />
      <h1>{item.price}</h1>
    </div>
  );
};

export default Item;
