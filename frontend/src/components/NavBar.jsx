import React from 'react';

const NavBar = () => {
    return (
        <nav className="bg-blue-500 w-full py-8">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white text-2xl font-bold pl-10">
                    BASP
                </div>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-white">Home</a></li>
                    <li><a href="#" className="text-white">About</a></li>
                    <li><a href="#" className="text-white">Services</a></li>
                    <li><a href="#" className="text-white">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
