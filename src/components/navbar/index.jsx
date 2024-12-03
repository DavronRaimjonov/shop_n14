import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import React, { useContext } from "react";
import { ShopAppContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { state } = useContext(ShopAppContext);
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between w-[90%] m-auto py-5">
      <div className="text-2xl">Navbar Logo</div>
      <div onClick={() => navigate("/shop")} className="cursor-pointer">
        <Badge count={state?.data?.length || 0}>
          <ShoppingCartOutlined className="text-[34px]" />
        </Badge>
      </div>
    </header>
  );
};

export default Navbar;
