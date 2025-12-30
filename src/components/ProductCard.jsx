import React, { useState } from 'react';
import { ShoppingCart, Check, CreditCard, Building2, Wallet, Loader2 } from 'lucide-react';

const ProductCard = ({ product, onClick }) => (
    <div
        onClick={onClick}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
    >
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="space-y-2">
                {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
            <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                View Details
            </button>
        </div>
    </div>
);

export default ProductCard;