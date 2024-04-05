// HeaderMenu.tsx
import React from 'react';

interface HeaderProps {
  username: string;
}

const HeaderMenu: React.FC<HeaderProps> = ({ username }) => {
    const headerStyle: React.CSSProperties = {
        position: 'fixed', // Fixed position at the top
        top: 0, // Align to the top
        left: 0, // Align to the left
        right: 0, // Stretch across the right
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '10px 20px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white
        backdropFilter: 'blur(10px)', // Blur effect
        color: 'black', // Adjust text color for readability
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        zIndex: 1000, // Ensure the header is above other content
        fontFamily: 'Montserrat, sans-serif',
      };

  const logoStyle: React.CSSProperties = {
    cursor: 'pointer',
    transition: 'opacity 0.3s ease',
  };

  const userSectionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  const userIconStyle: React.CSSProperties = {
    borderRadius: '50%',
    marginRight: '10px',
    background: '#fff',
    color: '#6a11cb',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '32px',
    height: '32px',
  };

  return (
    <header style={headerStyle}>
      <div style={userSectionStyle}>
        <div style={userIconStyle}>
          <span>👤</span>
        </div>
        {username}
      </div>
      <div style={logoStyle}>
        <img src="/images/LOGO1.png" alt="Logo" style={{ height: '40px' }} />
      </div>
    </header>
  );
};

export default HeaderMenu;
