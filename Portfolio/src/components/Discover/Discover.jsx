

const Discover = () => {
     const textContent = [
       "My name is Deepak Mehra,and I am a recent",
       "graduate with a BTech in Computer Science.",
       "I specializing in full-stack development, focusing",
       "on building innovative, responsive, and scalable software solution with expertise in front-end  ",
       "and back-end technologies",
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