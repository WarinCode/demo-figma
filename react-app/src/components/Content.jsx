const Content = ({ title, text }) => {
  return (
    <div className="relative w-[483px] h-[352px] py-2 text-black text-ellipsis overflow-hidden ...">
      <h3 class="tracking-wide h-8 mb-3 text-2xl font-bold capitalize">
        {title}
      </h3>
      <p class="w-full h-max mt-6 text-base leading-6 text-left overflow-ellipsis ...">{text}</p>
    </div>
  );
};

export default Content;
