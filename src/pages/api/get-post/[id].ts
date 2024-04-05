// pages/api/get-post/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../../utilities/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === 'GET') {
        try {
            const { rows } = await query('SELECT * FROM blog_posts WHERE id = $1', [id]);
            res.status(200).json(rows[0] || {});
        } catch (err) {
            res.status(500).json({ error: 'Error fetching post' });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
