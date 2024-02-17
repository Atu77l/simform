import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"

const Admin = () => {
  return (
    <div>
    <Navbar/>
    <div className="flex flex-col gap-4">
    <div className="rounded-lg">
        <div className="text-[24px] font-[600]">Contact List</div>
        <div className="">

        </div>
    </div>
    <div className="rounded-lg ">
        <div className="text-[24px] font-[600]">Subscription Email</div>
        <div className="">

        </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Admin