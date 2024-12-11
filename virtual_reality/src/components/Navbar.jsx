 import logo from "../assets/logo.png"
 import { Link } from "react-router-dom"
import {Menu, X} from "lucide-react";
import { useState } from "react";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between  items-center">
                <div className="flex items-center  flex-shrink-0">
                    <img className="w-10 h-10 mr-2" src={logo} alt="logo" />
                    <div className="span text-xl tracking-tight">
                        VirtualReality
                    </div>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12 ">
                    <Link to='features'><li>Features</li></Link>
                    <Link to='workflow'><li>Workflow</li></Link>
                    <Link to='pricing'><li>Pricing</li></Link>
                    <Link to='testimonials'><li>Testimonials</li></Link>
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center ">
                    <a href="#" className="py-2 px-3 border rounded-md">
                        Sign In
                    </a>
                    <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                        Create an account
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <X size={30}/> : <Menu size={30}/>}
                    </button>
                </div>
                
            </div>
            {isMenuOpen && (
                <div className="left-0 z-20 bg-neutral-900 w-full text-center p-12 fixed flex flex-col justify-center items-center md:hidden">
                    <ul className=" text-xl font-semibold">
                        <Link to='features'><li className="pb-4">Features</li></Link>
                        <Link to='workflow'><li className="py-4">Workflow</li></Link>
                        <Link to='pricing'><li className="py-4">Pricing</li></Link>
                        <Link to='testimonials'><li className="pt-4">Testimonials</li></Link>
                    </ul>
                    <div className="flex space-x-6 py-6">
                        <a href="#" className="py-2 px-3 border rounded-md ">
                            Sign In
                        </a>
                        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                             Create an account
                        </a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar