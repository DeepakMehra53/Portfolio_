import BottomLineOne from "../../assets/BottomLineOne.svg";
import BottomLineTwo from "../../assets/BottomLineTwo.svg";
import BottomLineThree from "../../assets/BottomLineThree.svg";
import BottomLineFour from "../../assets/BottomLineFour.svg";
import BottomLineFive from "../../assets/BottomLineFive.svg";




const BottomLine=()=>{
    return(
        <>
            <div className="bottom_lines_wr">
                <img src={BottomLineOne} alt="" />
                <img src={BottomLineTwo} alt="" />
                <img src={BottomLineThree} alt="" />
                <img src={BottomLineFour} alt="" />
            </div>
            <div className="aroow_down_wr">
                <img src={BottomLineFive} alt="" />
            </div>
        </>
    )
}
export default BottomLine;