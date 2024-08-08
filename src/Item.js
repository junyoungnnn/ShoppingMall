// Item.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Item({ id, name, intro, price, image }) {
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate("/mycard");
  };

  return (
    <div className="item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{intro}</p>
      <h3>{price}</h3>
      <button>담기</button>
      <button onClick={handlePurchase}>구매</button>
    </div>
  );
}

export default Item;
