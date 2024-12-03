import { Button } from "antd";
import React, { useContext } from "react";
import Card from "./card";
import { ShopAppContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

const ShopComponent = () => {
  const { state } = useContext(ShopAppContext);
  const navigate = useNavigate();

  let totalPrice = state.data.reduce(
    (acc, value) => (acc += value.userPrice),
    0
  );

  return (
    <div className="w-[90%] m-auto">
      {state.data.length ? (
        <div className="  p-6 flex flex-col gap-4 ">
          {state.data.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-4 ">
          <img
            className="w-[20%] m-auto"
            src="https://uzum.uz/static/img/shopocat.490a4a1.png"
            alt="logo"
          />
          <div className="text-center">
            <p className="font-semibold mb-1">Savatingiz hozircha bo‘sh</p>
            <p>
              Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali
              topishingiz yoki to‘plamlarni ko‘rishingiz mumkin
            </p>
            <Button onClick={() => navigate("/")} className="mt-5">
              Asosiy sahifa
            </Button>
          </div>
        </div>
      )}
      <div className="text-2xl">
        Total Price: <span className="font-bold">{totalPrice}$</span>
      </div>
    </div>
  );
};

export default ShopComponent;
