import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure this is the correct import for your setup
import logo from '../assets/CUNY Connect logo.png'; // Update the path as needed

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white p-2.5 flex items-center justify-between shadow-lg sticky top-0 z-50">
            <div className="logo">
                <a href="/">
                    <img src={logo} alt="Logo" className="max-h-[60px] w-auto" />
                </a>
            </div>
            <button
                onClick={toggleMenu}
                className="block lg:hidden text-black focus:outline-none"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>
            <ul className={`lg:flex lg:items-center lg:gap-12 lg:mr-10 ${isOpen ? 'flex flex-col absolute top-20 right-0 w-full bg-white shadow-lg z-50' : 'hidden lg:flex'}`}>
                <li className="inline lg:inline-block">
                    <Link
                        to="/"
                        className="block text-black font-bold relative px-4 py-2 transition-colors duration-300 ease-in-out hover:text-blue-600 focus:text-blue-600"
                    >
                        Home
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-transparent transition-all duration-300 ease-in-out"></span>
                    </Link>
                </li>
                <li className="inline lg:inline-block">
                    <Link
                        to="/food"
                        className="block text-black font-bold relative px-4 py-2 transition-colors duration-300 ease-in-out hover:text-blue-600 focus:text-blue-600"
                    >
                        Food
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-transparent transition-all duration-300 ease-in-out"></span>
                    </Link>
                </li>
                <li className="inline lg:inline-block">
                    <Link
                        to="/housing"
                        className="block text-black font-bold relative px-4 py-2 transition-colors duration-300 ease-in-out hover:text-blue-600 focus:text-blue-600"
                    >
                        Housing
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-transparent transition-all duration-300 ease-in-out"></span>
                    </Link>
                </li>
                <li className="inline lg:inline-block">
                    <Link
                        to="/mental-health"
                        className="block text-black font-bold relative px-4 py-2 transition-colors duration-300 ease-in-out hover:text-blue-600 focus:text-blue-600"
                    >
                        Mental Health
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-transparent transition-all duration-300 ease-in-out"></span>
                    </Link>
                </li>
                <li className="inline lg:inline-block">
                    <Link
                        to="/safety"
                        className="block text-black font-bold relative px-4 py-2 transition-colors duration-300 ease-in-out hover:text-blue-600 focus:text-blue-600"
                    >
                        Safety
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-transparent transition-all duration-300 ease-in-out"></span>
                    </Link>
                </li>
                <li className="inline lg:inline-block">
                    <Link
                        to="/quiz"
                        className="block text-black font-bold relative px-4 py-2 transition-colors duration-300 ease-in-out hover:text-blue-600 focus:text-blue-600"
                    >
                        Quiz
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-transparent transition-all duration-300 ease-in-out"></span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
