import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const style: React.CSSProperties = {
    color: "blue",
  };

  return <div style={style} className="flex flex-col h-12 shadow bg-white">
    <div className="grid grid-cols-2 p-1">
      <div className="flex flex-row text-xl p-1 gap-4">
        <Link to='/'><div className="font-semibold text-[#2D5BFF]">SkyScraper</div></Link>
        <Link to='/about'><div className="text-black hover:text-[#2D5BFF] text-[16px] cursor-pointer">About Us</div></Link>
        <Link to='/service'><div className="text-black hover:text-[#2D5BFF] text-[16px] cursor-pointer">Our Service</div></Link>
        <Link to='/blog'><div className="text-black hover:text-[#2D5BFF] text-[16px] cursor-pointer">Blog</div></Link>
        <Link to='/career'><div className="text-black hover:text-[#2D5BFF] text-[16px] cursor-pointer">Career</div></Link>
        <Link to='/technology'><div className="text-black hover:text-[#2D5BFF] text-[16px] cursor-pointer">Technology</div></Link>
      </div>
      <div className="flex justify-end p-1">
        <Link to='/contact'><div className="flex text-center p-1 rounded-md font-[600px] justify-center bg-[#2D5BFF] w-36 text-white">
          Contact Us
        </div></Link></div>
    </div>
  </div>;
};

export default Navbar;
