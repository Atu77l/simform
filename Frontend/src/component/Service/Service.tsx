import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"
import digitalMarket from './../../assets/18.png'
import web from './../../assets/26.png'
import mobile from './../../assets/29.png'
import soft from './../../assets/30.png'

const Service = () => {
  return (
    <div className="bg-[#FAFBFF]">
      <Navbar />
      <div className="text-[44px] font-[CircularStd] text-center justify-center font-[600]">Service and Development</div>
      <div className="flex flex-col bg-white p-4 m-4">
        <div className="text-[24px] font-[600] font-[CircularStd]">1.Web Application Development</div>
        <div className="grid grid-cols-2">
          <div className="font-[CircularStd] text-[18px]">At our company, we offer top-tier web application services, harnessing cutting-edge technologies such as React, Vite, JavaScript, TypeScript, and more. From front-end development to back-end implementation, our skilled team excels in crafting modern, responsive web applications tailored to your needs. Leveraging frameworks including Python, Flask, Spring Boot, Django, FastAPI, and beyond, we ensure robust, scalable solutions that drive your business forward. With our extensive experience and expertise, rest assured that your web application needs are in capable hands.</div>
          <div className="h-[200px] w-[600px]"><img src={web} className="w-[600px] h-[200px] rounded-lg" /></div>
        </div>
        <div className="text-[24px] font-[600] font-[CircularStd]">2.Mobile Application Development</div>
        <div className="grid grid-cols-2">
        <div className="h-[200px] w-[600px]"><img src={mobile} className="w-[600px] h-[200px] rounded-lg" /></div>
          <div className="font-[CircularStd] text-[18px]">Our company specializes in mobile application development, offering expertly crafted solutions by a proficient and collaborative team. We prioritize excellence in design, functionality, and engineering, ensuring seamless performance across a range of devices. Experience responsiveness like never before with our versatile solutions</div>
        </div>
        <div className="text-[24px] font-[600] font-[CircularStd]">3.Software Development</div>
        <div className="grid grid-cols-2">
          <div className="font-[CircularStd] text-[18px]">Our team excels in crafting software solutions that are pivotal to fostering growth. With a deep expertise in coding and programming, we transform your ideas into reality. Armed with extensive knowledge across various programming languages and technologies, our team brings invaluable experience to the table. Furthermore, we offer comprehensive maintenance services to ensure the longevity of your software solutions. Operating within an agile model, our team adapts swiftly to changes, ensuring efficient and effective project delivery.</div>
          <div className="h-[200px] w-[600px]"><img src={soft} className="w-[600px] h-[200px] rounded-lg" /></div>
        </div>
        <div className="text-[24px] font-[600] font-[CircularStd]">4.Digital Marketing Services</div>
        <div className="grid grid-cols-2">
        <div className="h-[200px] w-[600px]"><img src={digitalMarket} className="w-[600px] h-[200px] rounded-lg" /></div>
          <div className="font-[CircularStd] text-[18px]">Our company delivers cutting-edge digital marketing services, leveraging the latest technological advancements to propel your brand to new heights. With a focus on data-driven strategies and advanced analytics, we craft bespoke campaigns tailored to your unique needs. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media management and content marketing, our team of experts employs industry-leading techniques to optimize your online presence and drive tangible results. Experience unparalleled growth and visibility in the digital landscape with our comprehensive suite of services.</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Service