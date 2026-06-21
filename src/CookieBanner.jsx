import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Έλεγχος αν ο χρήστης έχει ήδη δώσει συγκατάθεση
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={styles.bannerContainer}>
      <div style={styles.content}>
        <p style={styles.text}>
          Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας και να αναλύουμε την επισκεψιμότητα (Google Analytics). 
          Με τη χρήση της σελίδας, αποδέχεστε την πολιτική μας.
        </p>
        <button style={styles.button} onClick={handleAccept}>
          Αποδοχή
        </button>
      </div>
    </div>
  );
};

// Premium minimal style (Μαύρο / Κόκκινο / Λευκό)
const styles = {
  bannerContainer: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#111111', // Σκούρο premium background
    border: '1px solid #ff0033', // Κόκκινο διακριτικό border
    borderRadius: '8px',
    padding: '15px 25px',
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    width: '90%',
    maxWidth: '600px',
    animation: 'fadeIn 0.5s ease-in-out',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  text: {
    color: '#ffffff',
    fontSize: '14px',
    margin: 0,
    fontFamily: 'sans-serif',
    lineHeight: '1.4',
    flex: '1',
  },
  button: {
    backgroundColor: '#ff0033', // Έντονο κόκκινο call-to-action
    color: '#ffffff',
    border: 'none',
    padding: '8px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
    transition: 'background-color 0.2s',
  },
};

export default CookieBanner;
