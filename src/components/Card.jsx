const Card = ({ children, styles }) => {
  const style = `border rounded-lg p-4 hover:shadow-xl transition-all duration-300 ${
    styles ? styles : "border-slate-400/30 bg-slate-600/20 text-slate-300"
  }`;
  return <div className={style}>{children}</div>;
};

export default Card;
