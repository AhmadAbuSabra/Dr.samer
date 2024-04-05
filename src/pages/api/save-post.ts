// pages/api/save-post.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../utilities/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { title, content, image_base64 } = req.body;
        try {
            await query('INSERT INTO blog_posts (title, content, image_url) VALUES ($1, $2, $3)', [title, content, image_base64]);
            res.status(200).json({ message: 'Post saved' });
        } catch (err) {
            res.status(500).json({ error: 'Error saving post' });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
