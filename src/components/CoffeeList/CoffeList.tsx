"use client";
import { getPagenatedProducts } from "@/services/products.service";
import { Database } from "@/types/supabase";
import { useQuery } from "@tanstack/react-query";
import CoffeeCard from "../CoffeeCard";

function CoffeList() {
  const { data: coffees } = useQuery<Database>({
    queryKey: ["coffees"],
    queryFn: () => getPagenatedProducts(1, 10),
  });
  return (
    <div className="h-screen grid grid-cols-4 gap-5">
      {coffees?.result?.map((coffee) => (
        <CoffeeCard
          key={coffee.id}
          image_path_url={coffee.image_path_url}
          brand={coffee.brand_id}
          is_caffeine={coffee.is_caffeine}
          origin={coffee.origin}
          price={coffee.price}
          type={coffee.type}
        />
      ))}
    </div>
  );
}

export default CoffeList;
