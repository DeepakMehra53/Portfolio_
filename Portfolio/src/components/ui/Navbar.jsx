import React from "react";
import whiteLogo from "../../assets/White.svg";
import blackLogo from "../../assets/Black.svg";
export default function Navbar() {
  return (
    <>
      <div className="relative flex flex-row items-center justify-between py-6">
        <div>
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
            />
            <img src={blackLogo} alt="" />
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
                className="mr-6 mb-[5.5vw] flex-none no-underline hover:underline inline-block max-w-full"
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
                    <div className="absolute block p-0 text-sm font-semibold text-white uppercase landing-[1.3] nav-link-down is--first custom-3d-transfrom">
                      Home
                    </div>
                  </div>
                </div>
              </a>
              {/* Introduction */}
              <a
                href="#introduction"
                className="inline-block max-w-full mr-6 no-underline hover_link_wrap w-inline-block "
              >
                <div className="relative flex flex-col mr-0 overflow-visible link_anim">
                  <div className="relative flex flex-col overflow-visible anim_wr">
                    <div className="block p-0 text-sm font-semibold text-white uppercase custom-3d-transfrom nav-link">
                      Introduction
                    </div>
                    <div className="absolute block p-0 text-sm font-semibold text-white uppercase nav-link-down is--second custom-3d-transfrom">
                      Introduction
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="#projects"
                className="inline-block max-w-full mr-6 no-underline hover_link_wrap w-inline-block"
              >
                <div className="relative flex flex-col mr-0 overflow-visible link_anim">
                  <div className="relative flex flex-col overflow-visible anim_wr">
                    <div className="block p-0 text-sm font-semibold text-white uppercase custom-3d-transfrom nav-link">
                      Projects
                    </div>
                    <div>Projects</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
