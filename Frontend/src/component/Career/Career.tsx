import Footer from "../Layout/Footer"
import Navbar from "../Layout/Navbar"
import one from './../../assets/6.png'
import one1 from './../../assets/16.png'
import one2 from './../../assets/17.png'
import { FcBriefcase } from "react-icons/fc";
import { GoCheck } from "react-icons/go";
import { FcDatabase } from "react-icons/fc";
import { FcFactory } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const navigate=useNavigate();
  
  return (
    <div className="flex flex-col bg-[#FAFBFF]">
      <Navbar />
      <div className="flex flex-row bg-white mt-3">
      <div className="flex flex-col justify-center text-center ml-10">
        <div className="text-[44px] font-[600] font-[CircularStd] text-left">Learn.<span className="text-[#2D5BFF]">Grow.</span>Play</div>
        <div className="text-[24px] font-[500] font-[CircularStd] text-left">Learning,growth and work-life balance are
          foundation blocks of the work culture at SkyScraper.This is because workforce satisfacrion forms an integral
          aspect of organization values at SkyScraper.</div>
        <div className="flex text-center justify-start mt-3"><div className="bg-[#2D5BFF] cursor-pointer rounded-md text-white text-center text-[24px] font-[CircularStd] font-[500] w-64 p-1" onClick={()=>{navigate('/opening');}}>Join SkyScraper Family</div></div>
      </div>
      <div className="mt-3"><img src={one} alt="career"/></div>
      </div>
      <div className="flex flex-col">
        <div className="text-[32px] font-[700] font-[CircularStd] text-center justify-center">Learn Engineering <span className="border-b-2 border-[#2D5BFF]">Environment</span></div>
        <div className="flex flex-row gap-4 ml-20 mr-20">
          <div className="bg-white flex flex-col rounded-md shadow m-10 p-2 hover:bg-yellow-200 transition-transform duration-300 transform hover:-translate-y-1">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
            <div className="text-[22px] font-[600] font-[Graphik]">Latest engineering best practices</div>
            <div className="text-[20px] font-[500] font-[Graphik]">At SkyScraper we have a passion for good engineering, and it reflects on the client we work with and the team we pick.</div>
          </div>
          <div className="bg-white flex flex-col rounded-md shadow m-10 p-2 hover:bg-pink-200 transition-transform duration-300 transform hover:-translate-y-1">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcDatabase style={{fontSize:"40px"}}/></div>
            <div className="text-[22px] font-[600] font-[Graphik]">Tech horizontals agnostic</div>
            <div className="text-[20px] font-[500] font-[Graphik]">We are not focused on technology horizontals. Rather, we emphasize building scalable and robust software with advanced engineering.</div>
          </div>
          <div className="bg-white flex flex-col rounded-md shadow m-10 p-2 hover:bg-gray-200 transition-transform duration-300 transform hover:-translate-y-1">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcFactory style={{fontSize:"40px"}}/></div>
            <div className="text-[22px] font-[600] font-[Graphik]">Agile and flexible teams</div>
            <div className="text-[20px] font-[500] font-[Graphik]">We build a very agile team for client's projects. So teams are lean enough to rapidly learn and adapt to newer technologies and practices.</div>
          </div>
        </div>
        <div className="flex flex-row rounded-md m-2 bg-inherit">
        <div className="flex flex-col justify-center text-black gap-2">
          <div className="text-[28px] font-[700] font-[CircularStd] pl-4">Young team, thriving culture</div>
          <div className="text-[24px] font-[500] font-[CircularStd] pl-4">With our enthusiastic young team members, we have built a vibrant and open culture without bureaucratic hierarchies. </div>
          <div className="text-[22px] font-[500] font-[CircularStd] pl-4 flex flex-row"><GoCheck style={{backgroundColor:"#2D5BFF",borderRadius:"10px",marginTop:"7px",color:"white"}}/>Young and ambitous team</div>
          <div className="text-[22px] font-[500] font-[CircularStd] pl-4 flex flex-row"><GoCheck style={{backgroundColor:"#2D5BFF",borderRadius:"10px",marginTop:"7px",color:"white"}}/>Open and flat culture</div>
        </div>
        <div className="w-[200px] flex-grow"><img src={one1} alt="career" className="transform translate-x-3 rounded-md"/></div>
        </div>
        <div className="flex flex-row mt-4 ml-4">
        <div className="w-[400px] ml-4 h-full"><img src={one2} alt="career" className="transform rounded-md"/></div>
        <div className="flex flex-col p-4 flex-grow ml-4">
          <div className="text-[24px] font-[CircularStd]">1.Accelerate Career</div>
          <div className="text-[24px] font-[CircularStd]">2.Fast-paced learning is what drives our engineering culture.So the team gets to learn fast with a learning
            program,learning perks, and a clear career path.</div>
          <div className="text-[24px] font-[CircularStd]">3.Ample learning opportubities</div>
          <div className="text-[24px] font-[CircularStd]">4.Well-defined career path</div>
        </div>
        </div>
        <div className="font-[600] text-center justify-center text-[32px] font-[CircularStd] text-[#2D5BFF]">Bene<span className="border-b-8 border-[#2D5BFF]">fits</span></div>
        <div className="grid grid-cols-3 gap-2 ml-10 mr-20 mt-5">
          <div className="flex flex-col bg-white rounded-md p-3 gap-1  shadow hover:bg-red-200 transition-transform duration-300 transform hover:-translate-y-1">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
            <div className="text-[20px] font-[600] font-[CircularStd]">Flexible timing,leaves benefits for life events</div>
            <div className="text-[20px] font-[500] font-[CircularStd]">Flexible timing and work hours.Wedding,Parenthood,Bereavement leaves.10-12 holidays,10 Casual leaves, 8 emergency leaves.</div>
          </div>
          <div className="flex flex-col bg-white rounded-md p-3 gap-1 shadow hover:bg-yellow-200 transition-transform duration-300 transform hover:-translate-y-1">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
            <div className="text-[20px] font-[600] font-[CircularStd]">Great recreational facilities</div>
            <div className="text-[20px] font-[500] font-[CircularStd]">Game lounge featuring pool table, table tennis, Foosball, Gaming consoles and more.</div>
          </div>
          <div className="flex flex-col bg-white rounded-md p-3 gap-1 shadow hover:bg-green-200 transition-transform duration-300 transform hover:-translate-y-1">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
            <div className="text-[20px] font-[600] font-[CircularStd]">Free Health insurance</div>
            <div className="text-[20px] font-[500] font-[CircularStd]">Free 5Lac family coverage with zero co-pay, no room rent cap, pre-existing disease covered from day one and the maternity cover.</div>
          </div>
          <div className="flex flex-col bg-white rounded-md p-3 gap-1 shadow hover:bg-blue-200 transition-transform duration-300 transform hover:-translate-y-1">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
            <div className="text-[20px] font-[600] font-[CircularStd]">Free snacks and highly affordable homely lunch</div>
            <div className="text-[20px] font-[500] font-[CircularStd]">Free snack in the evening. Healthy and hygienic lunch service at ₹400/month.</div>
          </div>
          <div className="flex flex-col bg-white rounded-md p-3 gap-1 shadow hover:bg-purple-200 transition-transform duration-300 transform hover:-translate-y-1">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
            <div className="text-[20px] font-[600] font-[CircularStd]">Sponsorship for certifications/events, Library service</div>
            <div className="text-[20px] font-[500] font-[CircularStd]">Sponsorship for certification preparation, attending some events etc. Online courses subscriptions and physical library.</div>
          </div>
          <div className="flex flex-col bg-white rounded-md p-3 gap-1 shadow hover:bg-orange-200 transition-transform duration-300 transform hover:-translate-y-1">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
            <div className="text-[20px] font-[600] font-[CircularStd]">Work from home</div>
            <div className="text-[20px] font-[500] font-[CircularStd]">25 day of work from home after completing one year into the company.</div>
          </div>
        </div>
         <div className="grid grid-cols-2 bg-blue-500 ml-10 mr-20 mt-10 mb-10 rounded-lg">
          <div className="rounded-md m-5  flex flex-col gap-2 p-2">
          <div className="text-white font-semibold text-[32px] font-[CircularStd]">Your passion begins here..!!</div>
          <div className="text-white font-semibold text-[32px] font-[CircularStd]">Explore numerous job</div>
          <div className="text-white font-semibold text-[32px] font-[CircularStd]">opportunities</div>
        </div>
        <div className="flex text-center justify-center"><div className="mt-20 w-[400px] rounded-lg h-10 font-semibold text-[22px] p-1 bg-white border-2 border-white text-blue-600 font-[CircularStd]"  onClick={()=>{navigate('/opening');}}>CHECK OPENINGS AND APPLY</div></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Career