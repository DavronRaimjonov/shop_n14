import { Skeleton } from "antd";

const LoaderApi = () => {
  const card_product_loader = () => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <div key={idx}>
        <Skeleton.Image active={true} className="!w-full !h-[250px]" />
        <br />
        <Skeleton.Input active={true} className="!h-[20px] !w-full" />
        <br />
        <Skeleton.Input active={true} className="!h-[20px] !w-[80%]" />
        <br />
        <Skeleton.Input active={true} className="!h-[20px] !w-[50%]" />
      </div>
    ));
  };

  return { card_product_loader };
};

export default LoaderApi;
