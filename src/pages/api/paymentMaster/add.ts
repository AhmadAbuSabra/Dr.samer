import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../../utilities/db'; // Adjust the path according to where your db.ts is located

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { patient_id, appointment_id, total_amount, status, created_date, model_number, approval_number } = req.body;

      const queryString = `
        INSERT INTO payment_master(patient_id, appointment_id, total_amount, status, created_date, model_number, approval_number)
        VALUES ($1, $2, $3, $4, $5, $6, $7);
      `;

      const values = [patient_id, appointment_id, total_amount, status, created_date, model_number, approval_number];

      await query(queryString, values);

      res.status(200).json({ message: 'Payment Master record added successfully' });
    } catch (error) {
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
