import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../utilities/db'; // Adjust the path according to where your db.ts is located

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST' || req.method === 'PUT') {
        const { appointmentId, doctorId, FK_PATIENTID, APPOINTMENT_TIME, statusEnum, CALL_LINK, DESC, PAYMENT_METHOD, INSURANCE_COMPANY } = req.body;

        try {
            let queryString = '';
            let queryParams = [];

            if (req.method === 'POST') {
                queryString = 'INSERT INTO public."APPOINTMENTS"("FK_DOCTORID", "FK_PATIENTID", "APPOINTMENT_TIME", "STATUS_ENUM", "CALL_LINK", "DESC", "PAYMENT_METHOD", "INSURANCE_COMPANY") VALUES($1, $2, $3, $4, $5, $6, $7, $8)';
                queryParams = [doctorId, FK_PATIENTID, APPOINTMENT_TIME, statusEnum, CALL_LINK, DESC, PAYMENT_METHOD, PAYMENT_METHOD === 'insurance' ? INSURANCE_COMPANY : null];
            } else { // PUT
                queryString = 'UPDATE public."APPOINTMENTS" SET "FK_DOCTORID" = $1, "FK_PATIENTID" = $2, "APPOINTMENT_TIME" = $3, "STATUS_ENUM" = $4, "CALL_LINK" = $5, "DESC" = $6, "PAYMENT_METHOD" = $7, "INSURANCE_COMPANY" = $8 WHERE "APPOINTMENT_ID" = $9';
                queryParams = [doctorId, FK_PATIENTID, APPOINTMENT_TIME, statusEnum, CALL_LINK, DESC, PAYMENT_METHOD, PAYMENT_METHOD === 'insurance' ? INSURANCE_COMPANY : null, appointmentId];
            }

            await query(queryString, queryParams);
            res.status(200).json({ message: req.method === 'POST' ? 'Appointment added successfully' : 'Appointment updated successfully' });
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
