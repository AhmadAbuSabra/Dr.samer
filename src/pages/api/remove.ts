import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { query } from '../../../utilities/db'; // Adjust the path according to where your db.ts is located

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const { id, fileName } = req.body;

    try {
      // Delete file metadata from the database
      const deleteQuery = 'DELETE FROM attachments WHERE id = $1 RETURNING *';
      const dbResponse = await query(deleteQuery, [id]);

      if (dbResponse.rows.length > 0) {
        // File metadata deleted successfully, now delete the file from filesystem
        const filePath = `./uploads/${fileName}`;
        fs.unlink(filePath, (err) => {
          if (err) {
            res.status(500).json({ error: 'There was an error deleting the file' });
          } else {
            res.status(200).json({ message: 'File removed successfully' });
          }
        });
      } else {
        res.status(404).json({ message: 'File not found in the database' });
      }
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
