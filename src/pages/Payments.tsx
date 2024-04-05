// pages/payments.tsx

import React from 'react';
import Head from 'next/head';

const Payments: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Head>
        <title>Payments</title>
      </Head>

      <header style={{ backgroundColor: '#f5f5f5', padding: '20px', textAlign: 'center' }}>
        {/* Replace with your logo or header content */}
        <h1>Payments</h1>
      </header>

      <main style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
        <div style={{ flex: 1 }}>
          {/* Add actual content here */}
          <div style={{ marginBottom: '20px', backgroundColor: '#ddd', padding: '10px' }}>Section 1</div>
          <div style={{ marginBottom: '20px', backgroundColor: '#ddd', padding: '10px' }}>Section 2</div>
          <div style={{ marginBottom: '20px', backgroundColor: '#ddd', padding: '10px' }}>Section 3</div>
        </div>

        <div style={{ flex: 1 }}>
          {/* Add actual content here */}
          <div style={{ marginBottom: '20px', backgroundColor: '#ddd', padding: '10px' }}>Section 4</div>
          <div style={{ marginBottom: '20px', backgroundColor: '#ddd', padding: '10px' }}>Section 5</div>
          <div style={{ marginBottom: '20px', backgroundColor: '#ddd', padding: '10px' }}>Section 6</div>
        </div>
      </main>
    </div>
  );
};

export default Payments;
