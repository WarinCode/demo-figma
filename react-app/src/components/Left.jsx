import Button from "./Button";

const data = [
  {
    text: "home",
    icon: "ri-home-2-fill",
  },
  {
    text: "about",
    icon: "ri-chat-unread-fill",
  },
  {
    text: "product",
    icon: "ri-product-hunt-fill",
  },
  {
    text: "blog",
    icon: "ri-news-line",
  },
  {
    text: "contact",
    icon: "ri-contacts-fill",
  },
];

const Left = () => {
  return (
    <div className="flex flex-col items-start gap-4 relative w-[360px]">
      {data.map((value, idx) => (
        <Button key={idx} {...value} className="self-stretch flex-shrink-0 h-[52px] capitalize cursor-pointer bg-primary rounded-md mb-1 shadow-lg" />
      ))}
    </div>
  );
};

export default Left;
