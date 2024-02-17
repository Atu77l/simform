import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"
import ten from './../../assets/10.png'
import ten1 from './../../assets/11.png'



const Blog = () => {
  return (
    <div className="bg-[#FAFBFF]">
      <Navbar />
      <div className="flex flex-row m-2 bg-white">
        <div className="flex flex-col">
          <div className="text-[44px] font-[CircularStd] text-center justify-center text-[#2D5BFF]">The SkyScraper Blog</div>
          <div className="text-[24px] font-[CircularStd] text-center justify-center">In a software-defined world, the SkyScraper Blog is your place to navigate through the renaissance in technology. Our publication aims to provide you the full scoop on the groundbreaking research, thought-leadership, and perspective on tech innovation in the world of software development, with a deep context to help tech leaders make intelligent decisions.</div>
        </div>
        <div className=""><img src={ten} alt="blog" className="w-[460px] h-[200px]" /></div>
      </div>
      <div className="flex flex-row m-2 bg-white">
       <div className=""><img src={ten1} alt="blog" className="w-[460px] h-[200px]" /></div>
        <div className="flex flex-col">
          <div className="text-[44px] font-[CircularStd] text-center justify-center">Digital Product <span className="text-[#2D5BFF]">Engineering</span></div>
          <div className="text-[24px] font-[CircularStd] text-center justify-center">Product engineering is our craft. It's what we do and how we think. Learn more about how we integrate design, business, and technology to build great software together.</div>
        </div>
      </div>
      <div className="flex flex-row m-2 bg-white">
        <div className="flex flex-col">
          <div className="text-[44px] font-[CircularStd] text-center justify-center"><span className="text-[#2D5BFF]">Cloud, DevOps,</span> and Data Engineering</div>
          <div className="text-[24px] font-[CircularStd] text-center justify-center">There are 3 pillars of digital transformation: Cloud, DevOps, and Data. Master them by learning lesser-known strategies, industry best practices, and lessons from tech giants.</div>
        </div>
        <div className=""><img src={ten} alt="blog" className="w-[460px] h-[200px]" /></div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog