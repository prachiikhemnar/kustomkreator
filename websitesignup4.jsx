import React from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Sitefooter from './sitefooter'; // Adjust the import path as needed

const WebsiteSignup4 = () => {
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    navigate('/websitesignup5'); // Navigate to websitesignup5 when the form is submitted
  };

  return (
    <div>
      {/* Header Section */}
      <header style={{ padding: '10px', borderBottom: '0px solid #000' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <div style={{ flex: '0 0 auto' }}>
            <img
              src="/sellercentrallogo.png" // Replace with your logo path
              alt="Logo"
              style={{ width: '20', height: '40px' }}
            />
          </div>
        </div>
      </header>

      {/* Progress Steps Section */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        {/* Top Horizontal Line */}
        <hr style={{ border: 'none', borderTop: '2px solid #000', margin: '10px 0' }} />

        {/* Progress Steps */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px' }}>
          {[{ step: 1, label: 'Phone Verification', active: false, link: '/' },
            { step: 2, label: 'Seller Details', active: true, link: '/websitesignup4' },
            { step: 3, label: 'Tax Details', active: false, link: '/websitesignup5' },
            { step: 4, label: 'Dashboard', active: false, link: '/mainpage1' },
          ].map(({ step, label, active, link }) => (
            <Link to={link} key={step} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                {/* Step Circle */}
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: `2px solid ${active ? '#19335F' : '#939393'}`,
                    color: active ? '#19335F' : '#939393',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    fontSize: '16px',
                  }}
                >
                  {step}
                </div>
                {/* Step Label */}
                <span
                  style={{
                    fontSize: '16px',
                    color: active ? '#19335F' : '#939393',
                    fontWeight: active ? 'bold' : 'normal',
                  }}
                >
                  {label}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Horizontal Line */}
        <hr style={{ border: 'none', borderTop: '2px solid #000', margin: '10px 0' }} />
      </div>

      {/* Main Form Section */}
      <div style={{ padding: '10px', maxWidth: '600px', textAlign: 'left' }}>
        <div style={{ borderBottom: '0px solid #ffff', paddingBottom: '1px', marginBottom: '10px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#18ACDF' }}>
            Tell us about your business
          </h2>
        </div>
        <form onSubmit={handleSubmit}> {/* Add handleSubmit to form submission */}
          {/* Business Name */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="storeName" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
              Set a name for your “Kustom Kreator Store“
            </label>
            <input
              type="text"
              id="storeName"
              placeholder="Kustom Kreator Store"
              style={{ width: '60%', padding: '4px', borderRadius: '2px', border: '1px solid #19335F' }}
            /> Check Availability
            <button
              type="button"
              style={{
                marginTop: '5px',
                display: 'block',
                color: '#19335F',
                textDecoration: 'none',
                fontSize: '12px',
                fontWeight: 'bold',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
            </button>
          </div>

          {/* Product Category */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="productCategory" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
              Select Product Category
            </label>
            <select
              id="productCategory"
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            >
              <option>Choose primary category</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <h2 style={{ fontSize: '17px', fontWeight: '600', color: '#000000' }}>
            Enter your business address
          </h2>
          {/* Address Fields */}
          {[{ id: 'pincode', label: 'Pincode', placeholder: '000000' },
            { id: 'address1', label: 'Address Line 1', placeholder: '3555 Burnside Avenue' },
            { id: 'address2', label: 'Address Line 2', placeholder: '' },
            { id: 'city', label: 'City', placeholder: 'Logan' },
            { id: 'state', label: 'State', placeholder: 'UT' },
            { id: 'country', label: 'Country/Region', placeholder: 'Kazakhstan' },
          ].map(({ id, label, placeholder }) => (
            <div key={id} style={{ marginBottom: '8px' }}>
              <label htmlFor={id} style={{ display: 'block', marginBottom: '2px', fontWeight: '500' }}>
                {label}
              </label>
              <input
                type="text"
                id={id}
                placeholder={placeholder}
                style={{ width: '100%', padding: '4px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              backgroundColor: '#19335F',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '3px',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            CONTINUE
          </button>
        </form>
      </div>
      <Sitefooter />
    </div>
  );
};

export default WebsiteSignup4;
