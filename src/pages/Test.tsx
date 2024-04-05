// components/TableComponent.tsx
import React, { useState } from 'react';

type Style = React.CSSProperties;

const styles: Record<string, Style> = {
  tableContainer: {
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    overflowX: 'auto',
    margin: '24px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: '0',
  },
  th: {
    backgroundColor: '#007bff', // Blue color for header
    color: 'white',
    fontWeight: '600',
    padding: '15px 20px',
    borderBottom: '2px solid #ddd',
    textAlign: 'left',
  },
  td: {
    padding: '12px 20px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
    fontSize: '14px',
    color: '#333',
    transition: 'background-color 0.3s',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px 10px 0 0',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    marginBottom: '-10px',
  },
  searchInput: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    marginRight: '10px',
    width: '300px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  actionButton: {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: '5px 10px',
    transition: 'color 0.3s',
  },
};

const Test: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  // Simulated data for the table
  const rows = [
    { id: 1, name: 'Dakota Rice', salary: '$36,738', country: 'Niger', city: 'Oud-Turnhout' },
    { id: 2, name: 'Minerva Hooper', salary: '$23,789', country: 'Curaçao', city: 'Sinaai-Waas' },
    { id: 3, name: 'Sage Rodriguez', salary: '$56,142', country: 'Netherlands', city: 'Baileux' },
    // ... more rows as needed
  ];

  // Filter rows based on the search term
  const filteredRows = searchTerm
    ? rows.filter(
        row =>
          row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.salary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.city.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : rows;

  return (
    <div>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search..."
          style={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>NAME</th>
              <th style={styles.th}>SALARY</th>
              <th style={styles.th}>COUNTRY</th>
              <th style={styles.th}>CITY</th>
              <th style={styles.th}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, index) => (
              <tr
                key={row.id}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
                style={hoveredRow === index ? { backgroundColor: '#f5f5f5' } : {}}
              >
                <td style={styles.td}>{row.id}</td>
                <td style={styles.td}>{row.name}</td>
                <td style={styles.td}>{row.salary}</td>
                <td style={styles.td}>{row.country}</td>
                <td style={styles.td}>{row.city}</td>
                <td style={styles.td}>
                  <button style={styles.actionButton}>❤️</button>
                  <button style={styles.actionButton}>✏️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Test;
