import Navbar from "./Navbar1";
export default function () {
  return (
    <>
      <div
        id="home"
        data-w-id="0e218e3a-0bda-be87-276e-bd6329bfc828"
        class="relative overflow-visible h-screen _100vh"
      >
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration="800"
          data-w-id="045f99fe-ac6b-eb28-1f16-d72c0e5c6055"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="absolute inset-x-0 top-0 h-[5.8em] bg-transparent text-white  bg-[#dddddd] z-[1000] navbar w-nav"
        >
          <div className="z-[5] max-w-full pr-10 pl-10 mx-auto  container w-container">
            <Navbar/>
          </div>
        </div>
      </div>
    </>
  );
}
