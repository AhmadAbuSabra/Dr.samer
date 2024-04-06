import React, { useState, useEffect ,ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import FileUpload from './FileUpload'; // Adjust the path as needed
import FileList from './FileList'; // Adjust the path as needed
import styled from 'styled-components';

const AttachmentContainer = styled.div`
  padding: 20px;
`;

interface FileListProps {
  patientId?: string;
  key: number;
}

interface FormData {
  patientId: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  phoneNumber: string;
  medicalHistory: string;
  allergies: string;
  bloodType: string;
  fkUserId: number;
  name: string;
  age: number;
  painRate: number;
  email: string;
  patientDescription: string;
  pathogenDescription: string;
  pain_increase: string;
  pain_decrease: string;
  pain_medication: string;
  pain_surgery: string;
  physical_therapy: string;
}

const PatientForm: React.FC<{ patientId?: string }> = ({ patientId }) => {
 
  const [files, setFiles] = useState<File[]>([]);
  const [refreshFileListKey, setRefreshFileListKey] = useState<number>(0);

  const [formData, setFormData] = useState({
    patientId: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    phoneNumber: '',
    medicalHistory: '',
    allergies: '',
    bloodType: '',
    fkUserId: 0,
    name: '',
    age: 0,
    painRate: 5,
    email: '',
    patientDescription: '',
    pathogenDescription: '',
    pain_increase: '',
    pain_decrease: '',
    pain_medication: '',
    pain_surgery: '',
    physical_therapy: '',
  });

  const router = useRouter();

  const onFilesAccepted = (newFiles: File[]) => {
    console.log('Accepted files:', newFiles);

    // Assuming newFiles contains only one file for upload
    // and you're interested in uploading just the first one
    const formData = new FormData();
    if (newFiles.length > 0) {
        // Append only the first file if multiple files are selected
        formData.append('file', newFiles[0]); // Use 'file' to match server expectation for a single file
console.log('patient id ');
console.log(patientId);
        if (patientId) {
          formData.append('patientId', patientId);
      }

    }

    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); // Handle the response data
      // Assuming `setFiles` updates the component's state with the new list of files
      // Update accordingly if you're handling the state differently
      setFiles(currentFiles => [...currentFiles, newFiles[0]]);
      setRefreshFileListKey(prevKey => prevKey + 1); // Trigger refresh

    })
    .catch(error => console.error('Error:', error));
};


  const onRemoveFile = (fileToRemove: File) => {
    // Here, you would typically handle the file removal process
    // Example: DELETE request to your '/api/remove' endpoint

    console.log('fileToRemove');
    console.log(fileToRemove);
    fetch('/api/remove', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fileName: fileToRemove.name }), // Adjust according to your API
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); // Handle the response
      setFiles(currentFiles => currentFiles.filter(file => file !== fileToRemove)); // Update the state
    })
    .catch(error => console.error('Error:', error));
  };


  useEffect(() => {
    console.log('patientId');
    console.log(patientId);
    if (patientId) {
      fetchPatientData(patientId);
    }
  }, [patientId]);

  const fetchPatientData = async (id: string) => {
    try {
      const response = await fetch(`/api/getPatientById?patientId=${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data)
      console.log(data.DATEOFBIRTH)
      let type = typeof data.DATEOFBIRTH;

      let dateOfBirth = new Date(data.DATEOFBIRTH);

console.log(type); // This will output the type of data.DATEOFBIRTH
      setFormData({
        patientId: data.PATIENT_ID || '',
        dateOfBirth: dateOfBirth.toISOString().split('T')[0] || '', // Use ISO string format for the date
        gender: data.GENDER || '',
        address: data.ADDRESS || '',
        phoneNumber: data.PHONE_NUMBER || '',
        medicalHistory: data.MEDICAL_HISTORY || '',
        allergies: data.ALLERGIES || '',
        bloodType: data.BLOOD_TYPE || '',
        fkUserId: 0 ,
        name: data.NAME || '',
        age: data.Age || 0,
        painRate: data.PAIN_RATE || 5,
        email: data.EMAIL || '',
        patientDescription: data.patient_description || '',
        pathogenDescription: data.Pathogen_description || '',
        pain_increase: data.pain_increase || '',
        pain_decrease: data.pain_decrease || '',
        pain_medication: data.pain_medication || '',
        pain_surgery: data.pain_surgery || '',
        physical_therapy: data.physical_therapy || '',
      });
    } catch (error) {
      console.error("Failed to fetch patient data:", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.scrollTo(0, 0); // Add this line to scroll to top

    try {
        console.log(' ahmad ')
        console.log(formData);
      const response = await fetch('/api/updatePatient', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedData = await response.json();
      console.log('Patient updated successfully:', updatedData);
      // toast.success(' تم ارسال الطلب');
      router.push('/PatientList');
      // setTimeout(() => {
      //   router.push('/PatientList'); // Replace '/PatientList' with your correct route
      // }, 2000); // 2000 milliseconds delay (2 seconds)      

    } catch (error) {
      console.error('Failed to update patient data:', error);
    }
  };

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    if (event.target instanceof HTMLInputElement && event.target.type === 'checkbox') {
      // Handling checkbox inputs
      const checked = event.target.checked;
      setFormData(prev => ({
        ...prev,
        // [name]: checked ? parseInt(value, 10) : prev[name]
        [name as keyof FormData]: checked ? parseInt(value, 10) : prev[name as keyof FormData]

      }));
    } else if (name === 'dateOfBirth') {
      // Special handling for dateOfBirth to calculate age
      const age = calculateAge(value); // Assume calculateAge is defined elsewhere
      setFormData(prev => ({
        ...prev,
        [name]: value,
        age: age // Ensure this is consistent with the expected data type for age
      }));
    } else {
      // Handling all other inputs
      setFormData(prev => ({
        ...prev,
        // [name]: name === 'painRate' ? parseInt(value, 10) : value
        [name as keyof FormData]: name === 'painRate' ? parseInt(value, 10) : value

      }));
    }
};



  // Inline CSS styles
  const styles: { [key: string]: React.CSSProperties } = {
    formContainer: {
      maxWidth: '700px',
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
      textAlign: 'center' as 'center',
      fontSize: '24px',
      color: '#007bff', // Title color
      marginBottom: '2rem',
    },
    label: {
      fontSize: '16px',
      color: '#007bff', // Label color
      marginBottom: '8px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '16px',
      border: '1px solid #ced4da',
      borderRadius: '4px',
      fontSize: '16px',
    },
    textArea: {
      width: '100%',
      padding: '10px',
      marginBottom: '16px',
      border: '1px solid #ced4da',
      borderRadius: '4px',
      minHeight: '150px',
      fontSize: '16px',
      resize: 'vertical' as 'vertical',
    },
    button: {
      width: '100%',
      padding: '12px',
      marginTop: '20px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#007bff', // Button background color
      color: 'white', // Button text color
      fontSize: '18px',
      cursor: 'pointer',
    },
    focusedInput: {
      borderColor: '#28a745', // Change this to your desired color
    boxShadow: '0 0 0 2px rgba(40, 167, 69, 0.25)', 
    },
    //  slider: (value: number) => ({
    //   appearance: 'none',
    //   width: '100%',
    //   height: '15px',
    //   borderRadius: '5px',
    //   background: getSliderBackground(value),
    //   outline: 'none',
    //   opacity: '0.7',
    //   transition: 'opacity 0.2s',
    //   ':hover': {
    //     opacity: '1',
    //   },
    // }),
    // valueDisplay: (value: number) => ({
    //   textAlign: 'center',
    //   marginTop: '10px',
    //   padding: '5px',
    //   borderRadius: '5px',
    //   color: 'white',
    //   fontWeight: 'bold',
    //   backgroundColor: getColor(value),
    // }),

    checkboxContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      margin: '10px 5px', // Space between each checkbox
      // Add more styles if needed
    },
    checkbox: {
      margin: '0 5px 0 0',
      cursor: 'pointer',
      // Style for the checkbox itself
    },
    checkboxLabel: {
      margin: '0 15px 0 0', // Space after the label
      // Style for the label
    },
    checkboxGroup: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap', // Allows the elements to wrap
      justifyContent: 'center', // Center align the checkboxes
      margin: '20px 0', // Vertical space around the group
    },
    
  };

  const [buttonStyle, setButtonStyle] = useState(styles.button);

  // Define the hover and active styles
const hoverStyle = {
  ...styles.button,
  backgroundColor: '#0056b3', // Darker shade for hover state
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Slight shadow for depth
};

const activeStyle = {
  ...styles.button,
  backgroundColor: '#003d80', // Even darker for active (clicked) state
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Less shadow for a "pressed" effect
};

// Event handlers for mouse events
const handleMouseOverFirst = () => setButtonStyle(hoverStyle);
const handleMouseOutFirst = () => setButtonStyle(styles.button);
const handleMouseDownFirst = () => setButtonStyle(activeStyle);
const handleMouseUpFirst = () => setButtonStyle(hoverStyle);

// State and styles for the second button
const [secondButtonStyle, setSecondButtonStyle] = useState({ ...buttonStyle, backgroundColor: '#17a2b8' });

// Event handlers for the second button
const handleMouseOverSecond = () => setSecondButtonStyle({ ...hoverStyle, backgroundColor: '#148a98' });
const handleMouseOutSecond = () => setSecondButtonStyle({ ...styles.button, backgroundColor: '#17a2b8' });
const handleMouseDownSecond = () => setSecondButtonStyle({ ...activeStyle, backgroundColor: '#0d6068' });
const handleMouseUpSecond = () => setSecondButtonStyle({ ...hoverStyle, backgroundColor: '#148a98' });


  const getColor = (value: number) => {
    const hue = ((value - 1) * 12).toString(10);
    return `hsl(${hue}, 100%, 50%)`;
  };

  const getSliderBackground = (value: number) => {
    const percentage = ((value - 1) / 9) * 100;
    return `linear-gradient(90deg, green ${percentage}%, red ${percentage}%)`;
  };

  // Event handlers
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log('Focused on:', event.target.name); // Add this to check if the event is triggered

    event.target.style.setProperty('border-color', '#28a745', 'important');
    event.target.style.setProperty('box-shadow', '0 0 0 2px rgba(40, 167, 69, 0.25)', 'important');
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log('Blurred from:', event.target.name); // Add this to check if the event is triggered

    event.target.style.borderColor = '#ced4da';
    event.target.style.boxShadow = 'none';
  };

//   useEffect(() => {
//     if (patientId) {
//       fetchPatientData(patientId as string);
//     }
//   }, [patientId]);

//   const fetchPatientData = async (id: string) => {
//     try {
//       const response = await fetch(`/api/getPatientById?patientId=${id}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setFormData(data);
//     } catch (error) {
//       console.error("Failed to fetch patient data:", error);
//     }
//   };

const calculateAge = (dob: string): number => {
  const birthday = new Date(dob);
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};



  return (
    <>
      <ToastContainer autoClose={2000} hideProgressBar={false} />

    <div style={styles.formContainer}>

      <h2 style={styles.title}>Patient Information Form</h2>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <label style={styles.label} htmlFor="patientId">Patient ID</label>
          <input  style={styles.input} type="text" id="patientId" name="patientId" value={formData.patientId} onChange={handleChange} />
        </div> */}

<div>
          <label style={styles.label} htmlFor="name">الاسم</label>
          <input style={styles.input} type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
    <label style={styles.label} htmlFor="gender">الجنس</label>
    <select 
        style={styles.input} 
        id="gender" 
        name="gender" 
        value={formData.gender} 
        onChange={handleChange}
    >
        <option value="">اختر الجنس</option>
        <option value="Male">ذكر</option>
        <option value="Female">أنثى</option>
    </select>
</div>
        <div>
          <label style={styles.label} htmlFor="dateOfBirth">تاريخ الميلاد</label>
          <input  style={styles.input} type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
        </div>
        

        <div>
          <label style={styles.label} htmlFor="address">العنوان</label>
          <input style={styles.input} type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
        </div>

        <div>
          <label style={styles.label} htmlFor="phoneNumber">رقم الهاتف</label>
          <input style={styles.input} type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>

        <div>
          <label style={styles.label} htmlFor="age">العمر</label>
          <input        disabled={true} 
        style={styles.input} type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
        </div>

<div>
          <label style={styles.label} htmlFor="email">البريد الالكتروني</label>
          <input style={styles.input} type="email" id="email" name="email" value={formData.email} onChange={handleChange}  onFocus={handleFocus}  
              onBlur={handleBlur}/>
        </div>

        <div>
          <label style={styles.label} htmlFor="medicalHistory">ما هي المشكلة التي تعاني منها </label>
          <textarea style={styles.textArea} id="medicalHistory" name="medicalHistory" value={formData.medicalHistory} onChange={handleChange}></textarea>
        </div>

        <div>
          <label style={styles.label} htmlFor="allergies">منذ متى بدأت المشكلة</label>
          <input style={styles.input} type="text" id="allergies" name="allergies" value={formData.allergies} onChange={handleChange} />
        </div>

        <div>
  <label style={styles.label} htmlFor="painRate">نسبة الألم (1-10)</label>
  <div style={styles.checkboxGroup}>
    {Array.from({ length: 10 }, (_, i) => i + 1).map(number => (
      <div key={number} style={styles.checkboxContainer}>
        <input
          style={styles.checkbox}
          type="checkbox"
          id={`painRate${number}`}
          name="painRate"
          value={number}
          checked={formData.painRate === number}
          onChange={handleChange}
        />
        <label style={styles.checkboxLabel} htmlFor={`painRate${number}`}>{number}</label>
      </div>
    ))}
  </div>
</div>


<div>
  <label style={styles.label} htmlFor="pain_increase">ما هي الأمور او الحركات التي تزيد من الألم</label>
  <input style={styles.input} type="text" id="pain_increase" name="pain_increase" value={formData.pain_increase} onChange={handleChange} />
</div>

{/* Input for pain_decrease */}
<div>
  <label style={styles.label} htmlFor="pain_decrease">ما هي الأمور أو الحركات التي تخفف الألم </label>
  <input style={styles.input} type="text" id="pain_decrease" name="pain_decrease" value={formData.pain_decrease} onChange={handleChange} />
</div>

{/* Input for pain_medication */}
<div>
  <label style={styles.label} htmlFor="pain_medication">ما هي الأدوية التي تستخدمها لعلاج الألم</label>
  <input style={styles.input} type="text" id="pain_medication" name="pain_medication" value={formData.pain_medication} onChange={handleChange} />
</div>

{/* Input for pain_surgery */}
<div>
  <label style={styles.label} htmlFor="pain_surgery">هل أجريت أي عملية لهذا الألم</label>
  <input style={styles.input} type="text" id="pain_surgery" name="pain_surgery" value={formData.pain_surgery} onChange={handleChange} />
</div>

{/* Input for physical_therapy */}
<div>
  <label style={styles.label} htmlFor="physical_therapy">هل أجريت علاج طبيعي لهذا الألم</label>
  <input style={styles.input} type="text" id="physical_therapy" name="physical_therapy" value={formData.physical_therapy} onChange={handleChange} />
</div>


<AttachmentContainer>
      <FileUpload onFilesAccepted={onFilesAccepted} />
      <FileList key={refreshFileListKey} files={files} onRemoveFile={onRemoveFile} patientId={patientId} />
    </AttachmentContainer>


    
        {/* <div>
          <label style={styles.label} htmlFor="patientDescription">Patient Description</label>
          <textarea style={styles.textArea} id="patientDescription" name="patientDescription" value={formData.patientDescription} onChange={handleChange}></textarea>
        </div>

        <div>
          <label style={styles.label} htmlFor="pathogenDescription">Pathogen Description</label>
          <textarea style={styles.textArea} id="pathogenDescription" name="pathogenDescription" value={formData.pathogenDescription} onChange={handleChange}></textarea>
        </div> */}
<div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', marginTop: '20px' }}> 

        <button
  style={buttonStyle}
  type="submit"
  onMouseOver={handleMouseOverFirst}
  onMouseOut={handleMouseOutFirst}
  onMouseDown={handleMouseDownFirst}
  onMouseUp={handleMouseUpFirst}
>
  حفظ
</button>
<button
              style={secondButtonStyle}
              type="button" // Set type as 'button' to prevent it from submitting the form
              onClick={() => router.push({
                pathname: '/Appointments',
                query: { patientId: formData.patientId }
            })}
    onMouseOver={handleMouseOverSecond}
    onMouseOut={handleMouseOutSecond}
    onMouseDown={handleMouseDownSecond}
    onMouseUp={handleMouseUpSecond}
>
    حفظ و حجز موعد
</button>
</div>
      </form>
    </div>
    </>
  );
};

export default PatientForm;