
import Downarrow from "../../assets/Downarrow.svg"
import { Worksheet } from "../Worksheets/Worksheet";
import { ProjectIntro } from "../ProjectIntro/ProjectIntro"
const ThirdpageTagLine = () => {
  return (
    <div
      id="konsul_ai"
      data-w-id="a22c91aa-1312-6ed2-b63a-74c01a570eeb"
      className="Konsul_ai_wr"
    >
      <img
        src={Downarrow}
        alt=""
        data-w-id="efc14e61-b933-15bb-967c-d3bd42d50aaa"
        className="arrow_o"
      />
      <Worksheet/>
      <ProjectIntro/>
    </div>
  );
}

export default ThirdpageTagLine