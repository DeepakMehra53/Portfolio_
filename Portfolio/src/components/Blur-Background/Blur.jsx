import Blurbg from "../../assets/Blurbg-1.png";
import Blurbg2 from "../../assets/Blurbg-2.svg"
import Blurbg3 from "../../assets/Blurbg-3.jpg"
// import Blurbg4 from "../../assets/Blurbg-4.jpeg"
// import Blurbg5 from "../../assets/Blurbg-5.jpeg"
const Blur = () => {
  return (
    <div className="blur_bg_wrap">
      <div className="noize"></div>
      <img src={Blurbg} alt="" className="new_cover_blot_mob" />
      <div className="lines_wrap">
        <div className="vert_line_bg"></div>
      </div>
      <div className="circle_up_wr">
        <img src={Blurbg2} alt="" className="circle_up" />
      </div>
      <img
        src={Blurbg3}
        loading="lazy"
        sizes="100vw"
        srcSet={``}
        className="new_cover_blot"
      />
    </div>
  );
};

export default Blur;
