import React, { useState } from 'react';
import Banner from './components/Banner.jsx';
import ProductCard from './components/ProductCard.jsx';
import ProductPage from './pages/ProductPage.jsx';
import PaymentMethodPage from './pages/PaymentMethodPage.jsx';
import CheckoutForm from './components/CheckoutForm.jsx';
import { products, plans } from './data.js';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';


export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('product');
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setCurrentView('payment');
  };

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
    setCurrentView('checkout');
  };

  const goBack = () => {
    if (currentView === 'checkout') setCurrentView('payment');
    else if (currentView === 'payment') setCurrentView('product');
    else if (currentView === 'product') setCurrentView('home');
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onNavigate={handleNavigate} />

      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Banner />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Premium Products</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => handleProductClick(product)}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {currentView === 'product' && (
          <ProductPage
            product={selectedProduct}
            onSelectPlan={handlePlanSelect}
            onBack={goBack}
          />
        )}

        {currentView === 'payment' && (
          <PaymentMethodPage
            plan={selectedPlan}
            onSelectMethod={handlePaymentMethodSelect}
            onBack={goBack}
          />
        )}

        {currentView === 'checkout' && (
          <CheckoutForm
            plan={selectedPlan}
            paymentMethod={selectedPaymentMethod}
            onBack={goBack}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}