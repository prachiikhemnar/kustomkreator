import React from 'react';
import SiteHeader from './siteheader'; // Adjust the import path as needed
import SiteFooter from './sitefooter';

const ShopHelpCenter = () => {
  const styles = {
    helpCenterContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    helpCenterContent: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end', // Align to the right
      alignItems: 'flex-start', // Optional: Aligns content to the top
      padding: '20px',
    },
    helpWidget: {
      width: '350px', // Adjusted width to make the widget smaller
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    widgetHeader: {
      marginBottom: '15px',
    },
    widgetHeaderH2: {
      margin: '0',
      fontSize: '24px',
    },
    widgetHeaderP: {
      margin: '5px 0 15px',
      color: '#666',
    },
    recentMessage: {
      marginBottom: '15px',
    },
    recentMessageStrong: {
      display: 'block',
      marginBottom: '5px',
    },
    actions: {
      marginBottom: '15px',
    },
    sendMessageBtn: {
      display: 'block',
      width: '100%',
      padding: '10px',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    sendMessageBtnHover: {
      backgroundColor: '#0056b3',
    },
    searchSection: {
      marginBottom: '15px',
    },
    searchInput: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
    },
    helpLinks: {
      listStyle: 'none',
      padding: '0',
    },
    helpLinksLi: {
      margin: '5px 0',
      color: '#007bff',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.helpCenterContainer}>
      <SiteHeader />
      
      <main style={styles.helpCenterContent}>
        <div style={styles.helpWidget}>
          <div style={styles.widgetHeader}>
            <h2 style={styles.widgetHeaderH2}>Hi there 👋</h2>
            <p style={styles.widgetHeaderP}>How can we help?</p>
          </div>
          
          <div style={styles.recentMessage}>
            <strong style={styles.recentMessageStrong}>Recent message</strong>
            <p>
              <span>Hi! I'm Botris Assistant. How can I help...</span>
              <span className="timestamp">5m ago</span>
            </p>
          </div>
          
          <div style={styles.actions}>
            <button
              className="send-message-btn"
              style={styles.sendMessageBtn}
              onMouseOver={(e) => (e.target.style.backgroundColor = styles.sendMessageBtnHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
            >
              Send us a message
            </button>
            <p>We typically reply in a few minutes</p>
          </div>
          
          <div style={styles.searchSection}>
            <input type="text" placeholder="Search for help" style={styles.searchInput} />
            <ul style={styles.helpLinks}>
              <li style={styles.helpLinksLi}>Pricing</li>
              <li style={styles.helpLinksLi}>Send a custom user attribute to Intercom</li>
              <li style={styles.helpLinksLi}>News explained</li>
              <li style={styles.helpLinksLi}>Forward your email to your inbox</li>
            </ul>
          </div>
        </div>
      </main>
      
      <SiteFooter />
    </div>
  );
};

export default ShopHelpCenter;
