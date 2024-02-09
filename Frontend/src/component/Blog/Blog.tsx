import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"

const Blog = () => {
  return (
    <div className="bg-[#FAFBFF]">
        <Navbar/>
        <div className="text-[44px] font-[CircularStd] text-center justify-center">The Simform Blog</div>
        <div className="text-[24px] font-[CircularStd] text-center justify-center">
        In a software-defined world, the Simform Blog is your place to navigate through the renaissance in technology. Our publication aims to provide you the full scoop on the groundbreaking research, thought-leadership, and perspective on tech innovation in the world of software development, with a deep context to help tech leaders make intelligent decisions.
        </div>
        <div className="text-[44px] font-[CircularStd] text-center justify-center">Digital Product Engineering</div>
        <div className="text-[24px] font-[CircularStd] text-center justify-center">Product engineering is our craft. It's what we do and how we think. Learn more about how we integrate design, business, and technology to build great software together.</div>
        <div className="text-[44px] font-[CircularStd] text-center justify-center">Cloud, DevOps, and Data Engineering</div>
        <div className="text-[24px] font-[CircularStd] text-center justify-center">There are 3 pillars of digital transformation: Cloud, DevOps, and Data. Master them by learning lesser-known strategies, industry best practices, and lessons from tech giants.</div>
        <Footer/>
    </div>
  )
}

export default Blog