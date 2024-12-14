import { useState } from "react"
import "./Switch.css"
export default function Switch(){
    const [isDarkMode,setDarkMode]=useState(false)
    const toggleDarkMode=()=>{
        setDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode')
    }
    return (
      <div className="switch_wr">
        <div className="nav-link sw">Dark Mode</div>
        <a href="#" onClick={toggleDarkMode} className="switch w-inline-block">
          <div className={`switch_circ ${isDarkMode ? "active" : ""}`}></div>
        </a>
      </div>
    );
}