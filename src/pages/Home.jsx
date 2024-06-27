import { useState } from "react";
import FilteredFoods from "../components/FilteredFoods";
import Order from "../components/Order";
import SearchFods from "../components/SearchFods";
import TabFoodContent from "../components/TabFoodContent";
import FoodList from "../components/FoodList";

const Home = () => {
  const [activeTabContent, setActiveTabContent] = useState("hot dishes");
  return (
    <div className="flex pt-6 ps-2.5 pe-[447px]">
      <div className="grow">
        <SearchFods />
        <TabFoodContent
          activeTabContent={activeTabContent}
          setActiveTabContent={setActiveTabContent}
        />
        <FilteredFoods activeTabContent={activeTabContent} />
        <FoodList />
      </div>
      <div>
        <Order />
      </div>
    </div>
  );
};

export default Home;
