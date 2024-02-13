import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"

const Service = () => {
  return (
    <div className="bg-[#FAFBFF]">
        <Navbar/>
        <div className="text-[44px] font-[CircularStd] text-center justify-center">Tool & Api Provider to Help Startup</div>
        <div className="flex flex-col bg-white p-4 m-4">
            <div className="text-[24px] font-[600] font-[CircularStd]">1.Reporting Tool</div>
            <div className="text-[24px] font-[600] font-[CircularStd]">2.Invoice Generator</div>
            <div className="text-[24px] font-[600] font-[CircularStd]">3.List of Data</div>
            <div className="text-[24px] font-[600] font-[CircularStd]">4.Ebooks</div>
        </div>
        <div className="text-[44px] font-[CircularStd] text-center justify-center">Service and Development</div>
        <div className="flex flex-col bg-white p-4 m-4">
          <div className="text-[24px] font-[600] font-[CircularStd]">1.Web Application Development</div>
          <div className="text-[24px] font-[600] font-[CircularStd]">2.Mobile Application Development</div>
          <div className="text-[24px] font-[600] font-[CircularStd]">3.Software Development</div>
          <div className="text-[24px] font-[600] font-[CircularStd]">4.Digital Marketing Services</div>
          <div className="text-[24px] font-[600] font-[CircularStd]">5.You Tube Channel Management</div>
        </div>
        <Footer/>
    </div>
  )
}

export default Service