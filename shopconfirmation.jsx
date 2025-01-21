import React from "react";
import SiteHeader from './siteheader'; // Import the SiteHeader component
import SiteFooter from './sitefooter'; // Import the SiteFooter component

const Confirmation = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      backgroundColor: "#ffffff",
      fontFamily: "Arial, sans-serif",
    },
    section: {
      width: "65%",
      backgroundColor: "#ECECEC",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    shoppingItem: {
      display: "flex",
      marginBottom: "20px",
    },
    itemDetails: {
      display: "flex",
      alignItems: "center",
    },
    itemImage: {
      width: "80px",
      height: "80px",
      marginRight: "20px",
      border: "1px solid #ddd",
      borderRadius: "4px",
    },
    itemTitle: {
      fontWeight: "bold",
      marginBottom: "5px",
    },
    itemText: {
      color: "#666",
      fontSize: "14px",
    },
    heading: {
      fontSize: "18px",
      marginBottom: "10px",
    },
    orderSummary: {
      width: "30%",
      backgroundColor: "#ECECEC",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    summaryDetails: {
      marginBottom: "20px",
    },
    summaryItem: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px",
      fontSize: "16px",
    },
    total: {
      fontWeight: "bold",
      borderTop: "1px solid #ddd",
      paddingTop: "10px",
    },
    button: {
      display: "block",
      width: "100%",
      padding: "10px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      cursor: "pointer",
      textAlign: "center",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div>
      {/* Add SiteHeader */}
      <SiteHeader />

      {/* Main Confirmation Content */}
      <div style={styles.container}>
        <div style={styles.section}>
          <h1 style={{ fontWeight: 'bold', fontSize: '25px' }}>Confirmation</h1>
          <div style={styles.shoppingItem}>
            <div style={styles.itemDetails}>
              <img
                src="/shoppingcartimg.png"
                alt="Jataka Tales Book"
                style={styles.itemImage}
              />
              <div>
                <p style={styles.itemTitle}>
                  Jataka, Panchatantra, Hitopadesha Collection
                </p>
                <p style={styles.itemText}>₹1,777.00</p>
                <p style={styles.itemText}>Quantity: 1</p>
              </div>
            </div>
          </div>
          <div>
            <h3 style={styles.heading}>Payment Method</h3>
            <p>PayPal</p>
          </div>
          <div>
            <h3 style={styles.heading}>Shipping Company</h3>
            <p>ReeCouriera</p>
          </div>
          <div>
            <h3 style={styles.heading}>Shipping Details</h3>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <span>Name</span>
              <span>Saira Ghasemi</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <span>Address</span>
              <span>10 Beach Street, 2281</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <span>City</span>
              <span>Melbourne, Australia</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <span>Phone</span>
              <span>+621 551 5678</span>
            </div>
          </div>
        </div>

        <div style={styles.orderSummary}>
          <h2>Order Summary</h2>
          <div style={styles.summaryDetails}>
            <div style={styles.summaryItem}>
              <span>Items</span>
              <span>₹1,445.00</span>
            </div>
            <div style={styles.summaryItem}>
              <span>Delivery</span>
              <span>₹200.00</span>
            </div>
            <div style={{ ...styles.summaryItem, ...styles.total }}>
              <span>Total</span>
              <span>₹1,645.00</span>
            </div>
          </div>
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Place Your Order
          </button>
        </div>
      </div>

      {/* Product Carousel Section */}
      <section className="space-y-4">
        <div className="flex space-x-4 pb-4">
          <div className="w-48 md:w-64 p-2 border rounded">
            <img
              src="/shopcustomerpc1.png"
              alt="Product"
              width={256} // Adjusted width for larger screens
              height={320}
              className="rounded-md object-cover mb-2"
            />
          </div>
          <div className="w-48 md:w-64 p-2 border rounded">
            <img
              src="/shopcustomerpc2.png"
              alt="Product"
              width={256}
              height={320}
              className="rounded-md object-cover mb-2"
            />
          </div>
          <div className="w-48 md:w-64 p-2 border rounded">
            <img
              src="/shopcustomerpc3.png"
              alt="Product"
              width={256}
              height={320}
              className="rounded-md object-cover mb-2"
            />
          </div>
          <div className="w-48 md:w-64 p-2 border rounded">
            <img
              src="/shopcustomerpc4.png"
              alt="Product"
              width={256}
              height={320}
              className="rounded-md object-cover mb-2"
            />
          </div>
        </div>
      </section>

      {/* Add SiteFooter */}
      <SiteFooter />
    </div>
  );
};

export default Confirmation;
