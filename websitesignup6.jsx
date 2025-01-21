import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Sitefooter from './sitefooter'; // Adjust the import path as needed

const WebsiteSignup6 = () => {
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate('/mainpage1'); // Redirect to mainpage1 on form submit
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header Section */}
      <header style={{ padding: '10px', borderBottom: '2px solid #000' }}>
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
          {[
            { step: 1, label: 'Phone Verification', active: false },
            { step: 2, label: 'Seller Details', active: false },
            { step: 3, label: 'Tax Details', active: true },
            { step: 4, label: 'Dashboard', active: false, link: '/mainpage1' }, // Add link for Dashboard
          ].map(({ step, label, active, link }) => (
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
                  cursor: link ? 'pointer' : 'default', // Add pointer cursor for links
                }}
                onClick={() => link && navigate(link)} // Navigate to link on click
              >
                {step}
              </div>
              {/* Step Label */}
              <span
                style={{
                  fontSize: '16px',
                  color: active ? '#18ACDF' : '#19335F',
                  fontWeight: active ? 'bold' : 'normal',
                  cursor: link ? 'pointer' : 'default', // Add pointer cursor for labels with links
                }}
                onClick={() => link && navigate(link)} // Navigate to link on click
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Horizontal Line */}
        <hr style={{ border: 'none', borderTop: '2px solid #000', margin: '10px 0' }} />
      </div>

      {/* Main Form Section */}
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', marginLeft: '30px', textAlign: 'left' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#18ACDF', marginBottom: '20px' }}>
          Update your Tax details
        </h2>

        <form onSubmit={handleSubmit}>
          {/* GSTIN Option */}
          <div style={{ marginBottom: '15px', fontSize: '13px' }}>
            <label>
              <input type="radio" name="gstinOption" value="haveGSTIN" defaultChecked />
              I have GSTIN number
            </label>
          </div>

          {/* GSTIN Not Available */}
          <div style={{ marginBottom: '15px', fontSize: '13px' }}>
            <label>
              <input type="radio" name="gstinOption" value="noGSTIN" />
              I do not have GSTIN number
            </label>
            {/* Sub Bullet Points */}
            <div style={{ marginLeft: '24px', marginTop: '5px' }}>
              <div>
                <label>
                  <input type="radio" name="gstinSubOption" value="helpWithGST" />
                  Need help with GST registration
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="gstinSubOption" value="applySelf" />
                  Apply by self
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              backgroundColor: '#19335F',
              color: '#fff',
              padding: '8px 8px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              width: '50%',
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '260px', // Space after the button
            }}
          >
            SUBMIT
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <Sitefooter />
    </div>
  );
};

export default WebsiteSignup6;
