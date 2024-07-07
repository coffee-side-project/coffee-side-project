import CoffeeFilter from "@/components/CoffeeFilter";
import CoffeeList from "@/components/CoffeeList";

const page = () => {
  return (
    <div className="flex flex-col m-10">
      <h1 className="w-full mb-10 text-3xl text-filterText font-bold">
        모든 커피
      </h1>

      <div className="flex justify-around">
        <CoffeeFilter />
        <CoffeeList />
      </div>
    </div>
  );
};

export default page;
