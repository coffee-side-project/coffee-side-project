import CoffeeCard from "@/components/CoffeeCard";
import { getPagenatedProducts } from "@/services/products.service";

const HomePage = async () => {
  const data = await getPagenatedProducts(1, 10);
  console.log("data", data.result[0]);
  return (
    <div className="h-screen">
      <CoffeeCard
        key={data.result[0].id}
        image_path_url={data.result[0].image_path_url}
        brand={data.result[0].brand_id}
        is_caffeine={data.result[0].is_caffeine}
        origin={data.result[0].origin}
        price={data.result[0].price}
        type={data.result[0].type}
      />
    </div>
  );
};

export default HomePage;
