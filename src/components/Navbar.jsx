import React from "react";
import { FiArrowLeft, FiBell, FiSettings, FiMoreVertical, FiSearch } from "react-icons/fi";

const Navbar = () => {
    return (
        <nav className="w-full bg-white border-b border-gray-200 shadow-sm px-4 py-2 flex items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center space-x-3">
                <FiArrowLeft className="text-gray-500 text-xl cursor-pointer hover:text-gray-700" />
                <h1 className="text-lg font-semibold text-gray-800">Constructor X</h1>
                {/* Nav Links (hidden on small screens) */}
                <div className="hidden md:flex items-center space-x-5 ml-6">
                    {["Dashboard", "News", "Support", "More"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>

            {/* Center Search Bar */}
            <div className="flex-1 flex justify-center px-4 max-w-md">
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full border rounded-full pl-10 pr-12 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <FiSearch className="absolute left-3 top-2.5 text-gray-400 text-lg" />
                    <button className="absolute right-2 top-1.5 bg-gray-100 border rounded-full px-3 py-0.5 text-xs font-medium text-gray-600 hover:bg-gray-200">
                        ⌘K
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
                <FiBell className="text-gray-500 text-lg cursor-pointer hover:text-gray-700" />
                <FiSettings className="text-gray-500 text-lg cursor-pointer hover:text-gray-700" />
                <button className="hidden sm:inline-flex items-center bg-blue-600 text-white text-sm font-medium px-3 py-1.5 rounded-full hover:bg-blue-700">
                    ★ Upgrade
                </button>
                <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 font-semibold text-gray-700">
                    MH
                </div>
                <FiMoreVertical className="text-gray-500 text-lg cursor-pointer hover:text-gray-700" />
            </div>
        </nav>
    );
};

export default Navbar;
