// pages/appointments.tsx
import React, { useState, useEffect, FormEvent ,CSSProperties} from 'react';
import { useRouter } from 'next/router';


type Appointment = {
  APPOINTMENT_ID?: string;
  FK_DOCTORID: string;
  FK_PATIENTID: string;
  APPOINTMENT_TIME: string;
  STATUS_ENUM: string;
  CALL_LINK: string;
  DESC: string;
  PAYMENT_METHOD?: 'cash' | 'insurance'; // New field
  INSURANCE_COMPANY?: string; // New field
};



const styles: { [key: string]: CSSProperties } = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row', // explicitly set to row for clarity
      flexWrap: 'wrap', // ensures wrapping on smaller screens
      gap: '1rem', // adds space between form and table
    },
    formContainer: {
      flex: '1 1 45%', // flex grow, flex shrink, flex basis
      margin: '1rem',
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    tableContainer: {
      flex: '1 1 45%', // flex grow, flex shrink, flex basis
      margin: '1rem',
      overflowX: 'auto', // TypeScript accepts this as a valid value
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '16px',
      border: '1px solid #ced4da',
      borderRadius: '4px',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '12px',
      marginTop: '20px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#007bff', 
      color: 'white',
      fontSize: '18px',
      cursor: 'pointer',
    },
    textArea: {
        width: '100%',
        padding: '10px',
        paddingTop: '10px', // Adjust padding to ensure cursor alignment
        paddingBottom: '10px', // Adjust padding to ensure cursor alignment
        marginBottom: '16px',
        border: '1px solid #ced4da',
        borderRadius: '4px',
        minHeight: '150px',
        fontSize: '16px',
        lineHeight: 'normal', // Reset line height to normal to prevent vertical centering
        resize: 'vertical',
      },

    // ... (rest of your styles)

  // ...

clearButton: {
    cursor: 'pointer',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#32e0c4', // Modern teal color
    color: 'white',
    fontSize: '36px',
    border: 'none',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px auto',
    transition: 'background-color 0.3s, transform 0.2s',
},
title: {
    textAlign: 'center',
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#007bff',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '2rem',
    padding: '0.5rem',
    background: 'linear-gradient(to right, #06beb6, #48b1bf)',
    borderRadius: '5px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  },
// ...

      
      
  
      
    // Add other styles as needed
  };

// const styles = {
//     formContainer: {
//       maxWidth: '700px',
//       margin: '2rem auto',
//       padding: '2rem',
//       backgroundColor: '#fff',
//       borderRadius: '10px',
//       boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//     },
//     title: {
//       textAlign: 'center' as 'center',
//       fontSize: '24px',
//       color: '#007bff', // Title color
//       marginBottom: '2rem',
//     },
//     label: {
//       fontSize: '16px',
//       color: '#007bff', // Label color
//       marginBottom: '8px',
//     },
//     input: {
//       width: '100%',
//       padding: '10px',
//       marginBottom: '16px',
//       border: '1px solid #ced4da',
//       borderRadius: '4px',
//       fontSize: '16px',
//     },
//     textArea: {
//       width: '100%',
//       padding: '10px',
//       marginBottom: '16px',
//       border: '1px solid #ced4da',
//       borderRadius: '4px',
//       minHeight: '150px',
//       fontSize: '16px',
//       resize: 'vertical' as 'vertical',
//     },
//     button: {
//       width: '100%',
//       padding: '12px',
//       marginTop: '20px',
//       border: 'none',
//       borderRadius: '4px',
//       backgroundColor: '#007bff', // Button background color
//       color: 'white', // Button text color
//       fontSize: '18px',
//       cursor: 'pointer',
//     },
//     focusedInput: {
//       borderColor: '#28a745', // Change this to your desired color
//     boxShadow: '0 0 0 2px rgba(40, 167, 69, 0.25)', 
//     },
//      slider: (value: number) => ({
//       appearance: 'none',
//       width: '100%',
//       height: '15px',
//       borderRadius: '5px',
//       background: getSliderBackground(value),
//       outline: 'none',
//       opacity: '0.7',
//       transition: 'opacity 0.2s',
//       ':hover': {
//         opacity: '1',
//       },
//     }),
//     valueDisplay: (value: number) => ({
//       textAlign: 'center',
//       marginTop: '10px',
//       padding: '5px',
//       borderRadius: '5px',
//       color: 'white',
//       fontWeight: 'bold',
//       backgroundColor: getColor(value),
//     }),
    
//   };

  const getColor = (value: number) => {
    const hue = ((value - 1) * 12).toString(10);
    return `hsl(${hue}, 100%, 50%)`;
  };

  const getSliderBackground = (value: number) => {
    const percentage = ((value - 1) / 9) * 100;
    return `linear-gradient(90deg, green ${percentage}%, red ${percentage}%)`;
  };


const Appointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [formData, setFormData] = useState<Appointment>({
    FK_DOCTORID: '',
    FK_PATIENTID: '',
    APPOINTMENT_TIME: '',
    STATUS_ENUM: '',
    CALL_LINK: '',
    DESC: '',
    PAYMENT_METHOD: 'cash', // Initialize as empty or with a default value
    INSURANCE_COMPANY: '', // Initialize as empty
  });
  const router = useRouter();
  const patientId = router.query.patientId as string;

  useEffect(() => {
    // Ensure patientId is not undefined
    if (patientId) {
      fetchAppointments(patientId);
    }
  }, [patientId]);

  const formatDateForDisplay = (isoDate :any ) => {
    return new Date(isoDate).toLocaleString();
  };

const fetchAppointments = (patientId: string) => {
    fetch(`/api/getAppointments?patientId=${patientId}`)
      .then((response) => response.json())
      .then((data) => setAppointments(data))
      .catch((error) => console.error('Error fetching appointments:', error));
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const endpoint = '/api/manageAppointment';
    const method = formData.APPOINTMENT_ID ? 'PUT' : 'POST';


    const formattedAppointmentTime = formData.APPOINTMENT_TIME
    ? new Date(formData.APPOINTMENT_TIME).toISOString()
    : '';

    const dataToSubmit = {
        ...formData,
        APPOINTMENT_TIME: formattedAppointmentTime,
        FK_PATIENTID: patientId,
      };

    fetch(endpoint, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSubmit),

    })
      .then((response) => response.json())
      .then(() => {
        fetchAppointments(patientId); // Re-fetch appointments
        clearForm(); // Clear the form
      })
      .catch((error) => console.error('Error submitting form:', error));
  };

  const clearForm = () => {
    setFormData({
      FK_DOCTORID: '',
      FK_PATIENTID: '',
      APPOINTMENT_TIME: '',
      STATUS_ENUM: '',
      CALL_LINK: '',
      DESC: '',
    });
  };

  const handleRowClick = (appointment: Appointment) => {
    console.log(' handleRowClick ')
    const localDateTime = appointment.APPOINTMENT_TIME
    ? new Date(appointment.APPOINTMENT_TIME).toISOString().slice(0, 16) // Cut off seconds and timezone
    : '';


    console.log(appointment)
    setFormData({
    ...appointment,
    APPOINTMENT_TIME: localDateTime,
  });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date: Date) => {
    setFormData({ ...formData, APPOINTMENT_TIME: date.toISOString() });
  };

  return (
    <div className="container py-5">
              <div style={styles.container}>
                
              <div style={{ width: '100%' }}>
        <h1 style={styles.title}>Appointments Dashboard</h1>
      </div>

        <div style={styles.formContainer}>

      <h2>Appointments Management</h2>
   
        <form onSubmit={handleFormSubmit}>
      
          {/* Appointment Time Field */}
          <div className="mb-3">
            <label style={styles.label} htmlFor="appointmentTime" className="form-label">Appointment Time</label>
            <input  type="datetime-local" className="form-control" id="appointmentTime" name="APPOINTMENT_TIME" value={formData.APPOINTMENT_TIME} onChange={handleInputChange} 
                style={{
                    padding: '10px',
                    width: '100%',
                    borderRadius: '4px',
                    border: '1px solid #ced4da',
                    marginBottom: '10px',
                  }}
            />
          </div>
{/* Payment Method Field */}
<div className="mb-3">
  <label htmlFor="paymentMethod" className="form-label" style={styles.label}>Payment Method</label>
  <select id="paymentMethod" name="PAYMENT_METHOD" value={formData.PAYMENT_METHOD} onChange={handleInputChange} className="form-control" style={styles.input}>
  
    <option value="cash">Cash</option>
    <option value="insurance">Insurance</option>
  </select>
</div>

{/* Conditional Insurance Company Field */}
{formData.PAYMENT_METHOD === 'insurance' && (
  <div className="mb-3">
    <label htmlFor="insuranceCompany" className="form-label" style={styles.label}>Insurance Company</label>
    <input type="text" id="insuranceCompany" name="INSURANCE_COMPANY" value={formData.INSURANCE_COMPANY} onChange={handleInputChange} className="form-control" style={styles.input} />
  </div>
)}

         

          <div className="mb-3">
            <label style={styles.label} htmlFor="callLink" className="form-label">Call Link</label>
            <input style={styles.input} type="text" className="form-control" id="callLink" name="CALL_LINK" value={formData.CALL_LINK} onChange={handleInputChange} />
          </div>

      
          <div className="mb-3">
  <label style={styles.label} htmlFor="desc" className="form-label">Description</label>
  <textarea
    style={styles.textArea}
    className="form-control"
    id="desc"
    name="DESC"
    value={formData.DESC}
    onChange={handleInputChange}
  />
</div>

          <button type="submit" className="btn btn-primary">حفظ</button>


        </form>
   
        </div>
        <div style={styles.tableContainer}>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Appointment Time</th>
            <th>Call Link</th>
            <th>Description</th>
            <th>Payment Method</th> {/* New column */}
    <th>Insurance Company</th> {/* New column */}
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={appointment.APPOINTMENT_ID} onClick={() => handleRowClick(appointment)}>
              {/* <td>{appointment.APPOINTMENT_ID}</td> */}
              <td>{index + 1}</td> {/* Here's where you use the row number instead of the ID */}
              <td>{formatDateForDisplay(appointment.APPOINTMENT_TIME)}</td>
              <td>{appointment.CALL_LINK}</td>
              <td>{appointment.DESC}</td>
              <td>{appointment.PAYMENT_METHOD || 'N/A'}</td> {/* Display new field */}
      <td>{appointment.INSURANCE_COMPANY || 'N/A'}</td> {/* Display new field */}
            </tr>
          ))}
        </tbody>
      </table>
      <button
  type="button"
  style={styles.clearButton}
  onClick={clearForm}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.05)'; // Enlarge on hover
    e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)'; // Deeper shadow on hover
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1)'; // Reset scale
    e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)'; // Reset shadow
  }}
  onMouseDown={(e) => {
    e.currentTarget.style.transform = 'scale(0.95)'; // Slight shrink on click
  }}
  onMouseUp={(e) => {
    e.currentTarget.style.transform = 'scale(1.05)'; // Return to hover state
  }}
>
  + {/* Plus symbol */}
</button>

      </div>
    </div>
    </div>
  );
};

export default Appointments;
