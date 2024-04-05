// pages/api/get-posts.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../utilities/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const { rows } = await query('SELECT * FROM blog_posts ORDER BY id DESC');
            res.status(200).json(rows);
        } catch (err) {
            res.status(500).json({ error: 'Error fetching posts' });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
