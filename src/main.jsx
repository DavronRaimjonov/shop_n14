import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ShopContext } from "./context/shop-context";
import { LikeContext } from "./context/like-context";

createRoot(document.getElementById("root")).render(
  <ShopContext>
    <LikeContext>
      <RouterProvider router={router} />
    </LikeContext>
  </ShopContext>
);
