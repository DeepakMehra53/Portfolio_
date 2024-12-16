import React from "react";
import LineOne from "../1_Line/LineOne.jsx";
import LineTwo from "../2_Line/LineTwo.jsx";
import LineThree from "../3_Line/LineThree.jsx";
import LineWrap from "../LineWrap/LineWrap.jsx";
import MobileButton from "../MobileButton/MobileButton.jsx";
import DesktopButton from "../DesktopButton/DesktopButton.jsx";



export default function Cover(){
    return (
      <>
        <div
          className="section cover"
          data-w-id="ab33e186-9bb6-eb9d-766f-b1908a2c71cb"
        >
          <div className="container w-container">
            <div className="cover_wrap">
                <LineOne/>
                <LineTwo/>
                <LineThree/>
                <LineWrap/>
            </div>
            <MobileButton/>
            <DesktopButton/>
          </div>
        </div>
      </>
    );
}