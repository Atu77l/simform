import Navbar from "../Layout/Navbar"
import Footer from './../Layout/Footer'
import five from './../../assets/7.png'
import { FcAndroidOs, FcBriefcase } from "react-icons/fc";
import { FcBarChart } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FcBusiness } from "react-icons/fc";
import { FcSelfServiceKiosk } from "react-icons/fc";
import { EMAIL_SUBSCRIPTION } from "../../constant/Constant";
import axios from "axios";
import one from './../../Image/5.png'





const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('')
  const subscribe = async () => {
    const data = { "email": email }
    let config = { method: "post", maxBodyLength: Infinity, url: EMAIL_SUBSCRIPTION, headers: { "Content-Type": "application/json" }, data: data };
    try {
      const response = await axios.request(config);
      console.log(response)
    } catch (error: any) {
      console.log(error, 'error at calculate margin')
    }
  }

  return (
    <div className="bg-[#FAFBFF] w-full">
      <Navbar />
      {/* Introduction */}
      <div className="flex flex-row bg-white m-2">
        <div className="flex flex-col w-[600px] justify-center text-center ml-20">
          <div className="text-[44px] text-left font-[600] font-[CircularStd]">Revolutionizing the digital landscape with innovation that <span className="text-[#2D5BFF]">sparks the future.</span></div>
          <div className="text-[28px] text-left font-[CircularStd]">Agile in mind,spirit and speed</div>
          <div className="flex text-left justify-start"><div className="text-center justify-center text-[24px] rounded-lg font-[CircularStd] bg-[#2D5BFF] p-2 text-white">Scale your dream team</div>
          </div></div>
        <div className="flex flex-grow"><img src={five} alt="logo" className="h-[300px] w-full" /></div>
      </div>
      {/* End: Introduction */}
      {/* product teams */}
      <div className="flex flex-col">
        <div className="text-[44px] font-[CircularStd] text-center justify-center">World-class agile product teams to <span className="border-b-8 border-[#2D5BFF]">scale your business</span></div>
        <div className="flex flex-row justify-around ml-5 mr-5">
          <div className="grid grid-cols-4 rounded gap-2 mt-10">
            <div className="flex flex-col rounded bg-white p-4 m-2 hover:bg-green-200 transition-transform duration-300 transform hover:-translate-y-1">
              <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBusiness style={{ fontSize: "40px" }} /></div>
              <div className="text-[22px] font-[600]">Programming & Tech</div>
              <div className="text-[20px]">Solve your unique business problem using various different programming language and technology.</div>
            </div>
            <div className="flex flex-col rounded bg-white p-4 m-2 hover:bg-yellow-200 transition-transform duration-300 transform hover:-translate-y-1">
              <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcSelfServiceKiosk style={{ fontSize: "40px" }} /></div>
              <div className="text-[22px] font-[600]">Web and Mobile Application</div>
              <div className="text-[20px]">Solve your businness problem using mobile and web application with responsiveness.</div>
            </div>
            <div className="flex flex-col rounded bg-white p-4 m-2 hover:bg-orange-200 transition-transform duration-300 transform hover:-translate-y-1">
              <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcAndroidOs style={{ fontSize: "40px" }} /></div>
              <div className="text-[22px] font-[600]">Digital Marketing</div>
              <div className="text-[20px]">Solve your problem related to marketing and ads service.</div>
            </div>
            <div className="flex flex-col rounded bg-white p-4 m-2 hover:bg-red-200 transition-transform duration-300 transform hover:-translate-y-1">
              <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{ fontSize: "40px" }} /></div>
              <div className="text-[22px] font-[600]">Consultant</div>
              <div className="text-[20px]">Solve your unique business problems by building impactful software products.</div>
            </div>
          </div>
        </div>
      </div>
      {/* End : Product teams */}
      {/* why us */}
      {/* <div className="flex flex-col flex-grow">
        <div className="text-[44px] font-[CircularStd] text-center justify-center">Why Organizations <span className="border-b-8 border-[#2D5BFF]">Choose SkyScraper</span></div>
        <div className="text-[22px] font-[CircularStd] text-center justify-center">Discover the many ways in which our clients have embraced the benefits of SkyScraper way of engineering.</div>
        <div className="grid grid-cols-2 ml-20 mr-20 gap-4">
          <div className="text-[16px] font-[600] flex flex-row justify-center transition-transform duration-300 transform hover:-translate-y-1"><div className="rounded-full flex text-center justify-center w-12 h-12 m-2 bg-orange-300"><FcDepartment style={{fontSize:"40px"}}/></div><div className="p-2">Managed Agile Team</div></div>
          <div className="text-[16px] font-[600] flex flex-row justify-center transition-transform duration-300 transform hover:-translate-y-1"><div className="rounded-full flex text-center justify-center w-12 h-12 m-2 bg-orange-300"><FcBearish style={{fontSize:"40px"}}/></div><div className="p-2">Complex Core Development</div></div>
          <div className="text-[16px] font-[600] flex flex-row justify-center transition-transform duration-300 transform hover:-translate-y-1"><div className="rounded-full flex text-center justify-center w-12 h-12 m-2 bg-orange-300"><FcConferenceCall style={{fontSize:"40px"}}/></div><div className="p-2">Scale Without Limits</div></div>
          <div className="text-[16px] font-[600] flex flex-row justify-center transition-transform duration-300 transform hover:-translate-y-1"><div className="rounded-full flex text-center justify-center w-12 h-12 m-2 -ml-32 bg-orange-300"><FcBusinessContact style={{fontSize:"40px"}}/></div><div className="p-2">Efficient</div></div>
        </div>
      </div> */}
      {/* End : Why us */}

      {/* Guarantee */}
      <div className="flex flex-row bg-white">
        <div className="flex flex-grow text-center justify-center"><img src={one} alt="h" className="w-[400px]" /></div>
        <div className="flex flex-col bg-white m-5">
          <div className="text-[44px] font-[CircularStd] text-center justify-center">SkyScraper <span className="border-b-8 border-[#2D5BFF]">Guarantee</span></div>
          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-row rounded-md">
              <div className="rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{ fontSize: "40px" }} /></div>
              <div className="flex flex-col mt-2 p-2">
                <div className="text-[22px] font-[600] font-[CircularStd]">Flexible,efficient scaling</div>
                <div className="text-[20px] font-[CircularStd]">Expand or reduce your remote team size on demand</div>
              </div>
            </div>
            <div className="flex flex-row rounded-md">
              <div className="rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBusinessContact style={{ fontSize: "40px" }} /></div>
              <div className="flex flex-col mt-2 p-2">
                <div className="text-[22px] font-[600] font-[CircularStd]">Team of Experienced Engineer</div>
                <div className="text-[20px] font-[CircularStd]">Tap into a curated pool of tech stack specialists tailored to your needs.</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row rounded-md">
            <div className="rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBarChart style={{ fontSize: "40px" }} /></div>
            <div className="flex flex-col mt-2 p-2">
              <div className="text-[22px] font-[600] font-[CircularStd]">Sustainability in the foreseeable future</div>
              <div className="text-[20px] font-[CircularStd]">SkyScraper’s average engagement duration is 2 years..</div>
            </div>
          </div>
          <div className="flex justify-start m-2"><div className="text-center justify-center font-semibold border-2 pl-4 pr-4 border-[#2D5BFF] flex text-[20px] font-[CircularStd] p-2 rounded-lg cursor-pointer" onClick={() => { navigate('/contact') }}>Work with us</div></div>
        </div>
      </div>
      {/* Guarantee */}


      {/* Start:  Sign Up For the free Newsletter */}
      <div className="flex flex-col p-2">
        <div className="text-[44px] font-[CircularStd] text-center justify-center">Sign up for the free Newsletter</div>
        <div className="text-[22px] font-[CircularStd] text-center justify-center">For exclusive strategies not found on the blog</div>
        <div className="flex flex-row justify-center">
          <div className="w-[600px] flex flex-row border-2 rounded-md">
            <input type="text" className="border-0 bg-[#EFEFEF] outline-0 rounded-l-lg flex-grow" value={email} onChange={(e) => { setEmail(e.target.value) }} ></input>
            <div className="rounded-md bg-[#2D5BFF] text-center font-[600] text-white text-[20px] pl-5 pr-5 p-2 cursor-pointer" onClick={() => { subscribe(); }}>SUBSCRIBE NOW</div>
          </div>
        </div>
      </div>
      {/* End:  Sign Up For the free Newsletter */}
      <Footer />
    </div>
  )
}

export default Home