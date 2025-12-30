import React, { useState } from 'react';
import { ShoppingCart, Check, CreditCard, Building2, Wallet, Loader2 } from 'lucide-react';

const PAYMENT_METHODS = import.meta.env.VITE_PAYMENT_METHODS || {
    MASTERCARD: true,
    VISA: true,
    PAYPAL: false,
    BANK: true
};

const PaymentMethodPage = ({ plan, onSelectMethod, onBack }) => {
    const methods = [
        { id: 'mastercard', name: 'Mastercard', icon: CreditCard, enabled: PAYMENT_METHODS.MASTERCARD },
        { id: 'visa', name: 'Visa', icon: CreditCard, enabled: PAYMENT_METHODS.VISA },
        { id: 'paypal', name: 'PayPal', icon: Wallet, enabled: PAYMENT_METHODS.PAYPAL },
        { id: 'bank', name: 'Bank Transfer', icon: Building2, enabled: PAYMENT_METHODS.BANK }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <button onClick={onBack} className="text-indigo-600 hover:text-indigo-700 mb-8 flex items-center">
                    ← Back
                </button>

                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Select Payment Method</h2>

                    <div className="bg-indigo-50 p-4 rounded-lg mb-8">
                        <p className="text-gray-700">Selected Plan: <span className="font-bold">{plan.name}</span></p>
                        <p className="text-2xl font-bold text-indigo-600 mt-2">{plan.price}{plan.period}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {methods.filter(m => m.enabled).map((method) => (
                            <button
                                key={method.id}
                                onClick={() => onSelectMethod(method)}
                                className="border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-600 hover:bg-indigo-50 transition flex flex-col items-center"
                            >
                                <method.icon className="w-12 h-12 text-indigo-600 mb-3" />
                                <span className="text-lg font-semibold text-gray-800">{method.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethodPage;