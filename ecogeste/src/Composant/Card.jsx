import React from 'react';

export const Card = ({ children }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      backgroundColor: '#f9f9f9'
    }}>
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};
