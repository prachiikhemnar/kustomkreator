import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link
import SiteFooter from './sitefooter';

function WebsiteSignup3() {
  const [companyName, setCompanyName] = useState('');
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAgreementChecked) {
      alert('Registration submitted successfully!');
      // Redirect to WebsiteSignup4 page
      navigate('/websitesignup4');
    } else {
      alert('Please agree to the Seller Agreement before proceeding.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Logo section */}
      <div style={{ marginLeft: '20px', marginTop: '20px' }}>
        <img
          src="/sellercentrallogo.png"
          alt="Logo"
          style={{ width: '200px', height: 'auto' }}
        />
      </div>

      {/* Form section */}
      <div style={{ marginLeft: '20px', marginTop: '20px', paddingRight: '20px' }}>
        <h2 style={{ fontSize: '28px', color: '#18ACDF', fontWeight: 'bold', marginBottom: '10px' }}>
          Register and Start Selling
        </h2>
        <p style={{ fontSize: '14px', marginBottom: '10px' }}>
          Please have the following ready before you begin:
        </p>
        <ul style={{ fontSize: '14px', marginBottom: '20px', paddingLeft: '20px', listStyleType: 'disc', color: '#19335F', lineHeight: '1.8' }}>
          <li>Your bank account details for receiving payments from Kustom Kreator</li>
          <li>Tax (GST/PAN) details of your business</li>
        </ul>

        <p style={{ fontSize: '14px', marginBottom: '20px' }}>
          Please ensure that all the information you submit is accurate.
        </p>

        <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
          Enter details below to continue registration
        </h3>

        <form onSubmit={handleSubmit} style={{ marginBottom: '40px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label
              htmlFor="companyName"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '16px',
              }}
            >
              Company/Business Name
            </label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Kustom Kreator"
              style={{
                width: '20%',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
              required
            />
          </div>
          <p style={{ fontSize: '14px', marginBottom: '20px' }}>
            Enter the company/business name as registered in GST/PAN
          </p>
          <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>
            Seller Agreement
          </h4>
          <div style={{ marginBottom: '20px', width: '50%' }}>
            <input
              type="checkbox"
              id="agreement"
              checked={isAgreementChecked}
              onChange={(e) => setIsAgreementChecked(e.target.checked)}
            />
            <label
              htmlFor="agreement"
              style={{ marginLeft: '8px', fontSize: '14px', lineHeight: '1.1' }}
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
              classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage and, going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33.
            </label>
          </div>

          <button
            type="submit"
            style={{
              padding: '8px 18px',
              fontSize: '13px',
              backgroundColor: '#19335F',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Continue
          </button>
        </form>

        {/* Add Back Button */}
        <Link to="/websitesignup4" style={{ fontSize: '14px', color: '#18ACDF' }}>
          Go to Tax Details
        </Link>

      </div>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}

export default WebsiteSignup3;
