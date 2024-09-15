const Frame = ({ children }) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-[50px] w-full my-[70px] mx-0 p-5">
      {children}
    </div>
  );
};

export default Frame;
