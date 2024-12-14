import whiteLogo from "../../assets/White.svg";
import blackLogo from "../../assets/Black.svg";
import './Logo.css'
export default function Logo () {
  return (
    <div className="brand_wrap">
      <a href="/" className="brand w-nav-brand w--current">
        <img src={whiteLogo} alt="" className="logo"/>
        <img src={blackLogo} alt="" className="logo_black"/>
      </a>
    </div>
  );
};
