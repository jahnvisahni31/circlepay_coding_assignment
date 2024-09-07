import React, { useState } from 'react';
import { ArrowLeft, AlignJustify, Star, Heart } from 'lucide-react';

const PropertyCard = ({ name, rating, location, price, imageUrl, onClick }) => (
  <div
    className="bg-white rounded-xl mb-5 overflow-hidden shadow cursor-pointer transition-transform transform hover:scale-105"
    onClick={onClick}
  >
    <img
      src={imageUrl}
      alt={name}
      className="w-full h-40 object-cover sm:h-48 md:h-56 lg:h-64"
    />
    <div className="p-4">
      <h3 className="font-bold mb-1 text-lg">{name}</h3>
      <div className="flex items-center mb-1">
        <Star className="w-4 h-4 text-yellow-400 mr-1" />
        <span className="text-sm text-gray-600">{rating}</span>
      </div>
      <p className="text-sm text-gray-600 mb-1">{location}</p>
      <p className="text-sm text-gray-800 font-semibold">{price}</p>
    </div>
  </div>
);

const ConfirmationPage = ({ 
  paymentAmount, 
  monthlyRent, 
  rentCycle, 
  onContinue, 
  onBack 
}) => {
  return (
    <div className="max-w-md mx-auto bg-white p-4 min-h-screen flex flex-col">
      <div className="flex items-center mb-4">
        <button onClick={onBack} className="mr-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-between mb-6">
        <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">Setup Autopay</div>
        <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">Setup Autopay</div>
        <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">KYC & move-in</div>
      </div>

      <h1 className="text-2xl font-bold mb-2">One step away</h1>
      <p className="text-blue-500 mb-6">from your dream home</p>

      <div className="bg-blue-100 rounded-full p-6 mb-6 flex justify-center">
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </div>

      <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg mb-6 text-center">
        Rent converted to Zero-Cost EMI
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Co-living partner</span>
          <span className="font-semibold">Rent-OK</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Payment Amount</span>
          <span className="font-semibold">INR {paymentAmount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Monthly rent<br/>(Zero-Cost EMI)</span>
          <span className="font-semibold">{monthlyRent} INR/mo.</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Rent cycle<br/>(EMI Duration)</span>
          <span className="font-semibold">{rentCycle} Months</span>
        </div>
      </div>

      <div className="bg-green-100 text-green-600 px-4 py-2 rounded-lg mb-6 text-center font-semibold">
        Zero COST EMI
      </div>

      <p className="text-xs text-gray-500 mb-4">
        By clicking on next, you acknowledge that you have read View Loan Agreement & KYC agreed to the terms and conditions contained in the loan agreement.
      </p>

      <button 
        onClick={onContinue}
        className="bg-blue-500 text-white py-3 rounded-full font-semibold mt-auto"
      >
        Continue &gt;
      </button>
    </div>
  );
};

const IntegratedSearchTransaction = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const properties = [
    {
      name: "Sky Dandelions Apartment",
      rating: "4.9",
      location: "Sector 28, Gurgaon",
      price: "₹ 22,020 / month",
      imageUrl: "../assets/skyland.png"
    },
    {
      name: "Wings Tower",
      rating: "4.9",
      location: "Sector 27, Gurgaon",
      price: "₹ 17,000 / month",
      imageUrl: "../assets/wingtower.png"
    },
    {
      name: "Wayside Modern House",
      rating: "4.8",
      location: "MG Road, Gurgaon",
      price: "₹ 15,000 / month",
      imageUrl: "../assets/modern_house.png"
    }
  ];

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const handleBackToSearch = () => {
    setSelectedProperty(null);
    setShowConfirmation(false);
  };

  const calculateTotal = () => {
    const pricePerMonth = parseInt(selectedProperty?.price?.replace(/[^\d]/g, '')) || 0;
    return pricePerMonth * selectedPeriod;
  };

  const handlePayClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const startOnboarding = () => {
    setIsModalOpen(false);
    setShowOnboarding(true);
  };

  const backToTransaction = () => {
    setShowOnboarding(false);
    setShowConfirmation(false);
  };
  
  const handleContinueToConfirmation = () => {
    setShowOnboarding(false);
    setShowConfirmation(true);
  };

  const handleFinalContinue = () => {
    // Handle final continue action (e.g., submit data to backend)
    console.log("Final continue clicked");
  };

  if (showConfirmation) {
    return (
      <ConfirmationPage 
        paymentAmount={calculateTotal().toLocaleString()}
        monthlyRent={selectedProperty?.price?.split(' ')[0]}
        rentCycle={selectedPeriod}
        onContinue={handleFinalContinue}
        onBack={backToTransaction}
      />
    );
  }
  const OnboardingStep = ({ step, title, description }) => (
    <div className="flex items-center mb-4">
      <div className="w-8 h-8 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mr-3">
        {step}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );

  if (showOnboarding) {
    return (
      <div className="max-w-md mx-auto bg-white p-6 min-h-screen">
        <div className="flex items-center mb-6">
          <button onClick={backToTransaction} className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-semibold">Circle App</h2>
        </div>
        <h3 className="text-lg font-semibold mb-4">Rent at Zero security deposit ✨</h3>
        <p className="mb-6">Set-up No Cost EMI in 3 steps</p>
        <OnboardingStep step={1} title="Eligibility check" description="Basic Details" />
        <OnboardingStep step={2} title="Setup AutoPay" description="Bank Details" />
        <OnboardingStep step={3} title="Move-In" description="" />
        <div className="mt-8">
          <label className="flex items-center text-sm text-gray-600 mb-4">
            <input type="checkbox" className="mr-2" />
            By clicking this, you approved to our terms and conditions and privacy policy
          </label>
          <button className="w-full bg-blue-500 text-white py-3 rounded-full font-semibold" onClick={handleContinueToConfirmation}>
            Get Started &gt;
          </button>
        </div>
        <button onClick={backToTransaction} className="mt-4 text-center w-full text-blue-500">
          Go Back
        </button>
      </div>
    );
  }

  if (selectedProperty) {
    return (
      <div className="max-w-md mx-auto bg-gray-100 p-6 min-h-screen sm:max-w-full">
        <div className="bg-white rounded-3xl p-6 shadow sm:mx-4">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={handleBackToSearch}
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-semibold">Transaction review</h2>
            <div className="w-10 h-10"></div>
          </div>

          <div className="relative mb-6">
            <img
              src={selectedProperty.imageUrl}
              alt={selectedProperty.name}
              className="w-full h-48 object-cover rounded-xl sm:h-64"
            />
            <button className="absolute top-2 right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </button>
            <div className="absolute bottom-2 left-2 bg-white rounded-lg px-3 py-1">
              <span className="font-bold">{selectedProperty.price}</span>
            </div>
          </div>

          <h3 className="font-bold text-lg mb-1">{selectedProperty.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{selectedProperty.location}</p>

          <h4 className="font-semibold mb-2">Select Period</h4>
          <div className="flex gap-2 mb-6">
            {[3, 6, 9].map((months) => (
              <button
                key={months}
                onClick={() => setSelectedPeriod(months)}
                className={`flex-1 py-2 rounded-full ${
                  selectedPeriod === months
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200'
                }`}
              >
                {months} months
              </button>
            ))}
          </div>

          <h4 className="font-semibold mb-2">Payment Detail</h4>
          <div className="bg-gray-100 rounded-xl p-4 mb-6">
            <div className="flex justify-between mb-2">
              <span>Period time</span>
              <span>{selectedPeriod} month{selectedPeriod > 1 ? 's' : ''}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Monthly payment</span>
              <span>{selectedProperty.price}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Security deposit</span>
              <span>₹ 0</span>
            </div>
            <div className="flex justify-between mb-2 font-semibold">
              <span>Total Calculation</span>
              <span>{selectedPeriod} * {selectedProperty.price}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₹ {calculateTotal().toLocaleString()}</span>
            </div>
          </div>

          <button 
            className="w-full bg-blue-500 text-white py-3 rounded-full font-semibold"
            onClick={handlePayClick}
          >
            Pay with Circle
          </button>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-80">
              <div className="text-center mb-4">
                <div className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 inline-block text-sm font-semibold">
                  Rent at <span className="font-bold">Zero security deposit</span> ✨
                </div>
              </div>
              <div className="text-center mb-4">
                <div className="bg-blue-50 text-blue-600 rounded-full p-4 inline-block">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-blue-600 font-semibold mt-2">Approved</div>
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-blue-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>New Rent Offer: <span className="font-bold">₹ 20,000</span></span>
                </li>
                <li className="flex items-center text-blue-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Zero security deposit <span className="text-blue-400">move-in</span></span>
                </li>
                <li className="flex items-center text-blue-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>3-Months <span className="text-blue-400">salary cover</span></span>
                </li>
              </ul>
              <div className="text-center">
                <button 
                  className="bg-blue-600 text-white rounded-full px-6 py-2 font-semibold shadow-lg"
                  onClick={startOnboarding}
                >
                  Pay with Circle
                  <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="text-center mt-4">
                <button 
                  onClick={closeModal} 
                  className="text-gray-500 underline"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-gray-100 p-6 min-h-screen sm:max-w-full">
      <div className="bg-white rounded-3xl p-6 shadow sm:mx-4">
        <div className="flex justify-between items-center mb-6">
          <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-semibold">Search results</h2>
          <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <AlignJustify className="w-6 h-6" />
          </button>
        </div>
        <div className="bg-gray-100 rounded-full px-4 py-2 mb-6">
          <input
            type="text"
            placeholder="Search..."
            defaultValue="Gurgaon"
            className="w-full bg-transparent outline-none"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {properties.map((property, index) => (
            <PropertyCard 
              key={index} 
              {...property} 
              onClick={() => handlePropertyClick(property)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegratedSearchTransaction;
