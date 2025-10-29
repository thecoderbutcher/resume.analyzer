import { images } from "../../constants/language";
import { useLangStore } from "../../store/useLangStore";

const Navbar = () => {
  const { lang, setLang } = useLangStore();
  return (
    <nav className="flex h-16 w-full justify-end gap-2 items-center px-6 ">
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
    </nav>
  );
};

export default Navbar;
