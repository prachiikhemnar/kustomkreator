import { useState } from "react";
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

export function SiteHeader({ setCurrentPage, cartCount }) {
  const [isLabMaterialOpen, setIsLabMaterialOpen] = useState(false);

  return (
    <header className="w-full font-sans">
      {/* Top Bar */}
      <div className="bg-white text-black border-b">
        <div className="w-full px-4 flex flex-col sm:flex-row items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center pt-2 pl-2">
            <a href="/" className="mr-4">
              <img
                src={`${process.env.PUBLIC_URL}/logo.png`}
                alt="Kustom Kreator"
                className="h-7"
              />
            </a>
          </div>
          {/* Delivery Address */}
          <div className="text-xs text-gray-900 text-center sm:text-left">
            <span>Delivery Address:</span>
            <br />
            <span>Salatiga City, Central Java</span>
          </div>
          {/* Search Bar */}
          <form className="w-full sm:w-64">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 px-4 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none"
              >
                🔍
              </button>
            </div>
          </form>
          {/* Navigation Links */}
          <nav className="hidden sm:flex items-center gap-4 text-sm text-[9px] font-poppins">
            <a href="/about" className="hover:underline">
              About Us
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
            <a href="/help" className="hover:underline">
              Help & Support
            </a>
          </nav>
          {/* Social Media */}
          <div className="flex items-center gap-8">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="mailto:info@example.com" className="hover:text-gray-500">
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      {/* Sub Navigation Bar */}
      <div className="bg-gray-900 text-white h-14 py-2">
        <div className="w-full px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <svg
              className="w-6 h-8 hidden sm:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <a href="/menu" className="hover:underline">
              Menu
            </a>
          </div>
          {/* Advertisement */}
          <div className="ml-29 mt-0">
            <img
              src={`${process.env.PUBLIC_URL}/Men cosmetic advert.png`}
              alt="Cosmetic Advertisement"
              className="h-12 hidden sm:block"
            />
          </div>
          <div className="flex items-center gap-8">
            <a href="/signIn" className="hover:underline hidden sm:inline">
              Sign In
            </a>
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm text-white  focus:outline-none"
              onClick={() => setCurrentPage("cartPage")} // Navigate to cart page (if implemented)
            >
              <span>Go to Cart</span>
              <span
                className="bg-white text-blue-500 font-bold px-2 py-1 rounded-full"
              >
                {cartCount || 0}
              </span>
            </button>
            <img
              src={`${process.env.PUBLIC_URL}/Bot Icon.png`}
              alt="Brainy"
              className="h-7 hidden sm:block"
            />
            <a href="/brainy" className="hover:underline hidden sm:inline">
              Brainy
            </a>
          </div>
        </div>
      </div>
      {/* Categories Section */}
      <div className="bg-gray-100">
        <div className="w-full px-4 flex items-center justify-between h-12 overflow-x-auto">
          <nav className="flex items-left gap-28 text-sm">
            <button className="text-sm font-medium hover:text-blue-800 hover:underline">
              Categories
            </button>
            <button className="text-sm font-medium hover:text-blue-500 hover:underline">
              Apparel
            </button>
            <button className="text-sm font-medium hover:text-blue-500 hover:underline">
              School
            </button>
            <button className="text-sm font-medium hover:text-blue-500 hover:underline">
              Sports
            </button>
            <button
              className="text-sm font-medium hover:text-blue-500 hover:underline"
              onClick={() => setIsLabMaterialOpen(!isLabMaterialOpen)}
            >
              Lab Material
            </button>
            {isLabMaterialOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                onClick={() => setIsLabMaterialOpen(false)} // Close on background click
              >
                <div
                  className="bg-white shadow-lg border p-4 rounded-md w-full max-w-lg md:w-1/2 max-h-[80vh] overflow-y-auto relative"
                  onClick={(e) => e.stopPropagation()} // Prevent close on content click
                >
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    onClick={() => setIsLabMaterialOpen(false)}
                  >
                    ✕
                  </button>
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">Lab Materials</h2>
                    <div className="grid grid-cols-2 gap-4">
                      {/* Left Column */}
                      <div>
                        <h3 className="text-gray-700 font-semibold mb-2">
                          Physics
                        </h3>
                        <ul className="text-sm text-gray-600 mb-6">
                          <li>Battery Eliminator</li>
                          <li>Potentiometer</li>
                          <li>Convex Lens</li>
                          <li>Magnet</li>
                          <li>Vernier Caliper</li>
                        </ul>
                        <h3 className="text-gray-700 font-semibold mb-2">
                          Glasswares
                        </h3>
                        <ul className="text-sm text-gray-600">
                          <li>Beakers</li>
                          <li>Flasks</li>
                          <li>Test Tubes</li>
                          <li>Measuring Cylinders</li>
                          <li>Pipettes</li>
                        </ul>
                      </div>
                      {/* Right Column */}
                      <div>
                        <h3 className="text-gray-700 font-semibold mb-2">
                          Devices
                        </h3>
                        <ul className="text-sm text-gray-600 mb-6">
                          <li>Bunsen Burner</li>
                          <li>Microscope</li>
                          <li>Hot Plate</li>
                          <li>Magnetic Stirrer</li>
                          <li>Water Bath</li>
                        </ul>
                        <h3 className="text-gray-700 font-semibold mb-2">
                          Safety Equipment
                        </h3>
                        <ul className="text-sm text-gray-600">
                          <li>Lab Glasses</li>
                          <li>Lab Coats</li>
                          <li>Nitrile Gloves</li>
                          <li>Eye Wash</li>
                          <li>Emergency Shower</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <button className="text-sm font-medium hover:text-blue-500 hover:underline">
              Comics
            </button>
            <button className="text-sm font-medium hover:text-blue-500 hover:underline">
              Study
            </button>
            <button className="text-sm font-medium hover:text-blue-500 hover:underline">
              Books
            </button>
            <button className="text-sm font-medium hover:text-blue-500 hover:underline">
              Craft Materials
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
