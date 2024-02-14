import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"
import ten from './../../assets/6.png'
import four from './../../assets/4.png'
import ten3 from './../../assets/16.png'
import ten1 from './../../assets/14.png'
import ten2 from './../../assets/18.png'
import { FcBriefcase } from "react-icons/fc";


const About = () => {
  return (
    <div className="bg-[#FAFBFF]">
      <Navbar />
      {/* SEction :1 */}
      <div className="text-[44px] font-[CircularStd] text-center justify-center">
        Team that Engineers your Next Digital Product
      </div>
      <div className="flex text-center justify-center"><img src={ten} alt="logo" className="h-[400px]" /></div>
      <div className="flex flex-col m-20">
        <div className="font-[Graphik] text-[22px] text-center justify-center">Nearly every organization will need to become a tech company in order to compete tomorrow. Yes, even yours. At Simform, we are on a mission to help companies develop competitiveness and agility using the software.</div>

        <div className="font-[Graphik] text-[22px] text-center justify-center">We are a product engineering company with a mission to solve complex software engineering problems. Founded in 2010, we have helped organizations ranging from Startups that went public, to Fortune 500 companies, and progressive Enterprises.</div>

        <div className="font-[Graphik] text-[22px] text-center justify-center">Our Product Innovation Center transforms your engineering from being bottlenecks to growth drivers. We help you to identify and solve critical business challenges with proven technology practices such as DevOps, cloud-native development, and quality engineering services. Our remote agile teams of engineers immerse themselves in your project, maintaining your company culture and working in line with your strategic goals.</div>
      </div>
      {/* Section: 2 */}
      <div className="flex flex-row bg-white">
        <div className="flex flex-col text-center justify-center p-2 ml-20">
          <div className="text-[40px] font-[700] font-[CircularStd] text-left">Choose Your Own</div>
          <div className="text-[40px] font-[700] font-[CircularStd] text-left">Grow Path</div>
          <div className="flex justify-center"><div className="text-[19px] rounded text-white bg-[#EF5366] p-2 w-60 justify-center text-center">Explore Our Opening</div></div>
        </div>
        <div className="flex justify-end flex-grow"><img src={four} alt="logo" className="h-[260px]" /></div>
      </div>
      {/* section 3 */}
      <div className="font-[600] text-[36px] text-center justify-center font-[CircularStd]">Unleash Your Potential</div>
      <div className="flex flex-row m-5">
        <div className="flex flex-col">
          <div className="flex flex-col w-[400px]">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{ fontSize: "40px" }} /></div>
            <div className="font-[500] text-[30px]">Health Benefits</div>
            <div className="text-[24px] font-[Graphik]">We work best when the people we care are healthy. Our health program empowers you to be worry-free.</div>
          </div>
          <div className="flex flex-col w-[400px]">
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
          <img src={ten1} alt="logo1" className="absolute left-[400px] h-[160px] z-20" />
          <img src={ten2} alt="logo2" className="absolute left-[200px] h-[160px] bottom-[50px] z-10" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col w-[400px]">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{ fontSize: "40px" }} /></div>
            <div className="font-[500] text-[30px]">Flexibility to work</div>
            <div className="text-[24px] font-[Graphik]">Stay inspired to work however and whatever technologies you find your best productive self in.</div>
          </div>
          <div className="flex flex-col w-[400px]">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{ fontSize: "40px" }} /></div>
            <div className="font-[500] text-[30px]">Level up career</div>
            <div className="text-[24px] font-[Graphik]">Work with internationally recognized clients and take ownership of how you work to build things.</div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex text-center justify-center m-5"><div className="text-[19px] text-[#EF5366] w-60 border-2 border-[#EF5366]">Explore Our Opening</div></div>
      <Footer />
    </div>
  )
}

export default About