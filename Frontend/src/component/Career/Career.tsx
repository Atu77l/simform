import Footer from "../Layout/Footer"
import Navbar from "../Layout/Navbar"
import one from './../../assets/6.png'
import one1 from './../../assets/16.png'
import one2 from './../../assets/17.png'
import { FcBriefcase } from "react-icons/fc";




const Career = () => {
  
  return (
    <div className="flex flex-col bg-[#FAFBFF]">
      <Navbar />
      <div className="flex flex-row">
      <div className="flex flex-col justify-center text-center">
        <div className="text-[44px] font-[700] font-[CircularStd]">Learn.<span className="text-[red]">Grow.</span>Play</div>
        <div className="text-[24px] font-[600]">Learning,growth and work-life balance are
          foundation blocks of the work culture at Simform.This is because workforce satisfacrion forms an integral
          aspect of organization values at Simform.</div>
        <div className="flex text-center justify-center"><div className="bg-[#EF5366] rounded-md text-white text-center text-[24px] font-[CircularStd] font-[600] w-64">Join Simform Family</div></div>
      </div>
      <div className=""><img src={one} alt="career"/></div>
      </div>
      <div className="flex flex-col text-center justify-center">
        <div className="text-[22px] font-[700] font-[CircularStd]">Our Company culture is amazing and our Great Place to Work Certification proves it.</div>
      </div>
      <div className="flex flex-col">
        <div className="text-[32px] font-[700] font-[CircularStd] text-center justify-center">Learn Engineering Environment</div>
        <div className="flex flex-row gap-4">
          <div className="bg-white flex flex-col rounded-md shadow">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
            <div className="text-[18px] font-[600] font-[Graphik]">Latest engineering best practices</div>
            <div className="text-[18px] font-[500] font-[Graphik]">At Simform we have a passion for good engineering, and it reflects on the client we work with and the team we pick.</div>
          </div>
          <div className="bg-white flex flex-col rounded-md shadow">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
            <div className="text-[18px] font-[600] font-[Graphik]">Tech horizontals agnostic</div>
            <div className="text-[18px] font-[500] font-[Graphik]">We are not focused on technology horizontals. Rather, we emphasize building scalable and robust software with advanced engineering.</div>
          </div>
          <div className="bg-white flex flex-col rounded-md shadow">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
            <div className="text-[18px] font-[600] font-[Graphik]">Agile and flexible teams</div>
            <div className="text-[18px] font-[500] font-[Graphik]">We build a very agile team for client's projects. So teams are lean enough to rapidly learn and adapt to newer technologies and practices.</div>
          </div>
        </div>
        <div className="flex flex-row rounded-md bg-gray-600 m-2">
        <div className="flex flex-col justify-center text-white gap-2">
          <div className="text-[22px] font-[500] font-[CircularStd] pl-4">**Young team, thriving culture</div>
          <div className="text-[22px] font-[500] font-[CircularStd] pl-4">**With our enthusiastic young team members, we have built a vibrant and open culture without bureaucratic hierarchies. </div>
          <div className="text-[22px] font-[500] font-[CircularStd] pl-4">**Young and ambitous team</div>
          <div className="text-[22px] font-[500] font-[CircularStd] pl-4">**Open and flat culture</div>
        </div>
        <div className="w-[200px] flex-grow"><img src={one1} alt="career" className="transform -skew-x-12"/></div>
        </div>
        <div className="flex flex-row mt-4">
        <div className="w-[400px] h-full"><img src={one2} alt="career" className="transform skew-x-12"/></div>
        <div className="flex flex-col p-4 flex-grow ml-4">
          <div className="text-[24px] font-[CircularStd]">1.Accelerate Career</div>
          <div className="text-[24px] font-[CircularStd]">2.Fast-paced learning is what drives our engineering culture.So the team gets to learn fast with a learning
            program,learning perks, and a clear career path.</div>
          <div className="text-[24px] font-[CircularStd]">3.Ample learning opportubities</div>
          <div className="text-[24px] font-[CircularStd]">4.Well-defined career path</div>
        </div>
        </div>
        <div className="font-[600] text-center justify-center text-[32px] font-[CircularStd] text-[red]">Benefits</div>
        <div className="grid grid-cols-3 gap-2 ml-5 mr-5">
          <div className="flex flex-col bg-white rounded-md p-1 gap-1  shadow">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
            <div className="text-[20px] font-[600] font-[CircularStd]">Flexible timing,leaves benefits for life events</div>
            <div className="text-[20px] font-[500] font-[CircularStd]">Flexible timing and work hours.Wedding,Parenthood,Bereavement leaves.10-12 holidays,10 Casual leaves, 8 emergency leaves.</div>
          </div>
          <div className="flex flex-col bg-white rounded-md p-1 gap-1  shadow">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
            <div className="text-[20px] font-[600] font-[CircularStd]">Great recreational facilities</div>
            <div className="text-[20px] font-[500] font-[CircularStd]">Game lounge featuring pool table, table tennis, Foosball, Gaming consoles and more.</div>
          </div>
          <div className="flex flex-col bg-white rounded-md p-1 gap-1  shadow">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
            <div className="text-[20px] font-[600] font-[CircularStd]">Free Health insurance</div>
            <div className="text-[20px] font-[500] font-[CircularStd]">Free 5Lac family coverage with zero co-pay, no room rent cap, pre-existing disease covered from day one and the maternity cover.</div>
          </div>
          <div className="flex flex-col bg-white rounded-md p-1 gap-1  shadow">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
            <div className="text-[20px] font-[600] font-[CircularStd]">Free snacks and highly affordable homely lunch</div>
            <div className="text-[20px] font-[500] font-[CircularStd]">Free snack in the evening. Healthy and hygienic lunch service at ₹400/month.</div>
          </div>
          <div className="flex flex-col bg-white rounded-md p-1 gap-1  shadow">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
            <div className="text-[20px] font-[600] font-[CircularStd]">Sponsorship for certifications/events, Library service</div>
            <div className="text-[20px] font-[500] font-[CircularStd]">Sponsorship for certification preparation, attending some events etc. Online courses subscriptions and physical library.</div>
          </div>
          <div className="flex flex-col bg-white rounded-md p-1 gap-1  shadow">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
            <div className="text-[20px] font-[600] font-[CircularStd]">Work from home</div>
            <div className="text-[20px] font-[500] font-[CircularStd]">25 day of work from home after completing one year into the company.</div>
          </div>
        </div>
        <div className="flex text-center justify-center rounded-md shadow flex-col bg-white p-2 m-2">
          <div className="text-[22px] font-[700] font-[CircularStd]">Are you looking for a Job change?</div>
          <div className="text-[22px] font-[500] font-[CircularStd]">We are hiring, nah we are growing our family..Lets work together.</div>
          <div className="flex text-center justify-center"><div className="text-[19px] text-white bg-[#EF5366] p-1 rounded-md font-semibold pl-4 pr-4 font-[CircularStd]">CHECK OPENINGS AND APPLY</div></div>
        </div>
          <div className="rounded-md m-5 bg-blue-500 flex flex-col gap-2 p-2">
          <div className="text-white font-semibold text-[22px] font-[CircularStd]">Your passion begins here..!!</div>
          <div className="text-white font-semibold text-[22px] font-[CircularStd]">Explore numerous job</div>
          <div className="text-white font-semibold text-[22px] font-[CircularStd]">opportunities</div>
          <div className="w-[400px] rounded-lg h-10 font-semibold text-[22px] p-1 bg-white border-2 border-white text-blue-600 font-[CircularStd]">CHECK OPENINGS AND APPLY</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Career