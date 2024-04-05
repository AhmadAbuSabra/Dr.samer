// pages/api/updatePatient.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../utilities/db';

// Define a type for the expected request body
interface UpdatePatientRequestBody {
  patientId: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  phoneNumber: string;
  medicalHistory: string;
  allergies: string;
  bloodType: string;
  fkUserId: string;
  name: string;
  age: string;
  painRate: string;
  email: string;
  patientDescription: string;
  pathogenDescription: string;
  pain_increase: string;
  pain_decrease: string;
  pain_medication: string;
  pain_surgery: string;
  physical_therapy: string;
}

export default async function updatePatient(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  try {
    const {
      patientId,
      dateOfBirth,
      gender,
      address,
      phoneNumber,
      medicalHistory,
      allergies,
      bloodType,
      fkUserId,
      name,
      age,
      painRate,
      email,
      patientDescription,
      pathogenDescription,
      pain_increase,
      pain_decrease,
      pain_medication,
      pain_surgery,
      physical_therapy,
    } = req.body as UpdatePatientRequestBody;

    // Validate that patientId is provided
    if (!patientId) {
      res.status(400).json({ error: 'Patient ID must be provided.' });
      return;
    }

    const result = await query(
      `UPDATE public."PATIENT"
       SET "DATEOFBIRTH" = $2, "GENDER" = $3, "ADDRESS" = $4, "PHONE_NUMBER" = $5,
           "MEDICAL_HISTORY" = $6, "ALLERGIES" = $7, "BLOOD_TYPE" = $8, "FK_USERID" = $9,
           "patient_description" = $10, "Pathogen_description" = $11, "NAME" = $12,
           "Age" = $13, "PAIN_RATE" = $14, "EMAIL" = $15, "pain_increase" = $16,
           "pain_decrease" = $17, "pain_medication" = $18, "pain_surgery" = $19,
           "physical_therapy" = $20
       WHERE "PATIENT_ID" = $1
       RETURNING *;`,
      [
        patientId,
        dateOfBirth,
        gender,
        address,
        phoneNumber,
        medicalHistory,
        allergies,
        bloodType,
        fkUserId,
        patientDescription,
        pathogenDescription,
        name,
        age,
        painRate,
        email,
        // Add new fields here
        pain_increase,
        pain_decrease,
        pain_medication,
        pain_surgery,
        physical_therapy,
      ],
    );
    

    // If no rows are affected, the patient does not exist or no updates were made
    if (result.rowCount === 0) {
      res.status(404).json({ error: 'Patient not found or no updates were made.' });
    } else {
      console.log(result);
      res.status(200).json(result.rows[0]); // Send the updated patient data
    }
  } catch (error: unknown) {
    // Type guard to check if error is an instance of Error
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
}
