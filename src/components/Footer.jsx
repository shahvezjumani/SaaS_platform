import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">P</span>
                            </div>
                            <span className="ml-3 text-xl font-bold text-white">Pixa Solutions</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Empowering businesses with cutting-edge digital solutions for the modern world.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-indigo-500 transition">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-500 transition">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-500 transition">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-500 transition">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Products</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-indigo-500 transition">Website Builder</a></li>
                            <li><a href="#" className="hover:text-indigo-500 transition">CMS Enterprise</a></li>
                            <li><a href="#" className="hover:text-indigo-500 transition">LMS Platform</a></li>
                            <li><a href="#" className="hover:text-indigo-500 transition">ERP Solution</a></li>
                            <li><a href="#" className="hover:text-indigo-500 transition">SaaS Tools</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-indigo-500 transition">About Us</a></li>
                            <li><a href="#" className="hover:text-indigo-500 transition">Careers</a></li>
                            <li><a href="#" className="hover:text-indigo-500 transition">Blog</a></li>
                            <li><a href="#" className="hover:text-indigo-500 transition">Press Kit</a></li>
                            <li><a href="#" className="hover:text-indigo-500 transition">Partners</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <Mail className="w-5 h-5 mr-3 mt-1 text-indigo-500" />
                                <a href="mailto:info@pixa.tech" className="hover:text-indigo-500 transition">
                                    info@pixa.tech
                                </a>
                            </li>
                            <li className="flex items-start">
                                <Phone className="w-5 h-5 mr-3 mt-1 text-indigo-500" />
                                <a href="tel:+1234567890" className="hover:text-indigo-500 transition">
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 mt-1 text-indigo-500" />
                                <span>123 Business Ave, Tech City, TC 12345</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 Pixa Solutions. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-indigo-500 text-sm transition">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-indigo-500 text-sm transition">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-400 hover:text-indigo-500 text-sm transition">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;