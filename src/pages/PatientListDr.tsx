import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Select, { ValueType, StylesConfig } from 'react-select';
import { useRouter } from 'next/router';

type Patient = {
  PATIENT_ID: string;
  NAME: string;
  PHONE_NUMBER: string;
};

type OptionType = {
  value: string;
  label: string;
};

type Appointment = {
  APPOINTMENT_ID: string;
  FK_DOCTORID: string;
  FK_PATIENTID: string;
  APPOINTMENT_TIME: string;
  STATUS_ENUM: string;
  CALL_LINK: string;
  DESC: string;
};

const PatientListDr: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedOption, setSelectedOption] = useState<ValueType<OptionType, false>>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    const response = await fetch(`/api/getPatientsList`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json() as Patient[];
    setPatients(data);
  };

  const fetchAppointments = async (patientId: string) => {
    const response = await fetch(`/api/getAppointmentsByPatId?patientId=${patientId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json() as Appointment[];
    setAppointments(data);
  };

  const handleSearchChange = (option: ValueType<OptionType, false>) => {
    setSelectedOption(option);
    if (option) {
      fetchAppointments(option.value);
    } else {
      setAppointments([]);
    }
  };

  const navigateToDetails = (appointmentId: string, patientId: string) => {
    router.push(`/ConsultationForm?patientId=${patientId}&appointmentId=${appointmentId}`);
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
  };

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
    color: '#00A6ED',
    fontSize: '3rem',
    fontWeight: '900',
    textShadow: '3px 3px 8px rgba(0, 0, 0, 0.6)',
  };

  const patientListStyle = {
    listStyle: 'none',
    margin: '20px auto',
    width: '80%',
    maxWidth: '600px',
    backgroundColor: '#E3F2FD',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
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

  const formatDate = (isoString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: true
    };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(isoString));
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
      {appointments.length > 0 && (
        <ul style={patientListStyle}>
          {appointments.map(appointment => (
            <li 
              key={appointment.APPOINTMENT_ID} 
              style={patientListItemStyle} 
              onClick={() => navigateToDetails(appointment.APPOINTMENT_ID, appointment.FK_PATIENTID)}
            >
              <a style={linkStyle}>
              {formatDate(appointment.APPOINTMENT_TIME)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PatientListDr;
