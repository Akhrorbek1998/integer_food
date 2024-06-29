const FilteredFoods = ({ activeTabContent }) => {
  return (
    <div className="w-full flex items-center justify-between mb-6">
      <h2 className="text-xl leading-7 font-semibold capitalize">
        {activeTabContent}
      </h2>
      <select className="bg-dark-bg p-[14px] rounded-lg outline-none">
        <option value="1">Dine in</option>
        <option value="2">Dine out</option>
      </select>
    </div>
  );
};

export default FilteredFoods;
