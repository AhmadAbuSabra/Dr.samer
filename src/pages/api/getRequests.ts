// pages/api/getRequests.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../utilities/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const status = 'جديد'; // You can also use req.query or req.body to get this value dynamically
        const result = await query('SELECT id, name, phone, email, status, description FROM public.request WHERE status = $1', [status]);
        res.status(200).json(result.rows);
    } catch (error: unknown) {
        // Type guard to check if error is an instance of Error
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}
