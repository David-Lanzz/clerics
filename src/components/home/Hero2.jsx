import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const Hero2 = () => {

  const navigate = useNavigate()
  const userId = useMemo(() => localStorage.getItem('userId'), []);
  
  return (
    <section className="bg-gradient-to-r from-[#0C352A] via-[#0c352afa] to-[#0C352A] text-white h-screen min-h-screen flex items-center justify-center px-6">
      <div className="max-w-[90rem] h-[80%] md:mt-32 w-full flex flex-col md:flex-row gap-10 justify-center items-center">
        <div className="w-full md:w-3/5 flex-grow relative p-8 rounded-3xl bg-[#0D2519] h-full flex flex-col justify-between">
          <h1 className="text-3xl md:text-8xl font-bold text-[#FFFFFFCC]"><span className="text-[#FFFFFF66]">Specialized <br /></span> Courses</h1>
          <div className="flex flex-col relative z-10 gap-2">
            {
              ['Classical (Quranic) Arabic', 'Modern Standard Arabic', 'Colloquial Arabic', 'Business Arabic', 'Arabic for children']
                .map((course, index) => (
                  <div key={index} className="flex items-center gap-4 md:mt-4">
                    <div className="w-3 md:w-6 h-3 md:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="md:text-2xl">{course}</span>
                  </div>
                ))
            }
          </div>
          <div className="flex gap-4">
            <button onClick={() => {
              scroller.scrollTo('contact', {
                smooth: "easeInOutQuart"
              })
            }} className="mt-14 bg-yellow-400 text-[#0f2d24] font-semibold py-3 px-8 rounded-full hover:bg-yellow-300 transition">
              Get Started
            </button>
            <button onClick={() => {
              userId ? navigate(`/booking/${userId}`) :
                navigate('/login')
            }}
              className="mt-14 border hidden md:block border-yellow-400 font-semibold py-3 px-8 rounded-full text-yellow-300 transition">
              Book Now
            </button>
          </div>
          <img src="/fawsiyyah.png" alt="" className="absolute w-1/2 md:w-auto right-0 bottom-0" />
        </div>
        <div className="hidden md:block w-max relative h-full rounded-3xl overflow-hidden">
          <img src="/imamic.png" className="h-full rounded-3xl" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
