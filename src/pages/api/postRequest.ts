// pages/api/postRequest.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../utilities/db'; // Adjust the path according to where your db.ts is located

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, phone, email, status, description } = req.body;
        try {
            const queryString = 'INSERT INTO REQUEST (NAME, PHONE, EMAIL, STATUS, DESCRIPTION) VALUES ($1, $2, $3, $4, $5)';
            await query(queryString, [name, phone, email, status, description]);
            res.status(200).json({ message: 'Request added successfully' });
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

