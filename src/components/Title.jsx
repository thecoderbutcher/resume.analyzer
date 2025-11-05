const Title = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-2 text-center md:text-start md:gap-4 mb-4 md:mb-8 items-center justify-center">
      <h1 className="text-4xl md:text-6xl uppercase">{title}</h1>
      <p className="font-light">{subtitle}</p>
    </div>
  );
};

export default Title;
