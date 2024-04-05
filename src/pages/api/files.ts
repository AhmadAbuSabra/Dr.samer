// pages/api/files.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../utilities/db'; // Adjust the import path as necessary

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).end('Method Not Allowed');
    return;
  }

  // Extract patient_id from query parameters
  const { patient_id } = req.query;

  // Validate patient_id is provided and is a number
  if (!patient_id || Array.isArray(patient_id) || isNaN(+patient_id)) {
    res.status(400).json({ error: 'Invalid or missing patient_id' });
    return;
  }

  try {
    // Adjust the SQL query to filter by patient_id
    const result = await query(
      `SELECT * FROM attachments WHERE patient_id = $1;`, 
      [patient_id]
    );

    // Check if we got any results
    if (result.rows.length > 0) {
      res.status(200).json(result.rows);
    } else {
      res.status(404).json({ message: 'No files found for the specified patient_id' });
    }
  } catch (error) {
    console.error('Database fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch files' });
  }
}
