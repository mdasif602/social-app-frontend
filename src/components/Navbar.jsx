import {React, useState} from 'react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-blue-500 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <a href="#" className="text-white text-2xl font-bold">Logo</a>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Home</a>
                        <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">About</a>
                        <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Services</a>
                        <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Contact</a>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button onClick={toggleMenu} type="button" className="text-white focus:outline-none">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Home</a>
                    <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">About</a>
                    <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Services</a>
                    <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Contact</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar