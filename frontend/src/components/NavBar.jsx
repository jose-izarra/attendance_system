import React from 'react';
import '../App.css';

const NavBar = () => {
    return (
        <nav className="bg-blue-500 w-full">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <div className="text-white text-2xl font-bold">
                    BASP
                </div>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-white hover:text-blue-200 transition duration-300">Home</a></li>
                    <li><a href="#" className="text-white hover:text-blue-200 transition duration-300">About</a></li>
                    <li><a href="#" className="text-white hover:text-blue-200 transition duration-300">Services</a></li>
                    <li><a href="#" className="text-white hover:text-blue-200 transition duration-300">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;