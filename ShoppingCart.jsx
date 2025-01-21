import React, { useState } from 'react';
import './ShoppingCart.css';
import SiteHeader from './siteheader'; // Ensure correct file path
import SiteFooter from './sitefooter'; // Ensure correct file path

const ShoppingCart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title:
        "Jataka, Panchatantra, Hitopadesha Collection: 24 Book Set | Indian History, Folktales & Humor | Cultural Stories for Kids & Adults | Illustrated Children's Comic Books | Amar",
      author: "Anant Pai",
      price: 1777,
      quantity: 3,
      image: "/shoppingcartimg.png",
    },
    {
      id: 2,
      title:
        "Jataka, Panchatantra, Hitopadesha Collection: 24 Book Set | Indian History, Folktales & Humor | Cultural Stories for Kids & Adults | Illustrated Children's Comic Books | Amar",
      author: "Anant Pai",
      price: 1777,
      quantity: 2,
      image: "/shoppingcartimg.png",
    },
    {
      id: 3,
      title:
        "Jataka, Panchatantra, Hitopadesha Collection: 24 Book Set | Indian History, Folktales & Humor | Cultural Stories for Kids & Adults | Illustrated Children's Comic Books | Amar",
      author: "Anant Pai",
      price: 1777,
      quantity: 2,
      image: "/shoppingcartimg.png",
    },
    {
      id: 4,
      title:
        "Jataka, Panchatantra, Hitopadesha Collection: 24 Book Set | Indian History, Folktales & Humor | Cultural Stories for Kids & Adults | Illustrated Children's Comic Books | Amar",
      author: "Anant Pai",
      price: 1777,
      quantity: 2,
      image: "/shoppingcartimg.png",
    },
  ]);

  // Function to update the quantity of an item
  const updateQuantity = (id, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <SiteHeader /> {/* Keeping the Header component */}
      <div className="shopping-cart">

        <div className="cart-content">
          {/* Left Section: Items */}
          <div className="cart-items-section">
            <div className="select-all">
            <h1 style={{ fontWeight: 'bold', fontSize: '32px' }}>Shopping Cart</h1>
              <label>
                <input type="checkbox" />
                Deselect all items
              </label>
            </div>
            <hr className="dark-hr" />

            {items.map((item, index) => (
              <div key={item.id}>
                <div className="cart-item">
                  <div className="item-header">
                    <input type="checkbox" className="item-checkbox" />
                    <img src={item.image} alt={item.title} className="item-image" />
                    <div className="item-details">
                      <h3>{item.title}</h3>
                      <p>by {item.author}</p>
                      <p>Paperback</p>
                      <p style={{ color: "green" }}>In stock</p>
                      <div className="quantity-control">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="quantity-btn"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="quantity-btn"
                        >
                          +
                        </button>
                        <button className="item-button delete-btn">Delete</button>
                      <button className="item-button see-more-btn">See more like this</button>
                     <button className="item-button share-btn">Share</button>
                      </div>
                    </div>
                    <p className="item-price">₹{item.price.toLocaleString()}</p>
                  </div>
                </div>

                {/* Horizontal line between items */}
                {index < items.length - 1 && <hr className="dark-hr" />}
              </div>
            ))}
          </div>

          {/* Right Section: Subtotal */}
          <div className="subtotal-section">
            <div className="subtotal-box">
              <h2>Subtotal ({items.length} items):</h2>
              <p className="subtotal-price">₹{subtotal.toLocaleString()}</p>
              <button className="add-to-cart-btn">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter /> {/* Keeping the Footer component */}
    </div>
  );
};

export default ShoppingCart;
