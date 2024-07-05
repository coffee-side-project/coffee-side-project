import { getPagenatedProducts } from "@/services/products.service";

const HomePage = async () => {
  const data = await getPagenatedProducts(1, 10);

  return <div>HomePage</div>;
};

export default HomePage;
