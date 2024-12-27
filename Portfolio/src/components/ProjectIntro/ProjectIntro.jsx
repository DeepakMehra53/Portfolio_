import Rightarrow from "../../assets/Rightarrow.svg"
import { ProjectIntroImages } from "../ProjectIntroImages/ProjectIntroImages"
export const ProjectIntro = () => {
  return (
    <div className="Konsul_2">
        <div className="_43 sqaure">
            <ProjectIntroImages/>
            <div className="arrow_2_wr">
                <img src={Rightarrow} alt="" loading="lazy"  className="aroow_2"/>
            </div>
        </div>
    </div>
  )
}

