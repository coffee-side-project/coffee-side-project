"use client";

import { useGetData } from "@/query/query";
import Image from "next/image";

const HomePage = () => {
  const { data, isLoading } = useGetData();
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>
          <p>{item.brand}</p>
          <Image
            src={item.image_path_url}
            alt={item.brand}
            width={24}
            height={24}
          />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
