import Link from 'next/link';
import React from 'react';
import HeaderMenu from './HeaderMenu';

const MenuScreen: React.FC = () => {
  // Define the base styles for the container and menu grid
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: '#e8e8e8', // A neutral background color
    padding: '20px',
    boxSizing: 'border-box',
    backgroundImage:'url("/images/clinic.jpg")',
    backgroundRepeat: 'no-repeat', // Prevent repetition
    backgroundSize: 'cover', // Cover the entire element
    backgroundPosition: 'center', // Center the image
    
  };

  const menuStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    maxWidth: '1000px',
    width: '100%',
    margin: 'auto',
  };

  // Style for individual menu items
  const menuItemStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    transition: '0.3s ease',
    position: 'relative',
    height: '200px',
    // Gradient background
    background: 'linear-gradient(135deg, #f6f7f9 0%, #e5ebee 100%)',
    cursor: 'pointer', // Change cursor to indicate interactivity
  };

  // Title style with decorative font
  const titleStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'center',
    padding: '10px 0',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    background: 'rgba(0, 0, 0, 0.6)', // Overlay for better readability
    color: 'white',
  };

  // Define the pages with their respective icons
  const pages = [
    { path: '/AllRequest', title: 'All Requests', icon: '👥', background: '#b3cde0' },
    { path: '/PatientList', title: 'Patient Form', icon: '📝', background: '#6497b1' },
    { path: '/MyRequest', title: 'Current Requests', icon: '🔔', background: '#005b96' },
    { path: '/page4', title: 'Reports', icon: '📊', background: '#03396c' },
    { path: '/SaveBlogPost', title: 'Add Blogs', icon: '✍️', background: '#f28b82' }, 
    { path: '/PatientPayment', title: 'Patient Payment', icon: '💳', background: '#4CAF50' },
  ];
  

  return (
    <div style={containerStyle}>
        <HeaderMenu username="User Name" /> {/* Replace 'User Name' as needed */}
      <div style={menuStyle}>
        {pages.map((page, index) => (
          <Link href={page.path} key={index}>
            <a
              style={{
                ...menuItemStyle,
                // Use the background color for gradient
                background: `linear-gradient(135deg, ${page.background} 0%, ${adjustBrightness(page.background, -20)} 100%)`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={titleStyle}>
                <span style={{ fontSize: '2rem' }}>{page.icon}</span> {/* Icon */}
                <div>{page.title}</div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Helper function to adjust the brightness of a color
function adjustBrightness(color: string, percent: number): string {
  let num = parseInt(color.slice(1), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      B = (num >> 8 & 0x00FF) + amt,
      G = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R<255 ? R<1 ? 0 : R : 255)*0x10000 + (B<255 ? B<1 ? 0 : B : 255)*0x100 + (G<255 ? G<1 ? 0 : G : 255)).toString(16).slice(1);
}

export default MenuScreen;
