// components/PatientTable.tsx

import React, { useState, useEffect, ChangeEvent } from 'react';


type Patient = {
    PATIENT_ID: string;
    DATEOFBIRTH: string;
    GENDER: string;
    ADDRESS: string;
    PHONE_NUMBER: string;
    MEDICAL_HISTORY: string;
    ALLERGIES: string;
    BLOOD_TYPE: string;
    FK_USERID: string;
    patient_description: string;
    Pathogen_description: string;
    NAME: string;
    Age: number;
    PAIN_RATE: number;
    EMAIL: string;
  };
  

const PatientTableDr: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filters, setFilters] = useState({
    NAME: '',
    GENDER: '',
    ADDRESS: '',
    PHONE_NUMBER: '',
    MEDICAL_HISTORY: '',
    ALLERGIES: '',
    BLOOD_TYPE: '',
    EMAIL: '',
    // Add more filter states as needed
  });

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await fetch('/api/getPatients');
      const data = await response.json();
      setPatients(data);
    };

    fetchPatients();
  }, []);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredPatients = patients.filter(patient =>
    Object.entries(filters).every(([key, value]) =>
      patient[key as keyof Patient]?.toString().toLowerCase().includes(value.toLowerCase())
    )
  );

  return (
    <div>
      <div>
        <input type="text" name="NAME" value={filters.NAME} onChange={handleFilterChange} placeholder="Filter by Name" />
        <input type="text" name="GENDER" value={filters.GENDER} onChange={handleFilterChange} placeholder="Filter by Gender" />
        <input type="text" name="ADDRESS" value={filters.ADDRESS} onChange={handleFilterChange} placeholder="Filter by Address" />
        <input type="text" name="PHONE_NUMBER" value={filters.PHONE_NUMBER} onChange={handleFilterChange} placeholder="Filter by Phone Number" />
        <input type="text" name="MEDICAL_HISTORY" value={filters.MEDICAL_HISTORY} onChange={handleFilterChange} placeholder="Filter by Medical History" />
        <input type="text" name="ALLERGIES" value={filters.ALLERGIES} onChange={handleFilterChange} placeholder="Filter by Allergies" />
        <input type="text" name="BLOOD_TYPE" value={filters.BLOOD_TYPE} onChange={handleFilterChange} placeholder="Filter by Blood Type" />
        <input type="text" name="EMAIL" value={filters.EMAIL} onChange={handleFilterChange} placeholder="Filter by Email" />
        {/* Add more filter inputs as needed */}
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Medical History</th>
            <th>Allergies</th>
            <th>Blood Type</th>
            <th>User ID</th>
            <th>Patient Description</th>
            <th>Pathogen Description</th>
            <th>Age</th>
            <th>Pain Rate</th>
            <th>Email</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient.PATIENT_ID}>
              <td>{patient.PATIENT_ID}</td>
              <td>{patient.NAME}</td>
              <td>{patient.DATEOFBIRTH}</td>
              <td>{patient.GENDER}</td>
              <td>{patient.ADDRESS}</td>
              <td>{patient.PHONE_NUMBER}</td>
              <td>{patient.MEDICAL_HISTORY}</td>
              <td>{patient.ALLERGIES}</td>
              <td>{patient.BLOOD_TYPE}</td>
              <td>{patient.FK_USERID}</td>
              <td>{patient.patient_description}</td>
              <td>{patient.Pathogen_description}</td>
              <td>{patient.Age}</td>
              <td>{patient.PAIN_RATE}</td>
              <td>{patient.EMAIL}</td>
              {/* Add more data cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTableDr;
