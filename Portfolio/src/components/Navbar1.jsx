import React from "react";
import whiteLogo from "../assets/White.svg";
import blackLogo from "../assets/Black.svg";
export default function Navbar1() {
  return (
    <>
      <div className="relative flex flex-row items-center justify-between py-6 nav_wrap">
        <div className="brand_wrap">
          <a
            href="/"
            data-w-id="045f99fe-ac6b-eb28-1f16-d72c0e5c6059"
            aria-current="page"
            className="brand w-nav-brand w--current flex-1 ml-0 pl-0 w-[36vw]"
          >
            <img
              src={whiteLogo}
              alt=""
              data-w-id="045f99fe-ac6b-eb28-1f16-d72c0e5c605a"
              className="logo opacity-1"
            />
            <img src={blackLogo} alt="" className="logo_black" />
          </a>
        </div>
        <nav
          role="navigation"
          data-w-id="045f99fe-ac6b-eb28-1f16-d72c0e5c605c"
          className="nav-menu w-nav-menu flex flex-col justify-center items-center w-full h-[75vh] pt-[4vw] bg-transparent text-white relative float-right"
        >
          <div className="relative z-30 flex-col justify-center w-full h-full">
            <div className="relative z-0 flex flex-col items-center justify-between overflow-hidden mt-0 pt-[5px]">
              {/* Home */}
              <a
                href="#home"
                // class="hover_link_wrap w-inline-block w--curent"
                className="mr-6 mb-[5.5vw] flex-none no-underline  hover:underline inline-block max-w-full bg-transparent"
              >
                <div
                  //   class="link_anim"
                  className="relative flex flex-col mr-0 overflow-visible"
                >
                  <div
                    // class="anim_wr"
                    className="relative flex flex-col overflow-visible"
                  >
                    <div
                      //   class="nav_link"
                      className="block p-0 text-sm font-semibold text-white uppercase custom-3d-transfrom"
                    >
                      home
                    </div>
                    <div className="absolute block p-0 text-sm font-semibold text-white uppercase landing-[1.3] nav-link-down is--first custom-3d-style">
                      Home
                    </div>
                  </div>
                </div>
              </a>
              {/* Introduction */}
              <a
                href="#Introduction"
                // class="hover_link_wrap w-inline-block w--curent"
                className="mr-6 mb-[5.5vw] flex-none no-underline  hover:underline inline-block max-w-full bg-transparent"
              >
                <div
                  //   class="link_anim"
                  className="relative flex flex-col mr-0 overflow-visible"
                >
                  <div
                    // class="anim_wr"
                    className="relative flex flex-col overflow-visible"
                  >
                    <div
                      //   class="nav_link"
                      className="block p-0 text-sm font-semibold text-white uppercase custom-3d-transfrom"
                    >
                      introduction
                    </div>
                    <div className="absolute block p-0 text-sm font-semibold text-white uppercase landing-[1.3] nav-link-down is--first custom-3d-style">
                      Introduction
                    </div>
                  </div>
                </div>
              </a>
              {/* {Project} */}
              <a
                href="#project"
                // class="hover_link_wrap w-inline-block w--curent"
                className="mr-6 mb-[5.5vw] flex-none no-underline  hover:underline inline-block max-w-full bg-transparent"
              >
                <div
                  //   class="link_anim"
                  className="relative flex flex-col mr-0 overflow-visible"
                >
                  <div
                    // class="anim_wr"
                    className="relative flex flex-col overflow-visible"
                  >
                    <div
                      //   class="nav_link"
                      className="block p-0 text-sm font-semibold text-white uppercase custom-3d-transfrom"
                    >
                      project
                    </div>
                    <div className="absolute block p-0 text-sm font-semibold text-white uppercase landing-[1.3] nav-link-down is--first custom-3d-style">
                      Project
                    </div>
                  </div>
                </div>
              </a>
              {/* {skills} */}
              <a
                href="#skills"
                // class="hover_link_wrap w-inline-block w--curent"
                className="mr-6 mb-[5.5vw] flex-none no-underline  hover:underline inline-block max-w-full bg-transparent"
              >
                <div
                  //   class="link_anim"
                  className="relative flex flex-col mr-0 overflow-visible"
                >
                  <div
                    // class="anim_wr"
                    className="relative flex flex-col overflow-visible"
                  >
                    <div
                      //   class="nav_link"
                      className="block p-0 text-sm font-semibold text-white uppercase custom-3d-transfrom"
                    >
                      skills
                    </div>
                    <div className="absolute block p-0 text-sm font-semibold text-white uppercase landing-[1.3] nav-link-down is--first custom-3d-style">
                      Skills
                    </div>
                  </div>
                </div>
              </a>
              {/* {Blogs} */}
              <a
                href="#blogs"
                // class="hover_link_wrap w-inline-block w--curent"
                className="mr-6 mb-[5.5vw] flex-none no-underline  hover:underline inline-block max-w-full bg-transparent"
              >
                <div
                  //   class="link_anim"
                  className="relative flex flex-col mr-0 overflow-visible"
                >
                  <div
                    // class="anim_wr"
                    className="relative flex flex-col overflow-visible"
                  >
                    <div
                      //   class="nav_link"
                      className="block p-0 text-sm font-semibold text-white uppercase custom-3d-transfrom"
                    >
                      blogs
                    </div>
                    <div className="absolute block p-0 text-sm font-semibold text-white uppercase landing-[1.3] nav-link-down is--first custom-3d-style">
                      Blogs
                    </div>
                  </div>
                </div>
              </a>
              {/* {contact} */}
              <a
                href="#contact"
                // class="hover_link_wrap w-inline-block w--curent"
                className="mr-6 mb-[5.5vw] flex-none no-underline  hover:underline inline-block max-w-full bg-transparent"
              >
                <div
                  //   class="link_anim"
                  className="relative flex flex-col mr-0 overflow-visible"
                >
                  <div
                    // class="anim_wr"
                    className="relative flex flex-col overflow-visible"
                  >
                    <div
                      //   class="nav_link"
                      className="block p-0 text-sm font-semibold text-white uppercase custom-3d-transfrom"
                    >
                      contact
                    </div>
                    <div className="absolute block p-0 text-sm font-semibold text-white uppercase landing-[1.3] nav-link-down is--first custom-3d-style">
                      Contact
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="relative flex items-center justify-end switch_wr">
              <div className="block p-0 text-white text-[0.83em] font-semibold uppercase mr-[5em]">
                dark mode
              </div>
              <a
                href=""
                className="max-w-full  absolute flex justify-end items-center self-center w-[3em] h-[1.5em] ml-0 border-2 border-white rounded-[30px] bg-[#0c1e3d] switch"
              >
                <div className="relative w-6 h-6 -mb-1 -mr-px bg-white border border-white rounded-full custom-3d-transfrom-1 switch_circ"></div>
              </a>
            </div>
          </div>
        </nav>
        <div
          className="relative float-right p-[18px] text-[24px] hidden cursor-pointer select-none z-10   items-start border border-transparent bg-transparent burger w-nav-button"
          aria-label="menu"
          role="button"
          tabIndex={"0"}

          // onClick={toggleMenu}
        >
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="w-7 h-0.5 mb-1.5 bg-gray-200 custom-3d-transfrom-2 up_line"></div>
            <div className="w-7 h-0.5 bg-gray-200 custom-3d-transfrom-2 down_line"></div>
          </div>
        </div>
        <div className="z-10  flex items-start border border-transparent bg-transparent relative float-right p-[18px] text-2xl  cursor-pointer select-none burger_2 w-nav-button">
          <div className="flex flex-col items-center justify-center flex-1 bt_wr">
            <div className="w-[30px] h-[2px] mb-[5px] pr-0 pb-0 bg-[#ececec]  custom-3d-transfrom-2 upline"></div>
            <div className="w-[30px] h-[2px] pr-0 pb-0 bg-[#ececec] custom-3d-transfrom-2  down_line"></div>
          </div>
        </div>
      </div>
    </>
  );
}
