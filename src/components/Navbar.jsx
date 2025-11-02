import { images } from "../../constants/language";
import { useLangStore } from "../../store/useLangStore";
import { ROUTES } from "../../constants/routes";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { lang, setLang } = useLangStore();
  return (
    <nav className="flex h-16 w-full justify-between items-center px-6 ">
      <Link to={"/"} className="flex gap-2 items-center">
        <img src={images.logo} alt="Logo resumia" className="w-8 h-8" />
        <h2 className="text-lg">RESUMIA</h2>
      </Link>
      <div className="flex gap-4">
        {ROUTES.map((item, index) => (
          <Link to={item.path} key={index}>
            {item.label[lang]}
          </Link>
        ))}
      </div>
      <div className="flex gap-2">
        <img
          src={images.SpanishIcon}
          alt=""
          className={`${lang !== "es" ? "grayscale" : ""} transition-all duration-300`}
          onClick={() => {
            setLang("es");
          }}
        />
        <img
          src={images.EnglishIcon}
          alt=""
          className={`${lang !== "en" ? "grayscale" : ""} transition-all duration-300`}
          onClick={() => {
            setLang("en");
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
