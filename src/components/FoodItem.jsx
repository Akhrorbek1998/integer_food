const FoodItem = ({ image, title, price, order }) => {
  return (
    <li className="w-[200px] h-[226px] relative p-6 mb-14 rounded-lg bg-dark-bg text-center transition-all duration-200 ease-in hover:scale-105">
      <img
        className="w-[132px] h-[132px] absolute -top-12 left-[34px] rounded-full"
        src={image}
        alt=""
      />
      <div className="w-[144px] left-7 absolute bottom-6">
        <h3
          className="text-sm font-medium mb-2 leading-[18.
        2px]"
        >
          {title}
        </h3>
        <p className="text-sm leading-[19.6px] font-normal mb-1">{price}</p>
        <p className="text-sm leading-[19.6px] font-normal text-text-light">
          {order}
        </p>
      </div>
    </li>
  );
};

export default FoodItem;
