import { FOODS } from "../constants";
import FoodItem from "./FoodItem";

const FoodList = () => {
  return (
    <ul className="flex items-start justify-between flex-wrap gap-4">
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
