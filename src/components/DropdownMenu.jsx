import React from 'react';

export const DropdownMenu = ({isOpen}) => {
    return (
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <nav className="space-y-2">
                <a href="#" className="block text-white">Home</a>
                <a href="#" className="block text-white">About</a>
                <a href="#" className="block text-white">Services</a>
                <a href="#" className="block text-white">Contact</a>
                <a href="#" className="block text-white">Login</a>
                <a href="#" className="block text-white bg-primary px-5 py-2 rounded-full">Register</a>
            </nav>
        </div>
    );
};