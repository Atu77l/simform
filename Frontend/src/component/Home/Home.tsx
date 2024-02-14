import Navbar from "../Layout/Navbar"
import Footer from './../Layout/Footer'
import five from './../../assets/7.png'
import { FcBriefcase } from "react-icons/fc";


const Home = () => {
  return (
    <div className="bg-[#FAFBFF] w-full">
      <Navbar/>
      {/* Introduction */}
      <div className="flex flex-row bg-white m-2">
      <div className="flex flex-col w-[600px] justify-center text-center ml-20">
        <div className="text-[44px] text-center font-[600] font-[CircularStd]">Engineering the next best thing for the <span className="text-red-600">digital world</span></div>
        <div className="text-[28px] text-center font-[CircularStd]">Agile in mind,spirit and speed</div>
        <div className="text-center justify-center text-[24px] rounded-lg font-[CircularStd] bg-[#EF5366] p-2 text-white">Scale your dream team</div>
      </div>
      <div className="flex flex-grow"><img src={five} alt="logo" className="h-[300px] w-full"/></div>
      </div>
      {/* End: Introduction */}
      {/* product teams */}
      <div className="flex flex-col">
        <div className="text-[44px] font-[CircularStd] text-center justify-center">World-class agile product teams to <span className="border-b-4 border-red-400">scale your business</span></div>
        <div className="flex flex-row justify-around ml-5 mr-5">
          <div className="flex flex-row rounded gap-2">
            <div className="flex flex-col bg-white p-4 m-2 hover:bg-green-200">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
              <div className="text-[22px] font-[600]">Digital Product Engineering</div>
              <div className="text-[20px]">Solve your unique business problems by building impactful software products.</div>
            </div>
            <div className="flex flex-col bg-white p-4 m-2 hover:bg-green-200">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
              <div className="text-[22px] font-[600]">Digital Product Engineering</div>
              <div className="text-[20px]">Solve your unique business problems by building impactful software products.</div>
            </div>
            <div className="flex flex-col bg-white p-4 m-2 hover:bg-green-200">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
              <div className="text-[22px] font-[600]">Digital Product Engineering</div>
              <div className="text-[20px]">Solve your unique business problems by building impactful software products.</div>
            </div>
            <div className="flex flex-col bg-white p-4 m-2 hover:bg-green-200">
            <div className="bg-orange-200 rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
              <div className="text-[22px] font-[600]">Digital Product Engineering</div>
              <div className="text-[20px]">Solve your unique business problems by building impactful software products.</div>
            </div>
          </div>
        </div>
      </div>
      {/* End : Product teams */}
      {/* why us */}
      <div className="flex flex-col flex-grow">
        <div className="text-[44px] font-[CircularStd] text-center justify-center">Why Organizations <span className="border-b-8 border-red-600">Choose SkyScraper</span></div>
        <div className="text-[22px] font-[CircularStd] text-center justify-center">Discover the many ways in which our clients have embraced the benefits of SkyScraper way of engineering.</div>
        <div className="flex justify-center text-center">
          <div className="text-[16px] font-[600]">*Visibility</div>
          <div className="text-[16px] font-[600]">*Improving the online web experience</div>
        </div>
      </div>
      {/* End : Why us */}
     
      {/* Guarantee */}
      <div className="flex flex-row bg-white">
      <div className="flex flex-grow text-center justify-center"><img src={five} alt="h" className="w-[400px]"/></div>
      <div className="flex flex-col bg-white m-5">
        <div className="text-[44px] font-[CircularStd] text-center justify-center">SkyScraper <span className="border-b-8 border-red-600">Guarantee</span></div>
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-row rounded-md">
          <div className="rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
            <div className="flex flex-col mt-2 p-2">
              <div className="text-[22px] font-[600] font-[CircularStd]">Flexible,efficient scaling</div>
              <div className="text-[20px] font-[CircularStd]">Expand or reduce your remote team size on demand</div>
            </div>
          </div>
          <div className="flex flex-row rounded-md">
          <div className="rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
            <div className="flex flex-col mt-2 p-2">
              <div className="text-[22px] font-[600] font-[CircularStd]">Team of 1,000+ engineers</div>
              <div className="text-[20px] font-[CircularStd]">Access vetted experts in the tech stack of your choice.</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row rounded-md">
          <div className="rounded-full flex text-center justify-center w-12 h-12 m-2"><FcBriefcase style={{fontSize:"40px"}}/></div>
            <div className="flex flex-col mt-2 p-2">
              <div className="text-[22px] font-[600] font-[CircularStd]">Long-term predictability</div>
              <div className="text-[20px] font-[CircularStd]">Simform’s average engagement duration is 2 years..</div>
            </div>
          </div>
        <div className="flex justify-start m-2"><div className="text-center justify-center font-semibold border-2 pl-4 pr-4 border-red-600 flex text-[20px] font-[CircularStd] p-2 rounded-lg">Work with us</div></div>
      </div>
      </div>
      {/* Guarantee */}
      {/* Trusted by brand */}
      <div className="flex flex-col">
        <div className="text-[44px] font-[CircularStd] text-center justify-center">Trusted by the world's leading brands</div>
        <div className="flex text-center justify-center">
          {/* a lot of logo */}
          <img src={five} className="h-[200px]"/>
        </div>
      </div>
      {/* End: trusted by brand */}

      {/* News and Insights */}
      <div className="flex flex-col">
        <div className="text-[44px] font-[CircularStd] text-center justify-center">News & Insights</div>
        <div className="text-[22px] font-[CircularStd] text-center justify-center">Our software is as good as your team.Learn what goes into building a team that best complements your software and business.</div>
        <div className="flex flex-row justify-center gap-2">
          <div className="text-[24px] border-2 border-black rounded-lg font-[CircularStd] text-center justify-center w-36">News</div>
          <div className="text-[24px] border-2 border-black rounded-lg font-[CircularStd] text-center justify-center w-36">Insights</div>
        </div>
        <div className="">
          {/* card for news */}
        </div>
      </div>
      {/* End News and Insights */}
      {/* Start: microservice transforming */}
      <div className="flex flex-row bg-white m-5 p-2">
        <img src={five} className="h-[200px] w-[400px]"/>
        <div className="flex flex-col">
        <div className="text-[24px] font-[CircularStd] text-center">
          20+ Ways Microservices are Transforming
          Industries: Use Cases from Capital one,
          Facebook,Uber and more.
        </div>
        <div className="text-[20px] font-[CircularStd] text-center justify-center">
          This is Ebook talks about the different industries that have adopted
          microservice and took business to the next level through digital transformations.
        </div>
        <div className="flex justify-center"><div className="bg-[#EF5366] text-white w-36 font-[600] text-center rounded-md p-2">DOWNLOAD</div></div>
      </div>
      </div>
      {/* End: microservice transforming */}
      {/* Start:  Sign Up For the free Newsletter */}
      <div className="flex flex-col p-2">
        <div className="text-[44px] font-[CircularStd] text-center justify-center">Sign up for the free Newsletter</div>
        <div className="text-[22px] font-[CircularStd] text-center justify-center">For exclusive strategies not found on the blog</div>
        <div className="flex flex-row justify-center">
          <div className="w-[600px] flex flex-row border-2 rounded-md">
          <input type="text" className="border-0 bg-[#EFEFEF] outline-0 rounded-md flex-grow" ></input>
          <div className="rounded-md bg-[#EF5366] text-center font-[600] text-[20px] pl-5 pr-5 p-2">SUBSCRIBE NOW</div>
          </div>
        </div>
      </div>
      {/* End:  Sign Up For the free Newsletter */}
      <Footer/>
    </div>
  )
}

export default Home