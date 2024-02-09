import Navbar from "../Layout/Navbar"
import Footer from './../Layout/Footer'
const Home = () => {
  return (
    <div className="bg-[#FAFBFF] w-full">
      <Navbar/>
      {/* Introduction */}
      <div className="flex flex-col">
        <div className="text-[48px] font-[700] font-[CircularStd]">Engineering the next best thing for the digital world</div>
        <div className="text-[21px]">Agile in mind,spirit and speed</div>
        <div className="text-[19px] text-white bg-[#EF5366] p-1 w-60">Scale your dream team</div>
      </div>
      {/* End: Introduction */}
      {/* product teams */}
      <div className="flex flex-col">
        <div className="text-[44px] font-[CircularStd] text-center justify-center">World-class agile product teams to scale your business</div>
        <div className="flex flex-row justify-around">
          <div className="flex flex-row w-[220px] bg-white rounded">
            <div className=""><img src=""/></div>
            <div className="flex flex-col">
              <div className="">Digital Product Engineering</div>
              <div className="">Solve your unique business problems by building impactful software products.</div>
            </div>
          </div>
        </div>
      </div>
      {/* End : Product teams */}
      {/* why us */}
      <div className="flex flex-col">
        <div className="text-[44px] font-[CircularStd] text-center justify-center">Why Organizations Choose Simform</div>
        <div className="text-[22px] font-[CircularStd] text-center justify-center">Discover the many ways in which our clients have embraced the benefits of simform way of engineering.</div>
        <div className="flex flex-col">
          <div className="">Visibility</div>
          <div className="">Improving the online web experience</div>
        </div>
      </div>
      {/* End : Why us */}
      <div className="flex flex-col">
        <div className="text-[44px] font-[CircularStd] text-center justify-center">Our perspective on Digital Engineering</div>
        <div className="">
          <div className="flex flex-col">
            <div className="text-[44px] font-[CircularStd] text-center justify-center">How to Implement Devops for Enterprises?</div>
            <div className="text-[44px] font-[CircularStd] text-center justify-center">Implementing enterprise Devops for a large scale organisation.</div>
          </div>
        </div>
      </div>
      {/* Guarantee */}
      <div className="flex flex-col bg-white">
        <div className="text-[44px] font-[CircularStd] text-center justify-center">Simform Guarantee</div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="">logo</div>
            <div className="">
              <div className="">Flexible,efficient scaling</div>
              <div className="">Expand or reduce your remote team size on demand</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="">logo</div>
            <div className="">
              <div className="text-[24px] font-[CircularStd] text-center justify-center">Flexible,efficient scaling</div>
              <div className="text-[24px] font-[CircularStd] text-center justify-center">Expand or reduce your remote team size on demand</div>
            </div>
          </div>
        </div>
        <div className="">Work with us</div>
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
        <div className="flex flex-row">
          <div className="text-[44px] font-[CircularStd] text-center justify-center w-36">News</div>
          <div className="text-[44px] font-[CircularStd] text-center justify-center w-36">Insights</div>
        </div>
        <div className="">
          {/* card for news */}
        </div>
      </div>
      {/* End News and Insights */}
      {/* Start: microservice transforming */}
      <div className="flex flex-col bg-white m-5">
        <img src=""></img>
        <div className="text-[40px] font-[CircularStd] text-left w-[360px]">
          20+ Ways Microservices are Transforming
          Industries: Use Cases from Capital one,
          Facebook,Uber and more.
        </div>
        <div className="text-[24px] font-[CircularStd] text-center justify-center">
          This is Ebook talks about the different industries that have adopted
          microservice and took business to the next level through digital transformations.
        </div>
        <div className="bg-[#EF5366] text-white w-36 p-1">DOWNLOAD</div>
      </div>
      {/* End: microservice transforming */}
      {/* Start:  Sign Up For the free Newsletter */}
      <div className="flex flex-col">
        <div className="text-[44px] font-[CircularStd] text-center justify-center">Sign up for the free Newsletter</div>
        <div className="text-[22px] font-[CircularStd] text-center justify-center">For exclusive strategies not found on the blog</div>
        <div className="">
          <input type="text" ></input>
          <div className="">SUBSCRIBE NOW</div>
        </div>
      </div>
      {/* End:  Sign Up For the free Newsletter */}
      <Footer/>
    </div>
  )
}

export default Home