import { useState } from "react";
import Logo from '../assets/Logo.png';
import { Link } from "react-router-dom";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <img src={Logo} alt="Logo Valas" />
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center text-sm font-medium justify-center space-y-8 md:flex md:space-x-9 md:space-y-0">
                            <li className="text-[#505050] hover:text-[#0A4BDB]">
                                <Link>Home</Link>
                            </li>
                            <li className="text-[#505050] hover:text-[#0A4BDB]">
                                <Link>About Us</Link>
                            </li>
                            <li className="text-[#505050] hover:text-[#0A4BDB]">
                                <Link>Our Solution</Link>
                            </li>
                            <li className="text-[#505050] hover:text-[#0A4BDB]">
                                <Link>Client</Link>
                            </li>
                            <li className="text-[#505050] hover:text-[#0A4BDB]">
                                <Link>Price</Link>
                            </li>
                            <li className="text-[#505050] hover:text-[#0A4BDB]">
                                <Link>Contact Us</Link>
                            </li>
                            <div className="flex items-center space-x-5">
                                <span className="border hidden md:inline-block border-l h-[24px] border-[#505050] "></span>
                                <button className="px-[15px] py-2 rounded-[5px] text-base font-medium text-[#0A4BDB] border border-[#0A4BDB]">Login</button>
                                <button className="px-[15px] py-2 rounded-[5px] text-base font-medium text-[#fff] border border-[#fff] bg-[#0A4BDB]">Request Demo</button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}