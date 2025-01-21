import React from "react";
import SiteHeader from "./siteheader"; // Importing the Header component
import SiteFooter from "./sitefooter"; // Importing the Footer component
import SideBar from "./sidebar";

const MainPage4 = () => {
  const inlineStyles = {
    container: {
      padding: "30px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    layout: {
      display: "flex",
      gap: "10px",
    },
    sidebar: {
      flex: "0.2", // Sidebar takes 20% width on desktop
      padding: "6px",
      borderRight: "1px solid #ccc",
      backgroundColor: "#FFFFFF",
    },
    productList: {
      flex: "3.3", // Main content area takes up the remaining width
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)", // 4 columns for desktop
      gap: "10px",
    },
    productCard: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "10px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "300px",
    },
    productImage: {
      maxWidth: "100%",
      height: "100%",
      objectFit: "contain",
      borderRadius: "4px",
    },
  };

  // CSS for Media Queries
  const responsiveStyles = `
    /* Tablet View */
    @media (max-width: 1200px) {
      .layout {
        flex-wrap: wrap; /* Wrap content */
      }
      .sidebar {
        flex: 1; /* Sidebar spans full width */
        border-right: none; /* Remove border-right */
        border-bottom: 1px solid #ccc; /* Add border-bottom */
        margin-bottom: 20px; /* Add spacing below */
      }
      .product-list {
        flex: 1; /* Full width */
        grid-template-columns: repeat(3, 1fr); /* 3 columns for tablets */
      }
    }

    /* Mobile View */
    @media (max-width: 768px) {
      .layout {
        flex-direction: column; /* Stack sidebar and main content vertically */
      }
      .product-list {
        grid-template-columns: repeat(2, 1fr); /* 2 columns for mobile */
        gap: 10px; /* Add spacing */
      }
    }

    /* Small Mobile View */
    @media (max-width: 480px) {
      .product-list {
        grid-template-columns: repeat(1, 1fr); /* 1 column for small screens */
      }
      .product-card {
        height: 200px; /* Smaller height for product cards */
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyles}</style>
      <SiteHeader /> {/* Render the Header */}

      <div style={inlineStyles.container}>
        <div className="layout" style={inlineStyles.layout}>
          {/* Sidebar Section */}
          <div className="sidebar" style={inlineStyles.sidebar}>
            <SideBar />
          </div>

          {/* Product List Section */}
          <section
            className="product-list"
            style={inlineStyles.productList}
          >
            {[...Array(12).keys()].map((i) => (
              <div className="product-card" key={i} style={inlineStyles.productCard}>
                <img
                  src={`/mainpage4pc${(i % 4) + 1}.png`}
                  alt={`Product ${i + 1}`}
                  style={inlineStyles.productImage}
                />
              </div>
            ))}
          </section>
        </div>
      </div>

      <SiteFooter /> {/* Render the Footer */}
    </>
  );
};

export default MainPage4;
