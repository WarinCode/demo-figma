const Header = ({ title, img }) => {
  return (
    <header className="h-[90px] flex items-center bg-primary">
        <img src={img} className="w-[80px] h-[80px] ms-8" alt="KU Logo" />
        <span className="ku-house uppercase text-secondary text-3xl font-bold ml-1 tracking-wide">{title}</span>
    </header>
  )
}

export default Header;