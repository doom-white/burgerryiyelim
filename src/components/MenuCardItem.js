import React from "react";

const MenuCardItem = ({ image, name, content, price }) => {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1 style={{ margin: "20px 0" }}>{name}</h1>
      <h6 style={{ marginTop: "0", marginBottom: "20px" }}>{content}</h6>
      <p>
        <i style={{ color: "red" }}>{price} ₺</i>
      </p>
    </div>
  );
};

export default MenuCardItem;
