import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../../utilities/db';  // Adjust the path according to where your db.ts is located

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'PUT') {
    try {
      const { consultation_notes, patient_Education, medication } = req.body;
      const consultationId = req.query.consultation_id; // Assuming you're passing the consultation ID in the URL

      console.log(req.query.consultation_id);
      console.log(patient_Education);
      const updateString = `
        UPDATE public.consultations
        SET consultation_notes = $1, "patient_Education" = $2, medication = $3
        WHERE consultation_id = $4;
      `;

      const values = [consultation_notes, patient_Education, medication, consultationId];

      await query(updateString, values);

      res.status(200).json({ message: 'Consultation updated successfully' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).json({ message: 'Method not allowed' });
  }
}
