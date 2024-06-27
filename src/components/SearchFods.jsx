import { IoMdSearch } from "react-icons/io";

const SearchFods = () => {
  return (
    <div className="w-full flex items-center justify-between mb-6">
      <div>
        <h1 className="text-[28px] leading-[39.2px] font-semibold mb-1">
          Jaegar Resto
        </h1>
        <p className="font-normal leading-[22px]">Tuesday, 2 Feb 2021</p>
      </div>
      <form className="w-[220px]">
        <div className="p-[14px] rounded-lg bg-base-form-bg flex items-center gap-2 border border-base-dark-line ">
          <IoMdSearch size={24} />
          <input
            className="w-full bg-transparent text-sm leading-[19.6px] text-white outline-none font-normal"
            type="text"
            placeholder="Search for food, coffe, etc.."
          />
        </div>
      </form>
    </div>
  );
};

export default SearchFods;
