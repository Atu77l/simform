import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"

const About = () => {
  return (
    <div>
        <Navbar/>
        {/* SEction :1 */}
        <div className="text-[44px] font-[CircularStd] text-center justify-center">
        Team that Engineers your Next Digital Product
        </div>
        <div className="flex flex-col m-20">
        <div className="font-[Graphik] text-[22px] text-center justify-center">Nearly every organization will need to become a tech company in order to compete tomorrow. Yes, even yours. At Simform, we are on a mission to help companies develop competitiveness and agility using the software.</div>

        <div className="font-[Graphik] text-[22px] text-center justify-center">We are a product engineering company with a mission to solve complex software engineering problems. Founded in 2010, we have helped organizations ranging from Startups that went public, to Fortune 500 companies, and progressive Enterprises.</div>

        <div className="font-[Graphik] text-[22px] text-center justify-center">Our Product Innovation Center transforms your engineering from being bottlenecks to growth drivers. We help you to identify and solve critical business challenges with proven technology practices such as DevOps, cloud-native development, and quality engineering services. Our remote agile teams of engineers immerse themselves in your project, maintaining your company culture and working in line with your strategic goals.</div>
        </div>
        {/* Section: 2 */}
        <div className="flex flex-col text-center justify-center">
        <div className="text-[48px] font-[700] font-[CircularStd]">Choose Your Own Grow Path</div>
        <div className="text-[19px] text-white bg-[#EF5366] p-1 w-60 justify-center text-center">Explore Our Opening</div>
      </div>
      {/* Section 3 */}
      <div className="text-[19px] text-[#EF5366] w-60 border-2 border-[#EF5366]">Explore Our Opening</div>
        <Footer/>
    </div>
  )
}

export default About