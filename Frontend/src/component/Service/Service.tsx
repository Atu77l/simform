import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"
import digitalMarket from './../../assets/3.png'
import web from './../../assets/9.png'

const Service = () => {
  return (
    <div className="bg-[#FAFBFF]">
      <Navbar />
      <div className="text-[44px] font-[CircularStd] text-center justify-center">Tool & Api Provider to Help Startup</div>
      <div className="flex flex-col bg-white p-4 m-4">
        <div className="text-[24px] font-[CircularStd]">1.Reporting Tool</div>
        <div className="text-[24px] font-[CircularStd]">2.Invoice Generator</div>
        <div className="text-[24px] font-[CircularStd]">3.List of Data</div>
        <div className="text-[24px] font-[CircularStd]">4.Ebooks</div>
      </div>
      <div className="text-[44px] font-[CircularStd] text-center justify-center">Service and Development</div>
      <div className="flex flex-col bg-white p-4 m-4">
        <div className="text-[24px] font-[600] font-[CircularStd]">1.Web Application Development</div>
        <div className="grid grid-cols-2">
          <div className="font-serif">A web application development description outlines the process, technologies, and services involved in creating a web application.
            At [Company Name], we specialize in developing custom web applications tailored to meet the unique needs of our clients. Our team of experienced developers and designers works closely with clients to understand their requirements and deliver innovative solutions that drive business growth and success.
            Our designers create wireframes and prototypes to visualize the application's layout, user interface, and user experience.
            We collaborate with clients to gather feedback and refine designs until they meet the client's expectations and align with their brand identity.</div>
          <div className="h-[200px] w-[600px]"><img src={web} className="w-[600px] h-[200px]" /></div>
        </div>
        <div className="text-[24px] font-[600] font-[CircularStd]">2.Mobile Application Development</div>
        <div className="grid grid-cols-2">
        <div className="h-[200px] w-[600px]"><img src={web} className="w-[600px] h-[200px]" /></div>
          <div className="font-serif">A web application development description outlines the process, technologies, and services involved in creating a web application.
            At [Company Name], we specialize in developing custom web applications tailored to meet the unique needs of our clients. Our team of experienced developers and designers works closely with clients to understand their requirements and deliver innovative solutions that drive business growth and success.
            Our designers create wireframes and prototypes to visualize the application's layout, user interface, and user experience.
            We collaborate with clients to gather feedback and refine designs until they meet the client's expectations and align with their brand identity.</div>
        </div>
        <div className="text-[24px] font-[600] font-[CircularStd]">3.Software Development</div>
        <div className="grid grid-cols-2">
          <div className="font-serif">A web application development description outlines the process, technologies, and services involved in creating a web application.
            At [Company Name], we specialize in developing custom web applications tailored to meet the unique needs of our clients. Our team of experienced developers and designers works closely with clients to understand their requirements and deliver innovative solutions that drive business growth and success.
            Our designers create wireframes and prototypes to visualize the application's layout, user interface, and user experience.
            We collaborate with clients to gather feedback and refine designs until they meet the client's expectations and align with their brand identity.</div>
          <div className="h-[200px] w-[600px]"><img src={digitalMarket} className="w-[600px] h-[200px]" /></div>
        </div>
        <div className="text-[24px] font-[600] font-[CircularStd]">4.Digital Marketing Services</div>
        <div className="grid grid-cols-2">
        <div className="h-[200px] w-[600px]"><img src={digitalMarket} className="w-[600px] h-[200px]" /></div>
          <div className="font-serif">A web application development description outlines the process, technologies, and services involved in creating a web application.
            At [Company Name], we specialize in developing custom web applications tailored to meet the unique needs of our clients. Our team of experienced developers and designers works closely with clients to understand their requirements and deliver innovative solutions that drive business growth and success.
            Our designers create wireframes and prototypes to visualize the application's layout, user interface, and user experience.
            We collaborate with clients to gather feedback and refine designs until they meet the client's expectations and align with their brand identity.</div>
        </div>
        <div className="text-[24px] font-[600] font-[CircularStd]">5.You Tube Channel Management</div>
        <div className="grid grid-cols-2">
          <div className="font-serif">A web application development description outlines the process, technologies, and services involved in creating a web application.
            At [Company Name], we specialize in developing custom web applications tailored to meet the unique needs of our clients. Our team of experienced developers and designers works closely with clients to understand their requirements and deliver innovative solutions that drive business growth and success.
            Our designers create wireframes and prototypes to visualize the application's layout, user interface, and user experience.
            We collaborate with clients to gather feedback and refine designs until they meet the client's expectations and align with their brand identity.</div>
          <div className="h-[200px] w-[600px]"><img src={digitalMarket} className="w-[600px] h-[200px]" /></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Service