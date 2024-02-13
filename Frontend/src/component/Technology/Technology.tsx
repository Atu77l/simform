import Footer from "../Layout/Footer"
import Navbar from "../Layout/Navbar"
import { useState } from "react"
import { FcMultipleDevices } from "react-icons/fc";
import { PiAddressBookDuotone } from "react-icons/pi";



const Technology = () => {
  const [tech,setTech]=useState('Social Media')
  return (
    <div className="bg-[#FAFBFF]">
      <Navbar/>
      <div className="text-[40px] text-center justify-center font-[CircularStd]">Simple -- Blog -- Technology Comparison</div>
      <div className="flex flex-row">
      <div className="flex flex-row">
      <div className="text-xl text-red-600 bg-white">Select Category :</div>
      <select value={tech} onChange={(e)=>{setTech(e.target.value)}} className="bg-[#EFEFEF] outline-0 border-[1px]">
        <option value="">Digital Marketing</option>
        <option value="">Social Media</option>
        <option value="">You Tube Maintenance</option>
      </select>
      </div>
      <div className="flex justify-end flex-grow"><div className="bg-[#EF5366] text-white mr-4 p-1 text-center  w-44 rounded-md">Explore Our Blog</div></div>
      </div>
      <div className="text-[28px] font-[600] font-[CircularStd] ml-4">List of Blog</div>
      <div className="flex flex-col ml-4">
        <div className="text-[20px] flex flex-row">1.<FcMultipleDevices/>React vs Vue vs Angular</div>
        <div className="text-[20px] flex flex-row">2.<PiAddressBookDuotone/>JavaScript vs TypeScript</div>
        <div className="text-[20px] flex flex-row">3<FcMultipleDevices/>.Azure vs Google Cloud vs AWS</div>
        <div className="text-[20px] flex flex-row">4.<FcMultipleDevices/>C vs C++ vs Java vs Python</div>
        <div className="text-[20px] flex flex-row">5.<FcMultipleDevices/>Digital Marketing vs Network Marketing</div>
        <div className="text-[20px] flex flex-row">6.<FcMultipleDevices/>Meta Ads</div>
        <div className="text-[20px] flex flex-row">7.<FcMultipleDevices/>You Tube Monitoring</div>
        <div className="text-[20px] flex flex-row">9.<FcMultipleDevices/>Materil UI</div>
        <div className="text-[20px] flex flex-row">10.<FcMultipleDevices/>Tailwind CSS</div>
        <div className="text-[20px] flex flex-row">11.<FcMultipleDevices/>React Icons</div>
        <div className="text-[20px] flex flex-row">12.<FcMultipleDevices/>Flask vs FastApi vs Django</div>
        <div className="text-[20px] flex flex-row">13.<FcMultipleDevices/>Django</div>

      </div>
      <Footer/>
    </div>
  )
}

export default Technology