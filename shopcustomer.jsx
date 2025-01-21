import React, { useState } from 'react';
import SiteHeader from './siteheader'; // Import the SiteHeader component
import SiteFooter from './sitefooter'; // Import the SiteFooter component

const ShopCustomer = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit');

  return (
    <div>
      {/* Header */}
      <SiteHeader /> 

    <div className="container mx-auto px-4 py-6">
      <div className="grid gap-6 lg:grid-cols-[1fr,340px]">
        <div className="space-y-6">
          {/* Customer Information */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Customer Information</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-1">E-mail</label>
                <input id="email" type="email" className="w-full p-2 border rounded" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block mb-1">First Name</label>
                  <input id="firstName" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-1">Last Name</label>
                  <input id="lastName" className="w-full p-2 border rounded" />
                </div>
              </div>
            </div>
          </section>

          {/* Shipping Address */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Shipping Address</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="country" className="block mb-1">Country</label>
                <select id="country" className="w-full p-2 border rounded">
                  <option value="">Select country</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                </select>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="state" className="block mb-1">State/Province</label>
                  <input id="state" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label htmlFor="city" className="block mb-1">City</label>
                  <input id="city" className="w-full p-2 border rounded" />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block mb-1">Address</label>
                <input id="address" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1">Phone Number</label>
                <input id="phone" type="tel" className="w-full p-2 border rounded" />
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Select a payment method</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="credit"
                  value="credit"
                  checked={paymentMethod === 'credit'}
                  onChange={() => setPaymentMethod('credit')}
                />
                <label htmlFor="credit" className="flex items-center space-x-2">
                  <span>Credit or debit card</span>
                  <img src="/Group 33788.png" alt="Credit card icons" width={120} height={24} />
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="paypal"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                />
                <label htmlFor="paypal">PayPal</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="other"
                  value="other"
                  checked={paymentMethod === 'other'}
                  onChange={() => setPaymentMethod('other')}
                />
                <label htmlFor="other">Other payment options</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="cash"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={() => setPaymentMethod('cash')}
                />
                <label htmlFor="cash">Cash on Delivery/Pay on Delivery</label>
              </div>
            </div>
          </section>
          {/* Review Items */}
<section className="space-y-4">
  <h2 className="text-xl font-semibold">Review Items and Delivery</h2>
  <div className="border p-4 rounded">
    <div className="flex justify-center">
      <img
        src="/reviewitems.png"
        alt="Product"
        width={900}
        height={200}
        className="rounded-md object-cover"
      />
    </div>
  </div>
</section>

         {/* Product Carousel */}
         <section className="space-y-4">
  <div className="flex space-x-4 pb-4">
    <div className="w-48 p-2 border rounded">
      <img
        src="/shopcustomerpc1.png"
        alt="Product"
        width={180}
        height={240}
        className="rounded-md object-cover mb-2"
      />
    </div>
    <div className="w-48 p-2 border rounded">
      <img
        src="/shopcustomerpc2.png"
        alt="Product"
        width={180}
        height={240}
        className="rounded-md object-cover mb-2"
      />
    </div>
    <div className="w-48 p-2 border rounded">
      <img
        src="/shopcustomerpc3.png"
        alt="Product"
        width={180}
        height={240}
        className="rounded-md object-cover mb-2"
      />
    </div>
    <div className="w-48 p-2 border rounded">
      <img
        src="/shopcustomerpc4.png"
        alt="Product"
        width={180}
        height={240}
        className="rounded-md object-cover mb-2"
      />
    </div>
  </div>
</section>
</div>

        {/* Order Summary */}
        <div className="lg:sticky lg:top-4 lg:h-fit">
          <div className="border p-6 rounded">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Items:</span>
                <span>$59.99</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping & handling:</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Total before tax:</span>
                <span>$59.99</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated tax to be collected:</span>
                <span>$0.00</span>
              </div>
            </div>
            <div className="border-t border-b py-2 mt-4 mb-4">
              <div className="flex justify-between font-medium text-lg">
                <span>Order total:</span>
                <span>$59.99</span>
              </div>
            </div>
            <button className="w-full bg-yellow-400 p-2 rounded hover:bg-yellow-500">
              Place your order
            </button>
          </div>
        </div>
      </div>
      </div>
      {/* Footer */}
      <SiteFooter /> 
    </div>
  );
};


export default ShopCustomer;