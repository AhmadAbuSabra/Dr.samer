import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import FileUpload from './FileUpload'; // Adjust the path as needed
import FileList from './FileList'; // Adjust the path as needed
import styled from 'styled-components';
import DoctorProcedureCheckbox from './DoctorProcedureCheckbox'; // Adjust the import path as necessary

import { 
  FaUser, FaBirthdayCake, FaTransgender, FaHome, FaPhone, 
  FaBookMedical, FaAllergies, FaTint, FaEnvelope, FaTablets, FaSwimmer ,
  FaBandAid, FaStethoscope, FaWalking, FaPlusSquare ,FaPills ,FaBriefcaseMedical 
} from 'react-icons/fa';

const AttachmentContainer = styled.div`
  padding: 10px;
`;



// const FormContainer = styled.div`
//   flex: 1;
//   background-color: #ffffff;
//   padding: 2rem;
//   border-radius: 12px;
//   box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
//   max-width: 600px;
// `;

// const FileListCard = styled.div`
//   flex: 1;
//   background-color: #ffffff;
//   padding: 10px;
//   border-radius: 12px;
//   box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
//   max-width: 400px;
// `;

// const PatientInfoCard = styled.div`
//   flex: 0 0 auto; // Don't grow, don't shrink, auto basis
//   background-color: #ffffff;
//   padding: 20px;
//   border-radius: 12px;
//   box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
//   width: 300px; // Fixed width for the patient info card
//   margin-right: 20px; // Added margin for spacing
//   // ... other styles
// `;

// const CardTitle = styled.h3`
//   font-size: 1.25rem;
//   color: #333;
//   margin-bottom: 1rem;
// `;

// const InfoGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 1rem;
// `;

// const InfoLabel = styled.span`
//   font-size: 0.85rem;
//   color: #666;
//   margin-bottom: 0.25rem;
// `;

// const InfoValue = styled.span`
//   font-size: 1rem;
//   color: #333;
// `;




const Card = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px; // Space between the cards vertically if they wrap
  width: 100%; // Take the full width of the flex item
  max-width: 300px; // Maximum width of the cards
`;


const PageContainer = styled.div`
  display: flex;
  flex-direction: row; // Ensure the children are laid out in a row
  justify-content: space-around; // Distribute extra space evenly
  align-items: flex-start; // Align items to the start of the container
  padding: 20px;
  background-color: #f7f7f7;
  min-height: 100vh;
`;

// const PatientInfoCard = styled.div`
//   background-color: #ffffff;
//   padding: 20px;
//   border-radius: 12px;
//   box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
//   width: 300px; // Set a fixed width for the patient info card
//   margin-right: 20px;
// `;



// const CardIcon = styled.span`
//   margin-right: 0.5rem;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   color: #007bff; // Theme color
// `;

// Update your InfoLabel to include an icon
// const InfoLabel = styled.span`
//   font-size: 0.9rem;
//   color: #666;
//   display: flex;
//   align-items: center;
//   font-weight: bold; // Make the label bold
// `;


const FileListCard = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 300px; // Set a fixed width for the file list card
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  flex-grow: 1; // Allow the form container to grow and fill available space
`;


const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 1rem;
`;



const PatientInfoCardStyled = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
`;


const PatientInfoCard = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;


const CardIcon = styled.span`
  margin-right: 8px; // Adjust as needed
`;

const InfoLabel = styled.span`
  font-size: 0.85rem;
  color: #666;
`;

const InfoValue = styled.span`
  font-size: 1rem;
  color: #333;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const InfoGroup = styled.div`
  display: flex;
  align-items: center;
