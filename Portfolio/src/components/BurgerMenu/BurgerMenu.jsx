import './BurgerMenu.css'
export default function BurgerMen (){
    return (
      <>
        <div className="burger w-nav-button">
          <div className="bt_wr_2">
            <div className="up_line"></div>
            <div className="down_line"></div>
          </div>
        </div>
        <div className="burger_2 w-nav-button">
          <div className="bt_wr">
            <div className="up_line white"></div>
            <div className="down_line white"></div>
          </div>
        </div>
      </>
    );
}