import { FOODS_CATEGORIES } from "../constants";

const TabFoodContent = ({ activeTabContent, setActiveTabContent }) => {
  return (
    <ul className="pb-3 mb-8 relative flex items-center gap-8 border-b border-base-dark-line">
      {FOODS_CATEGORIES.map((category) => (
        <li
          className={`cursor-pointer capitalize hover:text-primary-color ${
            activeTabContent === category.title ? "text-primary-color" : ""
          }`}
          key={category.id}
          onClick={() => setActiveTabContent(category.title)}
        >
          {category.title}
          {activeTabContent === category.title && (
            <span className="w-12 h-1 absolute -bottom-[2px] bg-primary-color block rounded-full"></span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TabFoodContent;
