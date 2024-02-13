import Navbar from "../Layout/Navbar"
import Footer from './../Layout/Footer'
const Home = () => {
  return (
    <div className="bg-[#FAFBFF] w-full">
      <Navbar/>
      {/* Introduction */}
      <div className="flex flex-col">
        <div className="text-[44px] text-center font-[600] font-[CircularStd]">Engineering the next best thing for the digital world</div>
        <div className="text-[24px] text-center font-[CircularStd]">Agile in mind,spirit and speed</div>
        <div className="text-center justify-center text-[16px] font-[CircularStd]">Scale your dream team</div>
      </div>
      {/* End: Introduction */}
      {/* product teams */}
      <div className="flex flex-col">
        <div className="text-[44px] font-[CircularStd] text-center justify-center">World-class agile product teams to scale your business</div>
        <div className="flex flex-row justify-around">
          <div className="flex flex-row rounded gap-2">
            <div className="flex flex-col bg-white p-2 m-2">
              <div className="text-[16px] font-[600]">Digital Product Engineering</div>
              <div className="text-[16px]">Solve your unique business problems by building impactful software products.</div>
            </div>
            <div className="flex flex-col bg-white p-2 m-2">
              <div className="text-[16px] font-[600]">Digital Product Engineering</div>
              <div className="text-[16px]">Solve your unique business problems by building impactful software products.</div>
            </div>
            <div className="flex flex-col bg-white p-2 m-2">
              <div className="text-[16px] font-[600]">Digital Product Engineering</div>
              <div className="text-[16px]">Solve your unique business problems by building impactful software products.</div>
            </div>
            <div className="flex flex-col bg-white p-2 m-2">
              <div className="text-[16px] font-[600]">Digital Product Engineering</div>
              <div className="text-[16px]">Solve your unique business problems by building impactful software products.</div>
            </div>
          </div>
        </div>
      </div>
      {/* End : Product teams */}
      {/* why us */}
      <div className="flex flex-col">
        <div className="text-[44px] font-[CircularStd] text-center justify-center">Why Organizations Choose Simform</div>
        <div className="text-[22px] font-[CircularStd] text-center justify-center">Discover the many ways in which our clients have embraced the benefits of simform way of engineering.</div>
        <div className="flex justify-center text-center">
          <div className="text-[16px] font-[600]">*Visibility</div>
          <div className="text-[16px] font-[600]">*Improving the online web experience</div>
        </div>
      </div>
      {/* End : Why us */}
      <div className="flex flex-col">
        <div className="text-[44px] font-[CircularStd] text-center justify-center">Our perspective on Digital Engineering</div>
        <div className="">
          <div className="flex flex-col">
            <div className="text-[36px] font-[CircularStd] text-center justify-center">How to Implement Devops for Enterprises?</div>
            <div className="text-[36px] font-[CircularStd] text-center justify-center">Implementing enterprise Devops for a large scale organisation.</div>
          </div>
        </div>
      </div>
      {/* Guarantee */}
      <div className="flex flex-col bg-white">
        <div className="text-[44px] font-[CircularStd] text-center justify-center">Simform Guarantee</div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col rounded-md">
            <div className="text-[#EF5366] font-[600] text-[20px]">logo</div>
            <div className="flex flex-col mt-2">
              <div className="text-[16px]">Flexible,efficient scaling</div>
              <div className="text-[16px]">Expand or reduce your remote team size on demand</div>
            </div>
          </div>
          <div className="flex flex-col rounded-md">
            <div className="text-[#EF5366] font-[600] text-[20px]">logo</div>
            <div className="flex flex-col mt-2">
              <div className="text-[16px] font-[CircularStd] text-center justify-center">Flexible,efficient scaling</div>
              <div className="text-[16px] font-[CircularStd] text-center justify-center">Expand or reduce your remote team size on demand</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center"><div className="text-center justify-center font-semibold flex text-[20px] font-[CircularStd] p-2 border-2 border-black rounded-lg">Work with us</div></div>
      </div>
      {/* Guarantee */}
      {/* Trusted by brand */}
      <div className="flex flex-col">
        <div className="text-[44px] font-[CircularStd] text-center justify-center">Trusted by the world's leading brands</div>
        <div className="">
          {/* a lot of logo */}
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
      <div className="flex flex-col bg-white m-5 p-2">
        <img src=""></img>
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