`;

type Patient = {
  PATIENT_ID: string;
  DATEOFBIRTH: string;
  GENDER: string;
  ADDRESS: string;
  PHONE_NUMBER: string;
  MEDICAL_HISTORY: string;
  ALLERGIES: string;
  BLOOD_TYPE: string;
  FK_USERID: number;
  patient_description: string;
  Pathogen_description: string;
  NAME: string;
  Age: number;
  PAIN_RATE: number;
  EMAIL: string;
  pain_increase: string;
  pain_decrease: string;
  pain_medication: string;
  pain_surgery: string;
  physical_therapy: string;
};

type Consultation = {
    consultation_id?: string; // Include 'id' if your consultations have a unique identifier
  consultation_notes: string;
  patient_Education: string;
  medication: string;
  // Include other necessary properties
};

const ConsultationForm: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [patientInfo, setPatientInfo] = useState<Patient | null>(null);
  const [selectedProcedures, setSelectedProcedures] = useState<Map<number, number>>(new Map());


  const [formData, setFormData] = useState<Consultation>({
    consultation_notes: '',
    patient_Education: '',
    medication: '',
  });
  const [isExistingData, setIsExistingData] = useState(false);
  const router = useRouter();

  const patientId = String(router.query.patientId);
  const appointmentId = String(router.query.appointmentId);


  useEffect(() => {
    if (patientId) {
      fetch(`/api/getPatientById?patientId=${patientId}`)
        .then(response => response.json())
        .then(data => setPatientInfo(data))
        .catch(error => console.error('Error fetching patient data:', error));
    }
  }, [patientId]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/getConsultationByPAA?patientId=${patientId}&appointmentId=${appointmentId}`);
        if (response.ok) {
            const data: Consultation[] = await response.json(); // Assuming the response is an array
            if (data.length > 0) { // Check if the array is not empty
              setFormData(data[0]); // Use the first consultation in the array
              setIsExistingData(true);
            } else {
              setIsExistingData(false); // Handle empty array
            }
          
        }
      } catch (error) {
        console.error('Error fetching consultation data:', error);
      }
    };

    if (router.query.patientId && router.query.appointmentId) {
      fetchData();
    }
  }, [router.query]);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const method = isExistingData ? 'PUT' : 'POST';
    // Adjust the endpoint as per your API's requirement
    const endpoint = isExistingData ? `/api/updateConsultation/${formData.consultation_id}` : '/api/addConsultation';
    const currentDateISO = new Date().toISOString();

    try {
      const response = await fetch(endpoint, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, patient_id: patientId, appointment_id: appointmentId }),
      });

      if (response.ok) {
        console.log(`Consultation ${isExistingData ? 'updated' : 'added'} successfully`);
        await savePatientProcedures();

        const paymentMasterData: PaymentMasterFormData = {
          patient_id: Number(patientId), // Make sure patientId and appointmentId are correctly parsed
          appointment_id: Number(appointmentId),
          status: 1,
          created_date: currentDateISO,

        };
        
        await addPaymentMasterRecord(paymentMasterData);

        router.push('/MenuScreenDr'); // Update this path to your MenuScreenDr route

      } else {
        console.error(`Error ${isExistingData ? 'updating' : 'adding'} consultation`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const savePatientProcedures = async () => {
    // Iterate over the Map entries
    for (const [procedureId, procedureValue] of selectedProcedures.entries()) {
      try {
        const response = await fetch('/api/addPatientProcedure', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            patientId,
            drProcedureId: procedureId,
            value: procedureValue, // Now correctly using the value from the Map
            isCash: true, // Example; adjust as needed
            appointmentId:appointmentId,
          }),
        });
        if (!response.ok) {
          throw new Error('Failed to add patient procedure');
        }
      } catch (error) {
        console.error('Error adding patient procedure:', error);
      }
    }
  };
  

  const onFilesAccepted = (newFiles: File[]) => {
    console.log('Accepted files:', newFiles);

    // Assuming newFiles contains only one file for upload
    // and you're interested in uploading just the first one
    const formData = new FormData();
    if (newFiles.length > 0) {
        // Append only the first file if multiple files are selected
        formData.append('file', newFiles[0]); // Use 'file' to match server expectation for a single file
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


  // Define the type for your form data for clarity and type safety
interface PaymentMasterFormData {
  patient_id: number;
  appointment_id: number;
  total_amount?: number | null;
  status: number;
  created_date: string;
  model_number?: string | null;
  approval_number?: string | null;
}

// Separate method to handle the API call
async function addPaymentMasterRecord(data: PaymentMasterFormData): Promise<void> {
  const endpoint = '/api/paymentMaster/add'; // Adjust this endpoint as necessary

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Payment Master record added successfully');
      // Handle additional actions upon success, e.g., displaying a success message
    } else {
      console.error('Failed to add the Payment Master record');
      // Handle server response error, e.g., displaying an error message
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle client-side error, e.g., displaying an error message
  }
}


  return (

    <PageContainer>
      

       <FileListCard>
        <h3>المرفقات</h3>
        {/* <FileList files={files} onRemoveFile={onRemoveFile} patientId={patientId} /> */}
        <FileList
  files={files.map(file => ({ file_name: file.name /*, other properties */ }))}
  onRemoveFile={fileName => onRemoveFile(new File([], fileName))}
/>

      </FileListCard>
      <FormContainer>
      <form onSubmit={handleSubmit} style={{
        width: '100%',
        maxWidth: '600px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        padding: '2rem',
        boxSizing: 'border-box',
      }}>
        <h2 style={{
          fontSize: '2rem',
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#333',
          fontWeight: '600',
        }}>نموذج الاستشارة</h2>

<label style={{ marginBottom: '0.5rem', fontSize: '1rem', color: '#333', fontWeight: '600' }} htmlFor="consultation_notes">ملاحظات الدكتور</label>
        <textarea
          style={{
            width: '100%',
            marginBottom: '1rem',
            padding: '1rem',
            border: '1px solid #ced4da',
            borderRadius: '8px',
            fontSize: '1rem',
            minHeight: '150px',
            resize: 'vertical',
            boxSizing: 'border-box',
          }}
          name="consultation_notes"
          value={formData.consultation_notes}
          onChange={handleInputChange}
          placeholder="Enter detailed consultation notes"
        />

        <label style={{ marginBottom: '0.5rem', fontSize: '1rem', color: '#333', fontWeight: '600' }} htmlFor="medication">الأدوية</label>
        <textarea
          style={{
            width: '100%',
            marginBottom: '1rem',
            padding: '1rem',
            border: '1px solid #ced4da',
            borderRadius: '8px',
            fontSize: '1rem',
            minHeight: '150px',
            resize: 'vertical',
            boxSizing: 'border-box',
          }}
          name="medication"
          value={formData.medication}
          onChange={handleInputChange}
          placeholder="Enter medication prescribed"
        />

        <label style={{ marginBottom: '0.5rem', fontSize: '1rem', color: '#333', fontWeight: '600' }} htmlFor="patient_Education">معلومات للمريض</label>
        <textarea
          style={{
            width: '100%',
            marginBottom: '1rem',
            padding: '1rem',
            border: '1px solid #ced4da',
            borderRadius: '8px',
            fontSize: '1rem',
            minHeight: '150px',
            resize: 'vertical',
            boxSizing: 'border-box',
          }}
          name="patient_Education"
          value={formData.patient_Education}
          onChange={handleInputChange}
          placeholder="Enter patient education information"
        />

      

<DoctorProcedureCheckbox
        patientId={Number(patientId)}
        selectedProcedures={selectedProcedures}
        setSelectedProcedures={setSelectedProcedures}
      />
        <button style={{
          display: 'block',
          width: '100%',
          padding: '1rem 0',
          border: 'none',
          borderRadius: '8px',
          backgroundColor: '#007bff',
          color: 'white',
          fontSize: '1.125rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          outline: 'none',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
          marginTop: '1rem',
          textTransform: 'uppercase',
          textAlign: 'center',
          textDecoration: 'none',
          maxWidth: '200px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }} type="submit"
          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#0056b3'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#007bff'; e.currentTarget.style.transform = 'translateY(0px)'; }}
          onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(1px)'; }}
          onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
        >
          حفظ
        </button>
      </form>
  
</FormContainer>

<PatientInfoCard>
{patientInfo ? (
        <>
      <InfoRow>
        <InfoGroup>
          <CardIcon><FaUser /></CardIcon>
          <InfoLabel>الاسم:</InfoLabel>
          <InfoValue>{patientInfo.NAME}</InfoValue>
        </InfoGroup>

        <InfoGroup>
          <CardIcon><FaBirthdayCake /></CardIcon>
          <InfoLabel>تاريخ الميلاد:</InfoLabel>
          <InfoValue>{patientInfo.DATEOFBIRTH}</InfoValue>
        </InfoGroup>

        <InfoGroup>
          <CardIcon><FaTransgender /></CardIcon>
          <InfoLabel>الجنس:</InfoLabel>
          <InfoValue>{patientInfo.GENDER}</InfoValue>
        </InfoGroup>
      </InfoRow>

      <InfoRow>
        <InfoGroup>
          <CardIcon><FaHome /></CardIcon>
          <InfoLabel>العنوان:</InfoLabel>
          <InfoValue>{patientInfo.ADDRESS}</InfoValue>
        </InfoGroup>

        <InfoGroup>
          <CardIcon><FaPhone /></CardIcon>
          <InfoLabel>رقم الهاتف:</InfoLabel>
          <InfoValue>{patientInfo.PHONE_NUMBER}</InfoValue>
        </InfoGroup>

        <InfoGroup>
          <CardIcon><FaBookMedical /></CardIcon>
          <InfoLabel>التاريخ الطبي:</InfoLabel>
          <InfoValue>{patientInfo.MEDICAL_HISTORY}</InfoValue>
        </InfoGroup>
      </InfoRow>

      <InfoRow>
        <InfoGroup>
          <CardIcon><FaAllergies /></CardIcon>
          <InfoLabel>الحساسية:</InfoLabel>
          <InfoValue>{patientInfo.ALLERGIES}</InfoValue>
        </InfoGroup>

        <InfoGroup>
          <CardIcon><FaTint /></CardIcon>
          <InfoLabel>فصيلة الدم:</InfoLabel>
          <InfoValue>{patientInfo.BLOOD_TYPE}</InfoValue>
        </InfoGroup>

        <InfoGroup>
          <CardIcon><FaEnvelope /></CardIcon>
          <InfoLabel>البريد الإلكتروني:</InfoLabel>
          <InfoValue>{patientInfo.EMAIL}</InfoValue>
        </InfoGroup>
      </InfoRow>

      <InfoRow>
        <InfoGroup>
          <CardIcon><FaPills /></CardIcon>
          <InfoLabel>الأدوية:</InfoLabel>
          <InfoValue>{patientInfo.pain_medication}</InfoValue>
        </InfoGroup>

        <InfoGroup>
          <CardIcon><FaBriefcaseMedical /></CardIcon>
          <InfoLabel>جراحة الألم:</InfoLabel>
          <InfoValue>{patientInfo.pain_surgery}</InfoValue>
        </InfoGroup>

        <InfoGroup>
          <CardIcon><FaSwimmer /></CardIcon>
          <InfoLabel>العلاج الطبيعي:</InfoLabel>
          <InfoValue>{patientInfo.physical_therapy}</InfoValue>
        </InfoGroup>
      </InfoRow>

      </>
      ) : (
        <p>Loading patient information...</p>
      )}
    </PatientInfoCard>

    </PageContainer>
  );
};

export default ConsultationForm;
