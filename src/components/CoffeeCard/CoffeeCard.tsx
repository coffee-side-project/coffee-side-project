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
        "p-5 flex relative flex-col items-center justify-center h-72 border rounded-lg shadow-md hover:shadow-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:opacity-50 duration-300"
      }
      // onClick={handleCardClick}
    >
      <div className="relative flex items-center justify-center w-full h-1/2">
        <Image
          className="object-contain w-40 h-auto mb-4 aspect-square"
          alt={props.origin}
          src={props.image_path_url}
          fill
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold mb-2">{props.type}</h1>
        <h1 className="text-md font-semibold">{props.origin}</h1>
        <p className="font-semibold text-sm mb-2">
          {props.price.toLocaleString()}원
        </p>
        <p>{props.brand}</p>
      </div>
      {props.is_caffeine === true ? (
        <div className="fixed top-0 right-0">디카페인</div>
      ) : null}
    </div>
  );
}

export default CoffeeCard;
