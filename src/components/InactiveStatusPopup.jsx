import React, { useState, useEffect } from 'react';

const InactiveStatusPopup = () => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    let inactivityTimeout;

    const resetTimer = () => {
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(() => setInactive(true), 50000); // 20 seconds
    };

    const clearTimer = () => {
      clearTimeout(inactivityTimeout);
    };

    const handleActivity = () => {
      setInactive(false);
      resetTimer();
    };

    // Initial setup
    resetTimer();

    // Event listeners
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      clearTimer();
    };
  }, []);

  return (
    <>
      {inactive && (
        <div className="popup">
          <p>You have been inactive for 20 seconds.</p>
        </div>
      )}
    </>
  );
};

export default InactiveStatusPopup;
