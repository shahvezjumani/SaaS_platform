import React, { useState } from 'react';
import { ShoppingCart, Check, CreditCard, Building2, Wallet, Loader2 } from 'lucide-react';
import { plans } from '../data.js';

const ProductPage = ({ product, onSelectPlan, onBack }) => (
    <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button onClick={onBack} className="text-indigo-600 hover:text-indigo-700 mb-8 flex items-center">
                ← Back to Products
            </button>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                <div className="grid md:grid-cols-2 gap-8">
                    <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
                        <p className="text-gray-600 text-lg mb-6">{product.description}</p>
                        <div className="space-y-3">
                            {product.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center text-gray-700">
                                    <Check className="w-5 h-5 text-green-500 mr-3" />
                                    <span className="text-lg">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Choose Your Plan</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className={`bg-white rounded-xl shadow-lg p-8 ${plan.popular ? 'ring-4 ring-indigo-600 transform scale-105' : ''}`}
                    >
                        {plan.popular && (
                            <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                        )}
                        <h3 className="text-2xl font-bold text-gray-800 mt-4">{plan.name}</h3>
                        <div className="mt-4 mb-6">
                            <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                            <span className="text-gray-600">{plan.period}</span>
                        </div>
                        <ul className="space-y-3 mb-8">
                            {plan.features.map((feature, fidx) => (
                                <li key={fidx} className="flex items-center text-gray-700">
                                    <Check className="w-5 h-5 text-green-500 mr-2" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => onSelectPlan(plan)}
                            className={`w-full py-3 rounded-lg font-semibold transition ${plan.popular
                                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                }`}
                        >
                            Subscribe Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ProductPage;