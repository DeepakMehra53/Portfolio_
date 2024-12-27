

const Discover = () => {
     const textContent = [
       "My name is Deepak Mehra,and I am a recent",
       "graduate with a BTech in Computer Science",
       "specializing in full-stack development and,",
       " passionate about building innovative software ",
       "solution. With expertise in front-end and back-end",
       "technologies,I create responsive, efficient, and scalable applications.",
       "My skill set includes React, Node.js, AWS, Python, and more.",
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