import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

const CheckoutForm = ({ plan, paymentMethod, onBack }) => {
    const [formData, setFormData] = useState({
        organizationName: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        subdomain: ''
    });
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        // Basic validation
        if (!formData.organizationName || !formData.firstName || !formData.lastName ||
            !formData.phone || !formData.email || !formData.subdomain) {
            alert('Please fill in all fields');
            return;
        }

        setLoading(true);
        setDisabled(true);

        // Placeholder for API call
        try {
            // const response = await fetch('/api/checkout', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({
            //     ...formData,
            //     plan: plan.name,
            //     paymentMethod: paymentMethod.name,
            //     fullDomain: `${formData.subdomain}.pixa.tech`
            //   })
            // });

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Mock success response
            const newDomain = `https://${formData.subdomain}.pixa.tech`;

            // Redirect to new domain
            alert(`Success! Redirecting to ${newDomain}`);
            // window.location.href = newDomain;

        } catch (error) {
            console.error('Checkout error:', error);
            setLoading(false);
            setDisabled(false);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <button onClick={onBack} className="text-indigo-600 hover:text-indigo-700 mb-8 flex items-center">
                    ← Back
                </button>

                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Complete Your Order</h2>

                    <div className="bg-indigo-50 p-4 rounded-lg mb-8">
                        <p className="text-gray-700">Plan: <span className="font-bold">{plan.name}</span></p>
                        <p className="text-gray-700">Payment: <span className="font-bold">{paymentMethod.name}</span></p>
                        <p className="text-2xl font-bold text-indigo-600 mt-2">{plan.price}{plan.period}</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Organization Name</label>
                            <input
                                type="text"
                                name="organizationName"
                                value={formData.organizationName}
                                onChange={handleChange}
                                disabled={disabled}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent disabled:bg-gray-100"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    disabled={disabled}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent disabled:bg-gray-100"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    disabled={disabled}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent disabled:bg-gray-100"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                disabled={disabled}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent disabled:bg-gray-100"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={disabled}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent disabled:bg-gray-100"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Subdomain</label>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    name="subdomain"
                                    value={formData.subdomain}
                                    onChange={handleChange}
                                    disabled={disabled}
                                    placeholder="your-company"
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent disabled:bg-gray-100"
                                />
                                <span className="px-4 py-3 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg text-gray-600">
                                    .pixa.tech
                                </span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Only lowercase letters, numbers, and hyphens allowed</p>
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={disabled}
                            className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                'Complete Purchase'
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;