import "./Navbar.css";
import Brand from "../Logo/Logo.jsx";
import NavMenu from "../NavMenu/NavMenu.jsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";
export default function Navbar( ) {
  return (
    <>
      <div className="navbar w-nav">
        <div className="container w-container">
          <div className="nav_wrap">
            <Brand />
            <NavMenu />
            <BurgerMenu />
          </div>
          <div className="add_wr">
            <div className="line_wrap nav">
              <div className="line_nav"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
