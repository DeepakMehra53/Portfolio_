import First from "../../assets/First.svg"
import Second from "../../assets/Second.svg"
import Third from "../../assets/Third.svg"
import Forth from "../../assets/Forth.svg"
import Fifth from "../../assets/Fifth.svg"

export const ProjectIntroImages = () => {
  return (
    <div className="sqare_wrap">
        <img src={First} alt="" className="sqare_4"/>
        <img src={Second} alt="" className="sqare_3"/>
        <img src={Third} alt="" className="sqare_2"/>
        <img src={Forth} alt="" className="sqare_1"/>
        <img src={Fifth} alt="" className="sqare_1_2"/>
    </div>
  )
}
