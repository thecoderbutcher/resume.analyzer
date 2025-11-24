import { useLangStore } from "../../store/useLangStore";
import { footer } from "../../constants/language";
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  const { lang } = useLangStore();
  return (
    <div className="flex justify-center gap-1 p-4 items-center text-slate-500">
      <p>{footer[lang].develop}</p>
      <FaHeart className="text-[#f56565]" />
      <p>{footer[lang].by}</p>
      <a href="https://thecoderbutcher.site/" className="text-[#f56565]" target="_blank">
        thecoderbutcher
      </a>
    </div>
  );
};

export default Footer;
