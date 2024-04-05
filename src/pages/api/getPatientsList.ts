// pages/api/getPatientsList.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../utilities/db';

export default async function getPatientsList(req: NextApiRequest, res: NextApiResponse) {
  try {
    const searchText = (req.query.search as string) || '';
    const results = await query(
      `SELECT "PATIENT_ID", "NAME", "PHONE_NUMBER" FROM public."PATIENT"
       WHERE "NAME" ILIKE $1 OR "PHONE_NUMBER" ILIKE $1`,
      [`%${searchText}%`]
    );
    res.status(200).json(results.rows);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
}
