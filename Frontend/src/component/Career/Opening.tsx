import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'

const Opening = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex text-center justify-center h-screen'>
            <div className='text-[24px] font-[CircularStd] font-[600] mt-20'>There is no opening now.</div>
        </div>
        <Footer/>
    </div>
  )
}

export default Opening