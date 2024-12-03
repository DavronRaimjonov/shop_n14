import { Rate } from "antd";
import {
  HeartFilled,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useContext } from "react";
import { ShopAppContext } from "../../context/shop-context";
import notificationApi from "../../generic/notification";
import { LikeAppContext } from "../../context/like-context";
const CardProduct = (props) => {
  const {
    action,
    article,
    currency,
    id,
    imagie,
    name,
    price_current,
    price_old,
    rating,
    reviews,
  } = props;
  const { dispatch } = useContext(ShopAppContext);
  const { dispatch: dispatch2 } = useContext(LikeAppContext);
  const notify = notificationApi();
  const { state } = useContext(LikeAppContext);

  const liked_product = state.like.filter((value) => value.id === id)[0];
  const isLiked = Boolean(liked_product);
  console.log(isLiked);
  return (
    <div className="border rounded-[10px] border-[#dedee2] p-5">
      <div className="relative">
        <img className="max-w-full" src={imagie} alt="" />
        {isLiked ? (
          <HeartFilled className="text-[red] text-[20px] cursor-pointer absolute top-0 right-0" />
        ) : (
          <HeartOutlined
            onClick={() => dispatch2({ type: "like_add", value: props })}
            className="text-[20px] cursor-pointer absolute top-0 right-0"
          />
        )}
      </div>

      <div className="flex justify-between items-center py-3">
        <div className="text-[14px] text-[#7a7680]">
          Артикул: <span className="text-[#505255]">{article}</span>
        </div>
        <div className="flex items-center gap-1">
          <Rate
            className="text-[14px] text-[#FF9431]"
            count={5}
            value={rating}
          />
          <p className="text-[14px]">
            {rating}.0 ({reviews})
          </p>
        </div>
      </div>
      <div className="text-[16px] text-[#1b1d1f] font-medium">{name}</div>
      <div className="flex items-center justify-between">
        <div className="text-[30px] mt-4">
          {price_current}
          {currency}
          {"  "}
          <sup className="line-through text-[16px] text-[#7a7680]">
            {price_old}
            {currency}
          </sup>
        </div>
        <button
          onClick={() => {
            dispatch({ type: "add", value: props });
            notify({ type: "add" });
          }}
          className="border-[2px] border-[#6b59cc] rounded-lg w-[40px] h-[40px] flex items-center justify-center hover:bg-[#6b59cc] transition-all group"
        >
          <ShoppingCartOutlined className="text-[20px] text-[#6b59cc] group-hover:text-white flex items-center" />
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
