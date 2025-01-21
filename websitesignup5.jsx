import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Use useNavigate for navigation
import Sitefooter from './sitefooter'; // Adjust the import path as needed

const WebsiteSignup5 = () => {
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the next page
    navigate('/websitesignup6');
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header Section */}
      <header style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <div>
            <img
              src="/sellercentrallogo.png" // Replace with your logo path
              alt="Logo"
              style={{ height: '40px' }}
            />
          </div>
        </div>
      </header>

      {/* Progress Steps Section */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        {/* Progress Steps */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px' }}>
          {[{ step: 1, label: 'Phone Verification', active: false },
            { step: 2, label: 'Seller Details', active: false },
            { step: 3, label: 'Tax Details', active: true },
            { step: 4, label: 'Dashboard', active: false },
          ].map(({ step, label, active }) => (
            <div
              key={step}
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
                  border: `2px solid ${active ? '#18ACDF' : '#19335F'}`,
                  color: active ? '#18ACDF' : '#19335F',
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
                  color: active ? '#18ACDF' : '#19335F',
                  fontWeight: active ? 'bold' : 'normal',
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
        {/* First Horizontal Line */}
        <hr style={{ margin: '20px 0', borderColor: '#ccc' }} />
      </div>

      {/* Main Form Section */}
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', marginLeft: '30px', textAlign: 'left' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#18ACDF', marginBottom: '20px' }}>
          Update your Tax details
        </h2>

        <form onSubmit={handleSubmit}>
          {/* GSTIN Option */}
          <div style={{ marginBottom: '15px' }}>
            <label>
              <input type="radio" name="gstinOption" value="haveGSTIN" defaultChecked />
              I have GSTIN number
            </label>
          </div>

          {/* Tax Details */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Enter your tax details
            </label>
            <select
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '10px' }}
            >
              <option>Rajasthan</option>
              {/* Add more options as needed */}
            </select>
            <label style={{ display: 'block', marginBottom: '2px', fontWeight: 'bold' }}>
              Seller Legal Name
            </label>
            <input
              type="text"
              placeholder="Seller Legal Name"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '10px' }}
            />
            <label style={{ display: 'block', marginBottom: '2px', fontWeight: 'bold' }}>
              GST Number
            </label>
            <input
              type="text"
              placeholder="XXXXXXXXXX"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '10px' }}
            />
            <label style={{ display: 'block', marginBottom: '2px', fontWeight: 'bold' }}>
              PAN Number
            </label>
            <input
              type="text"
              placeholder="XXXXXXXXXX"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          {/* GSTIN Not Available */}
          <div style={{ marginBottom: '15px' }}>
            <label>
              <input type="radio" name="gstinOption" value="noGSTIN" />
              I do not have GSTIN number
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              backgroundColor: '#19335F',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            SUBMIT
          </button>
        </form>
      </div>
      
      {/* Second Horizontal Line */}
      <hr style={{ margin: '20px 0', borderColor: '#ccc' }} />
      
      {/* Navigation Links */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/websitesignup4" style={{ color: '#18ACDF', textDecoration: 'none', fontWeight: 'bold' }}>
          Back to Seller Details
        </Link>
      </div>
      <Sitefooter />
    </div>
  );
};

export default WebsiteSignup5;
