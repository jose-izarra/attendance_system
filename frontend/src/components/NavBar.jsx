import React from 'react';
import '../App.css';

const NavBar = () => {
    return (
        <nav className="flex bg-blue-500 w-[100%] h-24 items-center justify-center">
            <div className="container flex items-center justify-between my-auto py-4 px-[5px]">
                <div className="text-white font-bold text-[50px]">
                    Qwicker
                </div>
                <ul className="flex space-x-4 justfy-end my-auto mx-[50px]">
                    <li><a href="#" className="text-white hover:text-slate-200 transition duration-300  text-2xl">Home</a></li>
                    <li><a href="#" className="text-white hover:text-slate-200 transition duration-300  text-2xl">About</a></li>
                    <li><a href="#" className="text-white hover:text-slate-200 transition duration-300  text-2xl">Services</a></li>
                    <li><a href="#" className="text-white hover:text-slate-200 transition duration-300  text-2xl">Contact</a></li>
                </ul>

            </div>

        </nav>
    );
}

export default NavBar;