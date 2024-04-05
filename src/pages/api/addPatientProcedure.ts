// pages/api/addPatientProcedure.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../utilities/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { patientId, drProcedureId, value, isCash,appointmentId } = req.body;
        try {
            const result = await query(`
                INSERT INTO PATIENT_PROCEDURE (PATIENT_ID, DR_PROCEDURE_ID, VALUE, IS_CASH,appointment_id)
                VALUES ($1, $2, $3, $4,$5) RETURNING *;
            `, [patientId, drProcedureId, value, isCash,appointmentId]);
            res.status(201).json(result.rows[0]);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
