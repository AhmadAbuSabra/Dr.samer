// pages/api/doctorProcedures.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../utilities/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const result = await query('SELECT ID, PROCEDURE_NAME, VALUE FROM DOCTOR_PROCEDURE');
        res.status(200).json(result.rows);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}
