import { Button } from "antd";
import React, { useContext } from "react";
import { ShopAppContext } from "../../../context/shop-context";

const Card = ({ product }) => {
  const { dispatch } = useContext(ShopAppContext);
  return (
    <ul>
      <li
        className="list-none bg-[#ffffff68] p-3 justify-between items-center flex"
        key={product.id}
      >
        <img className="w-[100px]" src={product.imagie} alt={product.name} />
        <p>{product.name}</p>
        <p>
          {product.userPrice}
          {product.currency}
        </p>

        <Button
          onClick={() =>
            dispatch({ type: "increment", product_id: product.id })
          }
        >
          +
        </Button>
        {product.count}
        <Button
          onClick={() =>
            dispatch({ type: "decrement", product_id: product.id })
          }
        >
          -
        </Button>
        <div className="flex gap-3">
          <Button
            type="primary"
            danger
            onClick={() =>
              dispatch({
                type: "delete",
                delete_id: product.id,
              })
            }
          >
            ochirish
          </Button>
          <Button type="primary">Sotib olish</Button>
        </div>
      </li>
    </ul>
  );
};

export default Card;
