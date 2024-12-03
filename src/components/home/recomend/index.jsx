
import useAxios from "../../../hooks/useAxios";
import CardProduct from "../../card";
import LoaderApi from "../../../generic/loader";

const Recomended = () => {
  const { data, loading } = useAxios({ url: "recomemded" });
  const { card_product_loader } = LoaderApi();
  return (
    <section className="w-[90%] m-auto">
      <h2 className="text-[20px] font-medium text-[#1b1d1f] py-5">
        Рекомендуем
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {loading
          ? card_product_loader()
          : data.map((value) => (
              <CardProduct key={value.id} {...value} />
            ))}
      </div>
    </section>
  );
};

export default Recomended;
