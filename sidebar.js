import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    discount: true,
    category: true,
    languages: true,
    foreignLanguages: true,
    newArrivals: true,
    authors: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const styles = {
    sidebar: {
      flex: "1",
      padding: "7px",
      borderRight: "1px solid #ccc",
      backgroundColor: "#fff",
      fontFamily: "Arial, sans-serif",
      fontSize: "14px",
      color: "#333",
    },
    section: {
      marginBottom: "10px",
    },
    sectionTitle: {
      fontWeight: "bold",
      fontSize: "14px",
      color: "#555",
      marginBottom: "7px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
    },
    separator: {
      borderTop: "1px solid #ccc",
      margin: "8px 0",
    },
    checkboxGroup: {
      marginBottom: "8px",
    },
    checkbox: {
      marginBottom: "5px",
      display: "flex",
      alignItems: "center",
    },
    checkboxInput: {
      marginRight: "9px",
    },
  };

  return (
    <aside style={styles.sidebar}>
      {/* All Categories */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>
          <MdFilterList style={styles.icon} /> All Categories
        </h3>
        <div style={styles.separator}></div>
      </div>

      {/* Brand */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Brand</h3>
        <input
          type="text"
          placeholder="Search"
          style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
        <div style={styles.separator}></div>
      </div>

      {/* Price */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Price</h3>
        <div>
          <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
            <label>Min:</label>
            <input type="number" placeholder="60" style={{ width: "60px", padding: "5px", textAlign: "center" }} />
            <label>Max:</label>
            <input type="number" placeholder="450" style={{ width: "60px", padding: "5px", textAlign: "center" }} />
          </div>
          <input type="range" min="60" max="450" step="10" style={{ width: "100%", marginBottom: "8px" }} />
        </div>
      </div>

      {/* Discount */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle} onClick={() => toggleSection("discount")}>
          Discount
        </h3>
        {openSections.discount && (
          <div style={styles.checkboxGroup}>
            {["10% Off or more", "25% Off or more", "35% Off or more", "50% Off or more"].map((discount, index) => (
              <div style={styles.checkbox} key={index}>
                <input type="checkbox" style={styles.checkboxInput} />
                <label>{discount}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Category */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle} onClick={() => toggleSection("category")}>
          Category
        </h3>
        {openSections.category && (
          <div style={styles.checkboxGroup}>
            {[
              "Comics & Graphic Novels",
              "Literature & Fiction",
              "Children's & Young Adult",
              "Action & Adventure",
            ].map((category, index) => (
              <div style={styles.checkbox} key={index}>
                <input type="checkbox" style={styles.checkboxInput} />
                <label>{category}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Languages */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle} onClick={() => toggleSection("languages")}>
          English & Indian Languages
        </h3>
        {openSections.languages && (
          <div style={styles.checkboxGroup}>
            {["English", "Hindi", "Marathi", "Tamil", "Telugu"].map((language, index) => (
              <div style={styles.checkbox} key={index}>
                <input type="checkbox" style={styles.checkboxInput} />
                <label>{language}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Foreign Languages */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle} onClick={() => toggleSection("foreignLanguages")}>
          Foreign Languages
        </h3>
        {openSections.foreignLanguages && (
          <div style={styles.checkboxGroup}>
            {["Arabic", "Catalan", "Chinese", "Dutch", "Danish"].map((language, index) => (
              <div style={styles.checkbox} key={index}>
                <input type="checkbox" style={styles.checkboxInput} />
                <label>{language}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* New Arrivals */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle} onClick={() => toggleSection("newArrivals")}>
          New Arrivals
        </h3>
        {openSections.newArrivals && (
          <div style={styles.checkboxGroup}>
            {["Last 30 days", "Last 60 days", "Last 90 days"].map((arrival, index) => (
              <div style={styles.checkbox} key={index}>
                <input type="checkbox" style={styles.checkboxInput} />
                <label>{arrival}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Authors */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle} onClick={() => toggleSection("authors")}>
          Authors
        </h3>
        {openSections.authors && (
          <div style={styles.checkboxGroup}>
            {["Donny Cates", "Jed MacKay", "Pran", "Cartoonist Pran", "Anant Pai"].map((author, index) => (
              <div style={styles.checkbox} key={index}>
                <input type="checkbox" style={styles.checkboxInput} />
                <label>{author}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Customer Review */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Customer Review</h3>
        <div style={styles.checkboxGroup}>
          <div style={styles.checkbox}>
            <input type="checkbox" style={styles.checkboxInput} />
            <label>
              <FaStar style={{ color: "#f4c542" }} /> 4.5 & up
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
