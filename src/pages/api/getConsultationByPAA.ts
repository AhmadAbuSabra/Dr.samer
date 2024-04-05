import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../utilities/db'; // Adjust the path according to where your db.ts is located

export default async function getConsultationByPAA(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      // Extract query parameters (e.g., patientId, appointmentId)
      const { patientId, appointmentId } = req.query;

      // Define a SQL query to fetch consultation data
      const queryString = `
        SELECT * FROM public.consultations
        WHERE patient_id = $1 AND appointment_id = $2;
      `;

      // Execute the query with provided parameters
      const result = await query(queryString, [patientId, appointmentId]);

      // Send the fetched data as a response
      res.status(200).json(result.rows);
    } catch (error) {
      // Type guard to check if error is an instance of Error
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: 'Method not allowed' });
  }
}
