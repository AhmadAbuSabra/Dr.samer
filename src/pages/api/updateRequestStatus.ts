// pages/api/updateRequestStatus.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../utilities/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { request, newStatus } = req.body;
            console.log(request);
            await query('UPDATE public.request SET status = $1 WHERE id = $2', [newStatus, request.id]);

            await query(
                `INSERT INTO public."PATIENT"(
                     "DATEOFBIRTH", "GENDER", "ADDRESS", "PHONE_NUMBER",
                    "MEDICAL_HISTORY", "ALLERGIES", "BLOOD_TYPE", "FK_USERID",
                    patient_description, "Pathogen_description", "NAME", "Age", "PAIN_RATE","EMAIL" 
                ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
                [
                     null, null, null, request.phone, null,
                    null, null, null, null, null,
                    request.name, null, null,request.email
                ]
            );

            res.status(200).json({ message: 'Status updated successfully' });
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
