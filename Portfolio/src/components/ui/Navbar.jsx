import React from "react";
import whiteLogo from "../../assets/White.svg";
import blackLogo from "../../assets/Black.svg";
export default function Navbar() {
  return (
    <>
      <div
        className="nav_wrap"
        class="relative flex flex-row justify-between items-center py-6"
      >
        <div className="brand_wrap">
          <a
            href="/"
            data-w-id="045f99fe-ac6b-eb28-1f16-d72c0e5c6059"
            aria-current="page"
            class="brand w-nav-brand w--current flex-1 ml-0 pl-0 w-[36vw]"
          >
            <img
              src={whiteLogo}
              alt=""
              data-w-id="045f99fe-ac6b-eb28-1f16-d72c0e5c605a"
              class="logo"
            />
            <img src={blackLogo} alt="" class="logo_black" />
          </a>
        </div>
      </div>
    </>
  );
}
