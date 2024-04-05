// pages/api/getPatientById.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../utilities/db';

export default async function getPatientById(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { patientId } = req.query; // Assuming you're passing the patient's ID as a query parameter

        // Validate that patientId is provided and is a string
        if (!patientId || typeof patientId !== 'string') {
            res.status(400).json({ error: 'Patient ID must be provided and must be a string.' });
            return;
        }

        const result = await query(
            `SELECT "PATIENT_ID", "DATEOFBIRTH", "GENDER", "ADDRESS", "PHONE_NUMBER", 
                    "MEDICAL_HISTORY", "ALLERGIES", "BLOOD_TYPE", "FK_USERID", 
                    patient_description, "Pathogen_description", "NAME", "Age", 
                    "PAIN_RATE", "EMAIL", "pain_increase", "pain_decrease", 
                    "pain_medication", "pain_surgery", "physical_therapy"
             FROM public."PATIENT"
             WHERE "PATIENT_ID" = $1`, 
            [patientId]
        );

        // If no rows are returned, the patient does not exist
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Patient not found.' });
        } else {
            res.status(200).json(result.rows[0]); // Send the patient data
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
