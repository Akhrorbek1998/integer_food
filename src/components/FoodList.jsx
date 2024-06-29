import { FOODS } from "../constants";
import FoodItem from "./FoodItem";

const FoodList = () => {
  return (
    <ul className="h-[550px] overflow-auto pt-14 flex items-start justify-between flex-wrap gap-4 example">
      {FOODS.map((food) => (
        <FoodItem
          key={food.id}
          image={food.image}
          title={food.title}
          price={food.price}
          order={food.order}
        />
      ))}
    </ul>
  );
};

export default FoodList;
``;
