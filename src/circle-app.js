import React, { useState } from 'react';

const CircleApp = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-80 bg-white rounded-3xl shadow-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Circle</h1>
          <p className="text-sm">App</p>
        </div>
        <div className="text-center mb-6">
          <span className="bg-blue-100 text-blue-600 font-bold px-3 py-1 rounded-full">
            Rent at <span className="text-blue-500">Zero</span> security deposit
          </span>
        </div>
        <p className="text-center text-gray-500 mb-6">Set-up No Cost EMI in 3 steps</p>
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">1</div>
            <div className="ml-4">
              <p className="text-blue-600 font-bold">Eligibility check</p>
            </div>
          </div>
          <div className="ml-12 mb-4">
            <div className="flex items-center mb-2">
              <i className="fas fa-id-card text-blue-500"></i>
              <div className="ml-2">
                <p className="font-bold">Basic Details</p>
                <p className="text-gray-500 text-sm">PAN & DOB</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <i className="fas fa-briefcase text-blue-500"></i>
              <div className="ml-2">
                <p className="font-bold">Work Details</p>
                <p className="text-gray-500 text-sm">Employment details</p>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">2</div>
            <div className="ml-4">
              <p className="text-blue-600 font-bold">Setup AutoPay</p>
            </div>
          </div>
          <div className="ml-12 mb-4">
            <div className="flex items-center mb-2">
              <i className="fas fa-university text-blue-500"></i>
              <div className="ml-2">
                <p className="font-bold">Bank Details</p>
                <p className="text-gray-500 text-sm">Salary account details</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <i className="fas fa-id-badge text-blue-500"></i>
              <div className="ml-2">
                <p className="font-bold">Identity Verification</p>
                <p className="text-gray-500 text-sm">Selfie & Aadhaar KYC</p>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">3</div>
            <div className="ml-4">
              <p className="text-blue-600 font-bold">Move-In</p>
            </div>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <input 
            type="checkbox" 
            checked={checked} 
            onChange={handleCheckboxChange} 
            className="form-checkbox h-4 w-4 text-blue-600" 
          />
          <label className="ml-2 text-gray-500 text-sm">
            By clicking this, you agree to our 
            <a href="#" className="text-blue-500"> terms and conditions</a> and 
            <a href="#" className="text-blue-500"> privacy policy</a>
          </label>
        </div>
        <button className="w-full bg-blue-500 text-white py-3 rounded-full font-bold" disabled={!checked}>
          Get Started &gt;
        </button>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-500">Go Back</a>
        </div>
      </div>
    </div>
  );
};

export default CircleApp;
