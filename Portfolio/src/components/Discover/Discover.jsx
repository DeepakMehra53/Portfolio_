import React from 'react'

const Discover = () => {
     const textContent = [
       "My name is Deepak Mehra, and I am a recent graduate with a BTech in Computer Science",
       "specializing in full-stack development and passionate about building innovative software solutions.",
       "With expertise in front-end and back-end technologies, I create responsive, efficient, and scalable applications.",
     ];

     const mobileTextContent = [
       "My skill set includes React, Node.js, AWS, Python, and more.",
       "Driven by problem-solving and collaboration, I aim to make complex systems simple and user-friendly.",
       "With a strong foundation in Computer Science, I am eager to apply my knowledge to real-world projects and continue learning.",
     ];
     
  return (
    <div id="discover" className="big_tx_wrap">
      {textContent.map((text, index) => (
        <div key={index} className="big_tx_div">
          <div className="big_tx">{text}</div>
        </div>
      ))}
    </div>
  );
}

export default Discover