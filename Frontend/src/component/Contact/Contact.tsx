import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"

const Contact = () => {
    return (
        <div className="bg-[#FAFBFF] flex flex-col">
            <Navbar />
            <div className="flex flex-col text-center justify-center">
                <div className="text-[48px] font-[700] font-[CircularStd]">What will happen next?</div>
                <div className="text-[22px] font-[500] font-[CircularStd]">We will get back to you within 24 hours</div>
                <div className="text-[22px] font-[500] font-[CircularStd]">You are a step closer to building great software</div>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col bg-white rounded-md">
                        <div className="text-[20px] font-[500] font-[CircularStd]">1.Free technical consultation</div>
                        <div className="text-[16px] font-[500] font-[CircularStd]">Detailed tech plan includes things like what tech stack to use
                            ,tech architecture,timeline and budget for your project.</div>
                    </div>
                    <div className="flex flex-col bg-white rounded-md">
                        <div className="text-[20px] font-[500] font-[CircularStd]">2.Connect with the tech team</div>
                        <div className="text-[16px] font-[500] font-[CircularStd]">Over a series of calls,our tech team
                            discusses how different technilogies and</div>
                    </div>
                    <div className="flex flex-col bg-white rounded-md">
                        <div className="text-[20px] font-[500] font-[CircularStd]">Onboarding the team</div>
                        <div className="text-[16px] font-[500] font-[CircularStd]">As soon as you sign-off on the team,they'll be ready to integrate into your team
                            - just like in-house employees.</div>
                    </div>
                </div>
                <div className="flex flex-col text-center justify-center">
                    <div className="flex flex-row text-center justify-center">
                        <div className="font-[700] text-[20px] text-[#EF5366]">SkyScraper</div>
                        <div className="text-[22px] font-[700] font-[CircularStd]">Get in touch to discuss your project,request
                         a quote or even just to pick our brains.</div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 m-4">
                        <div className="text-[22px] font-[700] font-[CircularStd] text-left">To apply for a job,visit the career page.</div>
                        <div className="text-[22px] font-[700] font-[CircularStd] text-left">1.Tell us abour your company</div>
                        <input type="text" placeholder="Your Name*" className="p-1 bg-[#EFEFEF] outline-0 border-2 border-black rounded-md"/>
                        <div className="grid grid-cols-2 gap-2">
                            <input type="email" className="p-1 bg-[#EFEFEF] outline-0 border-2 border-black rounded-md"/>
                            <input type="number" className="p-1 bg-[#EFEFEF] outline-0 border-2 border-black rounded-md"/>
                        </div>
                        <input type="text" placeholder="Company Name or Website" className="p-1 bg-[#EFEFEF] outline-0 border-2 border-black rounded-md"/>
                        <div className="text-[22px] font-[700] font-[CircularStd] text-left">2.Tell us more abour your project</div>
                        <textarea placeholder="Describe Your Project Briefly*" className="p-1 bg-[#EFEFEF] outline-0 border-2 border-black rounded-md"/>
                        <input type="text" placeholder="Please Choose the Budget" className="p-1 bg-[#EFEFEF] outline-0 border-2 border-black rounded-md"/>
                        <div className="flex flex-row">
                            <div className="">Drag images or browse to upload(optional)</div>
                            <div className="">UPLOAD</div>
                        </div>
                        <div className="text-[22px] font-[700] font-[CircularStd] text-left">3.Where did you hear abour us?</div>
                        <input type="text" placeholder="How Did You Hear About Us?" className="p-1 bg-[#EFEFEF] outline-0 border-2 border-black rounded-md"/>
                        <div className="text-[22px] font-[700] font-[CircularStd] text-left">4.Schedule a call with our tech expert.Get a detailed tech consultation for free!</div>
                        <input type="date" className="p-1 bg-[#EFEFEF] outline-0 border-2 border-black rounded-md"/>
                        <input type="time" className="p-1 bg-[#EFEFEF] outline-0 border-2 border-black rounded-md"/>
                        <div className="text-[19px] text-white bg-[#EF5366] rounded-lg text-center justify-center p-1 w-60 font-semibold">Submit</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact