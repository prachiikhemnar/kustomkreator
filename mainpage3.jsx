import React from "react";
import SiteFooter from "./sitefooter";
import SiteHeader from "./siteheader";

const MainPage3 = () => {
  return (
    <div>
      <SiteHeader />

      {/* Search Results Section */}
      <div
        style={{
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Main Content Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px",
            gap: "20px",
          }}
        >
          {/* Left Side: Image */}
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <img
              src="/mainpage3img.png"
              alt="No results"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
              }}
            />
          </div>

          {/* Right Side: No Results Content */}
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              textAlign: "left",
            }}
          >
            <h2
              style={{
                fontSize: "18px",
                color: "#262626",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              No results were found for searching "Wooden Microscope".
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#555555",
                lineHeight: "1.6",
              }}
            >
              <span
                style={{
                  color: "#FF6A00",
                  marginRight: "10px",
                  fontSize: "20px",
                }}
              >
                &#33;
              </span>
              We recommend you to search different clear keywords to get the best result.
              <br />
              <span
                style={{
                  color: "#FF6A00",
                  marginRight: "10px",
                  fontSize: "20px",
                }}
              >
                &#33;
              </span>
              You can see the most related/purchased products below.
            </p>
          </div>
        </div>

        {/* Product Recommendations Section */}
        <div>
          <h3
            style={{
              color: "#465D6B",
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "11px",
            }}
          >
            Recommended Products
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {[{ name: "Electron Microscope", price: "\u20b96,999", src: "/mainpage3pc1.png" },
              { name: "Advanced Metal Microscope", price: "\u20b96,999", src: "/mainpage3pc2.png" },
              { name: "HD Zoom Microscope", price: "\u20b96,999", src: "/mainpage3pc3.png" },
              { name: "RESCO Microscope", price: "\u20b96,999", src: "/mainpage3pc4.png" },
              { name: "Elite Microscope", price: "\u20b96,999", src: "/mainpage3pc5.png" }]
              .map((product, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: "center",
                    backgroundColor: "#FFF",
                    padding: "10px",
                    borderRadius: "6px",
                  }}
                >
                  <img
                    src={product.src}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "auto",
                      marginBottom: "5px",
                    }}
                  />
                  <p style={{ fontWeight: "bold", color: "#333", fontSize: "12px" }}>
                    {product.name}
                  </p>
                  <p style={{ color: "#465D6B", fontWeight: "bold", fontSize: "14px" }}>
                    {product.price}
                  </p>
                  <button
                    style={{
                      backgroundColor: "#465D6B",
                      color: "#FFF",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "12px",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Marvel Comics Section */}
      <div
        style={{
          backgroundColor: "#F7DDD0",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "bolder",
            color: "#465D6B",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Marvel Studio Comics
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Description Text */}
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "14px", color: "#333", marginBottom: "10px" }}>
              Marvel Comics is a New York City-based comic book publisher, a property of
              The Walt Disney Company since December 31, 2009.
            </p>
            <button
              style={{
                backgroundColor: "#F7DDD0",
                color: "#465D6B",
                border: "1px solid #465D6B",
                padding: "10px 20px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Explore More
            </button>
          </div>
          {/* Comic Cover Image */}
          <div>
            <img
              src="/mainpage1marvelcomics.png"
              alt="Marvel Comics"
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
};

export default MainPage3;
