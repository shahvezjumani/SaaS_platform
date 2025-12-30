import React, { useState } from 'react';
import { ShoppingCart, Check, CreditCard, Building2, Wallet, Loader2 } from 'lucide-react';

const Banner = () => (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-6">Transform Your Business Digital</h1>
                <p className="text-xl mb-8 text-indigo-100">Choose from our premium suite of online solutions tailored for your success</p>
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
                    Explore Products
                </button>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
);

export default Banner;