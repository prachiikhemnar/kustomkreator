import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import SiteHeader from "./siteheader";
import SiteFooter from "./sitefooter";

const ContactUs = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333" }}>
      <SiteHeader />

      {/* Main Content */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <div style={{ marginBottom: "20px" }}>
          <p style={{ fontSize: "14px", color: "#999" }}>Homepage &gt; Contact Us</p>
        </div>

        <h1 style={{ fontSize: "32px", color: "#000", marginBottom: "20px" }}>Contact Us</h1>

        <button style={{ fontSize: "14px", marginBottom: "10px" }}>
          To reach our customer service team please email us at: <br />
          <a href="mailto:contact@kustomkreator.com" style={{ color: "#007bff" }}>contact@kustomkreator.com</a>
        </button>

        <button style={{ fontSize: "14px", marginBottom: "10px" }}>
          Phone: <a href="tel:+911234567890" style={{ color: "#007bff" }}>+91-123-456-7890</a>
        </button>

        <button style={{ fontSize: "14px", color: "#555" }}>
          [All calls to our customer support number 1860-123-1000 will be recorded for internal training and quality purposes.]
        </button>

        <button style={{ fontSize: "14px", marginBottom: "20px" }}>
          Address: <span style={{ color: "#007bff" }}>123 Learning Avenue, Navi Mumbai, Maharashtra, India</span>
        </button>

        <div style={{ marginTop: "2px"}}>
          <p style={{ fontSize: "16px", marginBottom: "5px" }}>Follow Us:</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <button href="#" style={{ color: "#3b5998" }}><FaFacebookF size={20} /></button>
            <button href="#" style={{ color: "#1da1f2" }}><FaTwitter size={20} /></button>
            <button href="#" style={{ color: "#0077b5" }}><FaLinkedinIn size={20} /></button>
            <button href="#" style={{ color: "#e1306c" }}><FaInstagram size={20} /></button>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
};

export default ContactUs;
