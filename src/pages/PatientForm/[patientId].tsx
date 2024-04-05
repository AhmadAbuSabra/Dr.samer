// pages/PatientForm/[patientId].tsx
import React from 'react';
import { useRouter } from 'next/router';
import PatientForm from '../PatientForm'; // Adjust this import path to where your PatientForm component is located

const PatientFormPage = () => {
  const router = useRouter();
  const { patientId } = router.query;

  // Convert patientId to string or use undefined if not available
  const validPatientId = typeof patientId === 'string' ? patientId : undefined;

  return <PatientForm patientId={validPatientId} />;
};

export default PatientFormPage;
