// components/DoctorProcedureCheckbox.tsx
import React, { useEffect, useState } from 'react';

interface DoctorProcedure {
  id: number;
  procedure_name: string;
  value: number;
}

const DoctorProcedureCheckbox = ({
  patientId,
  selectedProcedures,
  setSelectedProcedures,
}: {
  patientId: number;
  selectedProcedures: Map<number, number>;
  setSelectedProcedures: React.Dispatch<React.SetStateAction<Map<number, number>>>;
}) => {
  const [procedures, setProcedures] = useState<DoctorProcedure[]>([]);

  useEffect(() => {
    const fetchProcedures = async () => {
      const response = await fetch('/api/doctorProcedures');
      const data = await response.json();
      setProcedures(data);
    };

    fetchProcedures();
  }, []);

  const handleCheckboxChange = (procedure: DoctorProcedure, isChecked: boolean) => {
    const newSelectedProcedures = new Map(selectedProcedures);
    if (isChecked) {
      console.log(`Adding ${procedure.id} with value ${procedure.value}`);
      newSelectedProcedures.set(procedure.id, procedure.value);
    } else {
      newSelectedProcedures.delete(procedure.id);
    }
    console.log('New Selected Procedures: ', Array.from(newSelectedProcedures));

    setSelectedProcedures(newSelectedProcedures);
  };
  // Inline styles for improved aesthetics
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      margin: '20px 0',
    },
    label: {
      cursor: 'pointer',
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    checkbox: {
      width: '20px',
      height: '20px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      {procedures.map((procedure) => (
        <label key={procedure.id} style={styles.label}>
          <input
            type="checkbox"
            style={styles.checkbox}
            checked={selectedProcedures.has(procedure.id)}
            onChange={(e) => handleCheckboxChange(procedure, e.target.checked)}
          />
          {procedure.procedure_name}
        </label>
      ))}
    </div>
  );
};

export default DoctorProcedureCheckbox;
