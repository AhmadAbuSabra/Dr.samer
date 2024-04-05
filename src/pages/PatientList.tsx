import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Select, { ValueType, StylesConfig } from 'react-select';

type Patient = {
  PATIENT_ID: string;
  NAME: string;
  PHONE_NUMBER: string;
};

type OptionType = {
  value: string;
  label: string;
};

const PatientList: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedOption, setSelectedOption] = useState<ValueType<OptionType, false>>(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch(`/api/getPatientsList`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json() as Patient[];
      setPatients(data);
    } catch (error) {
      console.error("Failed to fetch patients:", error);
    }
  };

  const handleSearchChange = (option: ValueType<OptionType, false>) => {
    setSelectedOption(option);
  };

  const options = patients.map(patient => ({
    value: patient.PATIENT_ID,
    label: `${patient.NAME} - ${patient.PATIENT_ID}`
  }));

  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided) => ({
      ...provided,
      width: 300,
      borderRadius: '4px',
      borderColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      padding: '0.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    }),
    // You can add custom styles to other parts of the select component as needed
  };

  // Inline styles for other components
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as 'column', 
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    position: 'relative' as 'relative', 
    backgroundImage: "url('/images/clinic.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      zIndex: 1,
    },
  };

  const titleStyle = {
    color: '#00A6ED', // A brighter blue for visibility
    fontSize: '3rem',
    fontWeight: '900', // Heavier weight
    textShadow: '3px 3px 8px rgba(0, 0, 0, 0.6)',
  };

  const patientListStyle = {
    listStyle: 'none',
    margin: '20px auto',
    width: '80%',
    maxWidth: '600px',
    backgroundColor: '#E3F2FD', // A calm light blue
    padding: '1.5rem', // Slightly larger padding
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // More pronounced shadow

  };

  const patientListItemStyle = {
    background: '#fff',
    padding: '20px',
    borderRadius: '5px',
    margin: '10px auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    boxSizing: 'border-box' as 'border-box',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#f7f7f7',
    }
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#0056b3',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center' as 'center',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Patient Search</h2>
      <Select
        options={options}
        onChange={handleSearchChange}
        value={selectedOption as OptionType}
        placeholder="Search by name or phone"
        styles={customStyles}
      />
      {selectedOption && (
        <ul style={patientListStyle}>
          <li key={(selectedOption as OptionType).value} style={patientListItemStyle}>
            <Link href={`/PatientForm/${(selectedOption as OptionType).value}`}>
              <a style={linkStyle}>{(selectedOption as OptionType).label}</a>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default PatientList;
