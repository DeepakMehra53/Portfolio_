import Navbar from "../Navbar/Navbar";
import Cover from "../Cover/Cover.jsx";
import BottomLine from "../BottomLines/BottomLine.jsx";
import Blur from "../Blur-Background/Blur.jsx";
import Discover from "../Discover/Discover.jsx";
import Lines from "../Lines/Lines.jsx"
export default function Section() {
  return (
    <div
      id="lu"
      data-w-id="bcbd74d8-d86f-f80a-dddc-9ce2540ad919"
      className="_1_st_section_wrap "
    >
      <div
        id="home"
        data-w-id="0e218e3a-0bda-be87-276e-bd6329bfc828"
        className="_100vh "
        >
        <Navbar /> 
        <Cover />
        <BottomLine/>
        
        
      </div>
        <Discover/>
        <Blur/>
        <Lines/>
    </div>
  );
}
