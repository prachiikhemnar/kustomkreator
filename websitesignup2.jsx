import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import SiteFooter from './sitefooter';

const WebsiteSignup2 = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // For now, we'll just log the OTP and navigate to the next page
    console.log('OTP submitted:', otp);
    
    // After OTP verification, navigate to the next page
    navigate('/websitesignup3');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Logo at the top-left corner */}
      <div className="absolute top-4 left-4">
        <img
          src="/sellercentrallogo.png"
          alt="Logo"
          className="w-60 h-30" // Adjust width/height as needed
        />
      </div>

      {/* OTP Verification Form */}
      <div className="flex-1 flex justify-center items-center">
        <div style={{ width: '350px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Verify Mobile Number</h2>
          <p style={{ textAlign: 'center' }}>A text with a One Time Password (OTP) has been sent to your mobile number xxxxx xx345</p>
          
          <form onSubmit={handleFormSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="otp" style={{ display: 'block', marginBottom: '5px' }}>Enter OTP</label>
              <input 
                type="text" 
                id="otp" 
                value={otp} 
                onChange={handleOtpChange} 
                style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
                required 
              />
              <div style={{ textAlign: 'right', marginBottom: '20px' }}>
                <a href="#resend" style={{ fontSize: '12px', color: '#18ACDF', textDecoration: 'none' }}>Resend OTP</a>
              </div>
            </div>
            
            <button type="submit" style={{ width: '100%', padding: '10px 0', backgroundColor: '#19335F', color: '#fff', fontSize: '16px', border: 'none', borderRadius: '5px' }}>
              CREATE YOUR ACCOUNT
            </button>
          </form>

          <p style={{ marginTop: '20px', fontSize: '12px', textAlign: 'center' }}>
            By creating an account you agree to Kustom Kreator 
            <a href="#terms" style={{ color: '#18ACDF', textDecoration: 'none' }}> conditions of use & sale</a>. 
            Please see our <a href="#privacy" style={{ color: '#18ACDF', textDecoration: 'none' }}>Privacy Notice</a>, 
            <a href="#cookies" style={{ color: '#18ACDF', textDecoration: 'none' }}> Cookies Notice</a> and 
            <a href="#ads" style={{ color: '#18ACDF', textDecoration: 'none' }}> Interest-Based Ads Notice</a>.
          </p>
        </div>
      </div>
      
      <SiteFooter />
    </div>
  );
};

export default WebsiteSignup2;
