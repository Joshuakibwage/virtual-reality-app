import logo from "../assets/Xbox.jpeg";
import logo1 from "../assets/tech1.webp";

const HeroSection = () => {
  return (
    <div className="w-3/4 h-screen mx-auto">
        <div className="flex flex-col items-center mt-6 md:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Virtual build tools <span className="bg-gradient-to-r from-orange-300 to-red-800 text-transparent bg-clip-text">for developers</span> 
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 w-1/2">
                Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!
            </p>
            <div className="flex justify-center m-10">
                <a href="#" className="bg-gradient-to-r from-orange-400 to-red-800 py-3 px-4 mx-3 rounded-md ">
                    Start for Free
                </a>
                <a href="#" className="py-3 px-4 mx-3 rounded-md border ">
                    Documentation
                </a>
            </div>
            <div className="flex mt-10 justify-center gap-4">
                <img className="w-1/2 rounded-lg border-orange-700 shadow-orange-400" src={logo} alt="" />
                <img className="w-1/2 rounded-lg border-orange-700 shadow-orange-400" src={logo1} alt="" />
            </div>
        </div>

    </div>
  )
}

export default HeroSection