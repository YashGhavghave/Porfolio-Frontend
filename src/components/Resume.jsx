import React, { useState, useEffect } from "react";

function Resume() {
  const [angle, setAngle] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 2) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (

    
    <div
      className="absolute"
      style={{
        top: "5.8vh",    
        left: "5vw", 
      }}>

      
      <div className="relative p-[3px] rounded-full ">
        <div
          className="absolute inset-0 rounded-full blur-[40px] opacity-80  "
         style={{
            background: `conic-gradient(from ${angle}deg, transparent 0%, transparent 30%, #58DD93 45%, transparent 75%, transparent 100%)`,
          }}
        ></div>
        {/* Inner Rotating Glow Border */}
        <div
          className="absolute inset-3 rounded-full animate-spin-slow "
          style={{
            background: `conic-gradient(from ${angle}deg, transparent 0%, transparent 30%, #58DD93 50%, transparent 75%, transparent 100%)`,
          }}
        ></div>
        {/* Button */}
        <a
          href="https://drive.google.com/file/d/1zOdLcCeiYa2tpNxHuySsxNuAszWImShf/view?usp=sharing " target="_blank" rel="noreferrer"
          className="relative flex px-8  max-lg:px-26 py-3 text-lg max-xl:text-2xl font-semibold text-[#58DD93] hover:text-red-500 rounded-full bg-black/60 backdrop-blur-md border border-[#58DD93] shadow-[0px_0px_20px_rgba(88,221,147,0.5)] transition-transform hover:scale- hover:shadow-[0px_0px_40px_rgba(255,0,0,0.9)] active:scale-95 hover:border-red-500 active:border-red-500 active:shadow-[0px_0px_40px_rgba(255,0,0,0.9)] active:text-red-500">
             Get my Resume   
        </a>
      </div>
    </div>
  );
}

export default Resume;
