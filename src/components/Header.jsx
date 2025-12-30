import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ onNavigate }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div
                        onClick={() => onNavigate('home')}
                        className="flex items-center cursor-pointer"
                    >
                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">P</span>
                        </div>
                        <span className="ml-3 text-2xl font-bold text-gray-800">Pixa Solutions</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <button
                            onClick={() => onNavigate('home')}
                            className="text-gray-700 hover:text-indigo-600 font-semibold transition"
                        >
                            Products
                        </button>
                        <a href="#pricing" className="text-gray-700 hover:text-indigo-600 font-semibold transition">
                            Pricing
                        </a>
                        <a href="#about" className="text-gray-700 hover:text-indigo-600 font-semibold transition">
                            About
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-semibold transition">
                            Contact
                        </a>
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-indigo-600 hover:text-indigo-700 font-semibold">
                            Sign In
                        </button>
                        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-semibold">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-gray-700 hover:text-indigo-600"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <nav className="flex flex-col space-y-4">
                            <button
                                onClick={() => {
                                    onNavigate('home');
                                    setMobileMenuOpen(false);
                                }}
                                className="text-gray-700 hover:text-indigo-600 font-semibold text-left"
                            >
                                Products
                            </button>
                            <a href="#pricing" className="text-gray-700 hover:text-indigo-600 font-semibold">
                                Pricing
                            </a>
                            <a href="#about" className="text-gray-700 hover:text-indigo-600 font-semibold">
                                About
                            </a>
                            <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-semibold">
                                Contact
                            </a>
                            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                                <button className="text-indigo-600 hover:text-indigo-700 font-semibold text-left">
                                    Sign In
                                </button>
                                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-semibold">
                                    Get Started
                                </button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;