import React from "react";

const Navbar = () => {
  const style: React.CSSProperties = {
    color: "blue",
  };
  
  return <div style={style} className="flex flex-col h-16 shadow bg-white">
  <div className="grid grid-cols-2">
    <div className="flex flex-row text-xl justify-around">
      <div className="">Logo</div>
      <div className="">About Us</div>
      <div className="">Our Work</div>
      <div className="">Ebooks</div>
      <div className="">Blog</div>
      <div className="">Technology Comparison</div>
      <div className="">How it Works</div>
    </div>
    <div className="flex text-center p-1 rounded justify-center bg-red-400 w-36 text-white">
      Contact Us
    </div>
  </div>
  <div className="flex flex-row justify-around">
    <div className="">Product Engineering</div>
    <div className="">Cloud/Devops Engineering</div>
    <div className="">Data Engineering</div>
    <div className="">Quality Engineering</div>
  </div>
  </div>;
};

export default Navbar;
