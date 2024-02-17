import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"
import ten from './../../assets/6.png'
import four from './../../assets/4.png'
import ten3 from './../../assets/16.png'
import ten1 from './../../assets/14.png'
import ten2 from './../../assets/18.png'
import { FcBriefcase } from "react-icons/fc";
import { useNavigate } from "react-router-dom"

const About = () => {
  const navigate=useNavigate();
  return (
    <div className="bg-[#FAFBFF]">
      <Navbar />
      {/* SEction :1 */}
      <div className="text-[44px] font-[CircularStd] text-center justify-center">
      Empowering Your Digital Innovation Team
      </div>
      <div className="flex text-center justify-center"><img src={ten} alt="logo" className="h-[400px]" /></div>
      <div className="flex flex-col m-20">
        <div className="font-[Graphik] text-[22px] text-center justify-center">In an era where technological prowess defines competitiveness, every organization, regardless of size or industry, must embrace the digital transformation journey. That's where we come in. At SkyScout, we're dedicated to empowering startups with the tools and strategies they need to thrive in the digital age.</div>

        <div className="font-[Graphik] text-[22px] text-center justify-center">Since our inception in [year], we've been at the forefront of driving innovation and solving complex software engineering challenges for a diverse range of startup ventures. From burgeoning tech startups to forward-thinking enterprises, we've enabled our clients to realize their full potential and achieve remarkable growth milestones.</div>

        <div className="font-[Graphik] text-[22px] text-center justify-center">At our Product Innovation Center, we're committed to transforming engineering bottlenecks into catalysts for growth. Through cutting-edge technology practices like DevOps, cloud-native development, and quality engineering services, we help startups identify and overcome critical business hurdles.</div>

        <div className="font-[Graphik] text-[22px] text-center justify-center">Our agile teams of remote engineers are fully immersed in your project, seamlessly integrating with your company culture and aligning with your strategic objectives. Together, we'll chart a course towards success, ensuring that your startup not only survives but thrives in today's competitive landscape."</div>
      </div>
      {/* Section: 2 */}
      <div className="flex flex-row bg-white">
        <div className="flex flex-col text-center justify-center p-2 ml-20">
          <div className="text-[40px] font-[700] font-[CircularStd] text-left"><span className="text-[#2D5BFF]">Explore</span> For Opportunites</div>
          <div className="text-[40px] font-[600] font-[CircularStd] text-left">Here..</div>
          <div className="flex justify-start"><div className="text-[19px] rounded text-white bg-[#2D5BFF] p-2 w-60 justify-center text-center cursor-pointer" onClick={()=>{navigate('/opening');}}>Explore Our Opening</div></div>
        </div>
        <div className="flex justify-center flex-grow"><img src={four} alt="logo" className="h-[260px]" /></div>
      </div>
      {/* section 3 */}
      <div className="font-[600] text-[36px] text-center justify-center font-[CircularStd]">Begin Your <span className="text-[#2D5BFF]">Potential</span> With Us</div>
      <div className="flex flex-row m-5">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col w-[400px] ml-10 hover:bg-green-200 p-3">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{ fontSize: "40px" }} /></div>
            <div className="font-[500] text-[30px]">Health Benefits</div>
            <div className="text-[24px] font-[Graphik]">We work best when the people we care are healthy. Our health program empowers you to be worry-free.</div>
          </div>
          <div className="flex flex-col w-[400px] ml-10 hover:bg-orange-200 p-3">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{ fontSize: "40px" }} /></div>
            <div className="font-[500] text-[30px]">Mentorship and Learning</div>
            <div className="text-[24px] font-[Graphik]">Never stop learning by getting an online or in-person mentoring on ANY topic you want to grow in.</div>
          </div>
        </div>
        <div className="relative flex-grow">
          <img src={ten3} alt="logo" className="absolute left-[300px] h-[160px] bottom-[200px] z-0" />
          <img src={ten1} alt="logo1" className="absolute left-[400px] h-[160px] z-20" />
          <img src={ten2} alt="logo2" className="absolute left-[200px] h-[160px] bottom-[50px] z-10" />
        </div>
      </div>
      <div className="flex flex-row m-5">
        <div className="relative flex-grow">
          <img src={ten3} alt="logo" className="absolute left-[300px] h-[160px] bottom-[200px] z-0" />
          <img src={ten1} alt="logo1" className="absolute left-[400px] h-[160px] z-20 bottm-[100px]" />
          <img src={ten2} alt="logo2" className="absolute left-[200px] h-[160px] bottom-[50px] z-10" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col w-[400px] mr-10 hover:bg-yellow-200 p-3">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{ fontSize: "40px" }} /></div>
            <div className="font-[500] text-[30px]">Flexibility to work</div>
            <div className="text-[24px] font-[Graphik]">Stay inspired to work however and whatever technologies you find your best productive self in.</div>
          </div>
          <div className="flex flex-col w-[400px] mr-10 hover:bg-red-200 p-3">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{ fontSize: "40px" }} /></div>
            <div className="font-[500] text-[30px]">Level up career</div>
            <div className="text-[24px] font-[Graphik]">Work with internationally recognized clients and take ownership of how you work to build things.</div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex text-center justify-center m-5"><div className="text-[19px] text-[#2D5BFF] rounded w-60 border-2 border-[#2D5BFF] cursor-pointer hover:bg-[#2D5BFF] hover:text-white" onClick={()=>{navigate('/opening');}}>Explore Our Opening</div></div>
      <Footer />
    </div>
  )
}

export default About