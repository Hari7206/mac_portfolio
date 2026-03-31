import React, { useState, useEffect } from 'react';

function DateTime() {
  const [timeNow, setTimeNow] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formatted = `${now.toLocaleString('en-US', { weekday: 'short' })} 
${now.toLocaleString('en-US', { month: 'short' })} 
${now.getDate()} 
${now.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;

      setTimeNow(formatted);
    };

    updateTime(); 
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); 
  }, []);

  return <div>{timeNow}</div>;
}

export default DateTime;