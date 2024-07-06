import Image from "next/image";

type CoffeCardProps = {
  image_path_url: string;
  type: string;
  origin: string;
  price: number;
  brand: string;
  is_caffeine: boolean;
};

function CoffeeCard(props: CoffeCardProps) {
  return (
    <div
      className={
        " flex relative flex-col items-center  justify-center w-72 h-96 border rounded-lg shadow-md hover:shadow-lg transition ease-in-out delay-50 hover:translate-y-1 hover:scale-105 duration-300 hover:cursor-pointer"
      }
      // onClick={handleCardClick}
    >
      <div className="relative flex  backdrop-brightness-95 items-center justify-center w-full h-full">
        <Image
          className="object-contain mb-4 aspect-auto"
          alt={props.origin}
          src={props.image_path_url}
          fill
        />
      </div>
      <div className="flex flex-col items-center p-5">
        <h1 className="text-xl font-semibold mb-2">{props.type}</h1>
        <h1 className="text-md font-semibold">{props.origin}</h1>
        <p className="font-semibold text-sm mb-2">
          {props.price?.toLocaleString()}원
        </p>
        <p>{props.brand}</p>
      </div>
      {props.is_caffeine === false ? (
        <div className="absolute top-0 right-0 m-2 border shadow-md rounded text-xs font-semibold p-1">
          디카페인
        </div>
      ) : null}
    </div>
  );
}

export default CoffeeCard;
