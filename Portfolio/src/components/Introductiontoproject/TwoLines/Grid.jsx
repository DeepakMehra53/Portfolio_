
import { Div_grid } from "./Div_grid"
import { Div_Grid_Two } from "./Div_Grid_Two"
import  Circlegrid from "../../../assets/Circlegrid-1.svg"
import Circlegrid2 from "../../../assets/Criclegrid-2.svg"
export const Grid = () => {
  return (
    
    <div className="grid w-layout-grid">
      <Div_grid />
      <Div_Grid_Two />
      <img src={Circlegrid} alt="" className="circle_grid" />
      <img src={Circlegrid2} alt="" className="circle_grid_2 on" />
    </div>
    
  );
}
