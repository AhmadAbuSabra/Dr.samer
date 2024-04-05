import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../utilities/db'; // Adjust the path according to where your db.ts is located

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const patientId = req.query.patientId as string; // Retrieve patient ID from query parameters

            if (!patientId) {
                return res.status(400).json({ error: 'Patient ID is required' });
            }

            // Updated query string to include PAYMENT_METHOD and INSURANCE_COMPANY
            const queryString = `
                SELECT "APPOINTMENT_ID", "FK_DOCTORID", "FK_PATIENTID", "APPOINTMENT_TIME", "STATUS_ENUM", "CALL_LINK", "DESC", "PAYMENT_METHOD", "INSURANCE_COMPANY"
                FROM public."APPOINTMENTS"
                WHERE "FK_PATIENTID" = $1
            `;

            const result = await query(queryString, [patientId]);
            res.status(200).json(result.rows || []); // Ensures an array is returned
        } catch (error: unknown) {
            // Type guard to check if error is an instance of Error
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
