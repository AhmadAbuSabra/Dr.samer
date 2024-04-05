// pages/api/addConsultation.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../utilities/db'; // Adjust the path according to where your db.ts is located

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { patient_id, consultation_notes, patient_Education, medication, appointment_id } = req.body;
      const createdAt = new Date().toISOString();

      const queryString = `
        INSERT INTO public.consultations(
          patient_id, consultation_notes, "patient_Education", created_at, medication, appointment_id)
        VALUES ($1, $2, $3, $4, $5, $6);
      `;

      const values = [patient_id, consultation_notes, patient_Education, createdAt, medication, appointment_id];

      await query(queryString, values);

      res.status(200).json({ message: 'Consultation added successfully' });
    } catch (error) {
      // Type guard to check if error is an instance of Error
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: 'Method not allowed' });
  }
}
