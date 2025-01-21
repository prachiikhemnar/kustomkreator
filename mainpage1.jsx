import React, { useState } from "react";
import Sitefooter from "./sitefooter";
import Siteheader from "./siteheader";

const MainPage1 = () => {
  const [currentPage, setCurrentPage] = useState("mainpage1");
  const [cartCount, setCartCount] = useState(0); // State to track cart count

  const products = [
    {
      id: 1,
      imagePath: "/mainpage1pc1.png",
      description: "Jataka Panchatantra Handcrafted Story Collection - Set of 20 Books",
      rating: 4,
      price: "₹699.99",
    },
    {
      id: 2,
      imagePath: "/mainpage1pc2.png",
      description: "STUDIES Artist Oil Pastels - Assorted Colors, Pack of 50",
      rating: 5,
      price: "₹499.99",
    },
    {
      id: 3,
      imagePath: "/mainpage1pc3.png",
      description: "Crossocean Fluke Single Subject Spiral Notebook - Pack of 6",
      rating: 3,
      price: "₹349.99",
    },
    {
      id: 4,
      imagePath: "/mainpage1pc4.png",
      description: "Camlin Scholar Plus Geometry Box - All-in-One Kit",
      rating: 4.5,
      price: "₹249.99",
    },
    {
      id: 5,
      imagePath: "/mainpage1pc5.png",
      description: "Acrylic Paint Set - 20ml Wrapping Multicolor Tubes",
      rating: 4,
      price: "₹699.99",
    },
  ];

  const recentProducts = [
    {
      id: 1,
      imagePath: "/mainpage1pc6.png",
      description: "Isomars A6 Notebook (6.5 x 8.5 inches) - 100 Lined Pages",
      price: "₹249.99",
    },
    {
      id: 2,
      imagePath: "/mainpage1pc7.png",
      description: "Crossocean Fluke Single Subject Spiral Notebook - Pack of 4",
      price: "₹499.99",
    },
    {
      id: 3,
      imagePath: "/mainpage1pc8.png",
      description: "Camlin 18 Shades Artist Water Color Set with Brush, Multicolor",
      price: "₹249.99",
    },
    {
      id: 4,
      imagePath: "/mainpage1pc9.png",
      description: "Pentonic 0.6 mm-1.0 mm Gel Pen (Black) with 6 Pcs Case",
      price: "₹499.99",
    },
    {
      id: 5,
      imagePath: "/mainpage1pc10.png",
      description: "Apsara Sketching Kit – 8pcs Professional Sketch & Drawing Tool Kit",
      price: "₹249.99",
    },
  ];

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

    return (
      <>
        {"★".repeat(filledStars)}
        {halfStar ? "☆" : ""}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  const addToCart = () => {
    setCartCount(cartCount + 1); // Increment cart count on button click
  };

  const renderProductCard = (product) => (
    <div
      key={product.id}
      style={{
        border: "1px solid #ccc",
        borderRadius: "2px",
        textAlign: "center",
        padding: "10px",
        fontSize: "12px",
      }}
    >
      <img
        src={product.imagePath}
        alt={product.description}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />
      <p style={{ fontSize: "12px", margin: "10px 0" }}>{product.description}</p>
      {product.rating && (
        <div style={{ color: "#FFD700", marginBottom: "5px" }}>{renderStars(product.rating)}</div>
      )}
      <p style={{ fontWeight: "bold", margin: "5px 0" }}>{product.price}</p>
      <button
        style={{
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "3px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
        onClick={addToCart} // Attach the click handler
      >
        Add to Cart
      </button>
    </div>
  );

  const renderMainPage1 = () => (
    <>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          margin: 0,
          padding: "0 6px",
          maxWidth: "1800px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/Top.png"
            alt="Banner"
            style={{
              width: "100%",
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Flash Sales Section */}
        <div style={{ padding: "20px 0" }}>
          <h2 style={{ fontSize: "20px", margin: "0 0 20px 0" }}>Flash Sales</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            {products.map(renderProductCard)}
          </div>
        </div>

        {/* Recent Product Section */}
        <div style={{ padding: "20px 0" }}>
          <h2 style={{ fontSize: "20px", margin: "0 0 20px 0" }}>Recent Products</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            {recentProducts.map(renderProductCard)}
          </div>
        </div>
      </div>
    </>
  );

  const renderMainPage2 = () => renderMainPage1(); // Assuming Page 2 is the same as Page 1

  return (
    <>
      <Siteheader cartCount={cartCount} setCurrentPage={setCurrentPage} />
      {currentPage === "mainpage1" ? renderMainPage1() : renderMainPage2()}
      <Sitefooter />
    </>
  );
};

export default MainPage1;
