import React from "react";
import "../styles/Menu.css";
import { Data } from "../helpers/Data";
import MenuCardItem from "./MenuCardItem";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((menuItem, key) => (
          <MenuCardItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            content={menuItem.content}
            price={menuItem.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
