import React from 'react';
import '../App.css';

const NavBar = () => {
    return (
        <nav className="bg-blue-500 w-screen">
            <div className="container flex items-center justify-between py-4 px-6">
                <div className="text-white font-bold font-mono text-4xl ml-4">
                    BASP
                </div>
                <ul className="flex space-x-4 justfy-end">
                    <li><a href="#" className="text-white hover:text-blue-200 transition duration-300 font-mono text-2xl">Home</a></li>
                    <li><a href="#" className="text-white hover:text-blue-200 transition duration-300 font-mono text-2xl">About</a></li>
                    <li><a href="#" className="text-white hover:text-blue-200 transition duration-300 font-mono text-2xl">Services</a></li>
                    <li><a href="#" className="text-white hover:text-blue-200 transition duration-300 font-mono text-2xl">Contact</a></li>
                </ul>

            </div>

        </nav>
    );
}

export default NavBar;