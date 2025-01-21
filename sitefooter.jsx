import { FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';

export function SiteFooter() {
  return (
    <footer className="text-black">
      {/* Full width blue background */}
      <div className="w-full bg-blue-500 text-white py-10">
        <div className="container grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm hover:underline">About Us</a></li>
              <li><a href="/store" className="text-sm hover:underline">Our Store</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Career Opportunities</h3>
            <ul className="space-y-2">
              <li><a href="/selling-programs" className="text-sm hover:underline">Selling Programs</a></li>
              <li><a href="/advertise" className="text-sm hover:underline">Advertise</a></li>
              <li><a href="/cooperation" className="text-sm hover:underline">Cooperation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">How to Buy</h3>
            <ul className="space-y-2">
              <li><a href="/payments" className="text-sm hover:underline">Making Payments</a></li>
              <li><a href="/delivery-options" className="text-sm hover:underline">Delivery Options</a></li>
              <li><a href="/buyer-protection" className="text-sm hover:underline">Buyer Protection</a></li>
              <li><a href="/new-user-guide" className="text-sm hover:underline">New User Guide</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Help</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-sm hover:underline">Contact Us</a></li>
              <li><a href="/faq" className="text-sm hover:underline">FAQ</a></li>
              <li><a href="/privacy-policy" className="text-sm hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="w-full bg-white py-4">
        <div className="flex justify-between items-center container">
          {/* Left side: Address */}
          <p className="text-sm text-left">
            145-179 Finder Road, City of Monash, Melbourne, Australia
          </p>

          {/* Center: Copyright message */}
          <p className="text-xs text-center">© 2024 Lumine Shop. All Rights Reserved.</p>

          {/* Right side: Icons */}
          <div className="flex space-x-4 text-xl">
            <a href="https://www.instagram.com" className="hover:text-blue-500"><FaInstagram /></a>
            <a href="https://www.facebook.com" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="mailto:someone@example.com" className="hover:text-blue-500"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default SiteFooter;