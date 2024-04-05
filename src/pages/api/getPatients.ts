// pages/api/getPatients.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../utilities/db'; // Adjust the path according to your db utility

export default async function getPatients(req: NextApiRequest, res: NextApiResponse) {
  try {
    const results = await query(`
      SELECT "PATIENT_ID", "DATEOFBIRTH", "GENDER", "ADDRESS", "PHONE_NUMBER", "MEDICAL_HISTORY", "ALLERGIES", "BLOOD_TYPE", "FK_USERID", patient_description, "Pathogen_description", "NAME", "Age", "PAIN_RATE", "EMAIL"
      FROM public."PATIENT";
    `);

    res.status(200).json(results.rows);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the patient data.' });
  }
}
