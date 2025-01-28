// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebsitePage from './components/websitepage';
import SiteFooter from './components/sitefooter';
import SiteHeader from './components/siteheader';
import SideBar from './components/sidebar';
import AuthForm from './components/authform'; // Ensure the path is correct
import ShoppingCart from './components/ShoppingCart.jsx'; // Fix the case-sensitive import
import ShopCustomer from './components/shopcustomer.jsx';
import ShopConfirmation from './components/shopconfirmation.jsx'; // Capitalize the component name
import WebsiteSignUp from './components/websitesignup.jsx'; 
import WebsiteSignIn from './components/websitesignin.jsx';
import WebsiteSignUp2 from './components/websitesignup2.jsx';
import WebsiteSignup3 from './components/websitesignup3.jsx';
import ShopHelpCenter from './components/shophelpcenter.jsx';
import WebsiteSignup4 from './components/websitesignup4.jsx';
import WebsiteSignup5 from './components/websitesignup5.jsx';
import WebsiteSignup6 from './components/websitesignup6.jsx';
import MainPage1 from './components/mainpage1.jsx';
import MainPage3 from './components/mainpage3.jsx';
import MainPage4 from './components/mainpage4.jsx';
import MainPage8 from './components/mainpage8.jsx';
import SideAdminCentral from './components/sideadmincentral.jsx';
import AdminProductManagement from './components/adminproductmanagement.jsx';
import "./components/style1.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Handle the signup request
  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",  // Ensure this is POST, not GET
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          password: formData.password,  
        }),
      });

      if (response.ok) {
        console.log("Signup successful!");
      } else {
        console.error("Signup failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/websitepage" element={<WebsitePage />} />
        <Route path="/sitefooter" element={<SiteFooter />} />
        <Route path="/siteheader" element={<SiteHeader />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/authform" element={<AuthForm />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/shopcustomer" element={<ShopCustomer />} />
        <Route path="/shopconfirmation" element={<ShopConfirmation />} />
        <Route
          path="/websitesignup"
          element={
            <WebsiteSignUp
              formData={formData}
              setFormData={setFormData}
              handleSignup={handleSignup}
            />
          }
        />
        <Route path="/websitesignin" element={<WebsiteSignIn />} />
        <Route path="/websitesignup2" element={<WebsiteSignUp2 />} />
        <Route path="/websitesignup3" element={<WebsiteSignup3 />} />
        <Route path="/shophelpcenter" element={<ShopHelpCenter />} />
        <Route path="/websitesignup4" element={<WebsiteSignup4 />} />
        <Route path="/websitesignup5" element={<WebsiteSignup5 />} />
        <Route path="/websitesignup6" element={<WebsiteSignup6 />} />
        <Route path="/mainpage1" element={<MainPage1 />} />
        <Route path="/mainpage3" element={<MainPage3 />} />
        <Route path="/mainpage4" element={<MainPage4 />} />
        <Route path="/mainpage8" element={<MainPage8 />} />
        <Route path="/sideadmincentral" element={<SideAdminCentral />} />
        <Route path="/adminproductmanagement" element={<AdminProductManagement />} />
      </Routes>
    </Router>
  );
};

export default App;
