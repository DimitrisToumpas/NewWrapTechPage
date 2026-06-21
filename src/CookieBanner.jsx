import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    } else if (consent === 'all') {
      // Αν είχε πατήσει παλιότερα αποδοχή όλων, ενεργοποιούμε το analytics
      enableAnalytics();
    }
  }, []);

  // Συνάρτηση που ενημερώνει τη Google ότι πήραμε έγκριση
  const enableAnalytics = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    enableAnalytics();
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential');
    // Δεν κάνουμε τίποτα για το gtag, παραμένει 'denied' όπως ορίστηκε στο index.html
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={styles.bannerContainer}>
      <div style={styles.content}>
        <p style={styles.text}>
          Χρησιμοποιούμε cookies για την εξατομίκευση της εμπειρίας σας και την ανάλυση της επισκεψιμότητάς μας. 
          Επιλέξτε αν αποδέχεστε όλα τα cookies ή μόνο τα απαραίτητα για τη λειτουργία της σελίδας.
        </p>
        <div style={styles.buttonContainer}>
          <button style={styles.essentialButton} onClick={handleAcceptEssential}>
            Μόνο Απαραίτητα
          </button>
          <button style={styles.acceptButton} onClick={handleAcceptAll}>
            Αποδοχή Όλων
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  bannerContainer: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#111111',
    border: '1px solid #ff0033',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
    width: '90%',
    maxWidth: '700px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  text: {
    color: '#ffffff',
    fontSize: '14px',
    margin: 0,
    fontFamily: 'sans-serif',
    lineHeight: '1.5',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    flexWrap: 'wrap',
  },
  essentialButton: {
    backgroundColor: 'transparent',
    color: '#cccccc',
    border: '1px solid #555555',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '500',
    fontSize: '13px',
    transition: 'all 0.2s',
  },
  acceptButton: {
    backgroundColor: '#ff0033',
    color: '#ffffff',
    border: 'none',
    padding: '8px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '13px',
    transition: 'background-color 0.2s',
  },
};

export default CookieBanner;
