const Right = ({ title, text }) => {
  return (
    <div className="right flex flex-col items-center justify-evenly w-[300px] h-[400px] bg-primary rounded-md px-4 shadow-lg max-[1150px]:mt-8  max-[1150px]:w-full">
      <div className="mt-2">
        <i className="text-2xl mr-1 text-secondary ri-book-3-fill"></i>
        <span className="tracking-wider h-7 mt-8 text-secondary text-2xl font-bold text-center capitalize">{title}</span>
      </div>
      <p class="overflow-hidden text-secondary text-base leading-6">
        {text}
      </p>
      <button className="w-44 h-12 cursor-pointer capitalize bg-secondary text-base font-bold rounded-lg">read more</button>
    </div>
  );
};

export default Right;
