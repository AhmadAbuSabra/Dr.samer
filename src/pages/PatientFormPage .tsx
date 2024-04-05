import React from 'react';
import { useRouter } from 'next/router';
import PatientForm from './PatientForm'; // Ensure the correct import path

const PatientFormPage = () => {
  const router = useRouter();
  const { patientId } = router.query;

  // Ensure that patientId is a string before passing it to PatientForm
  const validPatientId = typeof patientId === 'string' ? patientId : undefined;

  return <PatientForm patientId={validPatientId} />;
};

export default PatientFormPage;
