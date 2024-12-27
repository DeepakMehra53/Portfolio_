import {Firstsquar} from "../../assets/Firstsquar.svg";
import { Secondsquar } from "../../assets/Secondsquar.svg";
import { Thirdsquar } from "../../assets/Thirdsquar.svg";
import { Forthsquar } from "../../assets/Forthsquar.svg";
import {Fifthsquar} from "../../assets/Fifthsquar.svg";

export const ProjectIntro = () => {
  return (
    <div className="konsul_2">
      <div className="_43 square">
        <div data-w-id="acd26c56-3acd-1b27-078c-ece08e09e9a3"className="square_wrap">
            <img data-w-id="acd26c56-3acd-1b27-078c-ece08e09e9a3" style="opacity:0" src={Firstsquar} alt="" className="sqare_4"/>
            <img src={Secondsquar} alt="" className="sqare_3"/>
            <img src={Thirdsquar} alt="" className="sqare_2"/>
            <img src={Forthsquar} alt="" className="sqare_1"/>
            <img data-w-id="9f25df8a-3d1c-dc43-3114-b4dcf18c248c" src={Fifthsquar} alt="" className="sqare_1_2" />
        </div>
        <div></div>
      </div>
    </div>
  );
}
