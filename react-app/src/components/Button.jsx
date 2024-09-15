const Button = ({ text, icon, className }) => {
  return (
    <button className={className}>
        <i className={icon + " text-xl mr-1 text-secondary"}></i>
        <span className="text-secondary text-xl font-bold">{text}</span>
    </button>
  )
}

export default Button