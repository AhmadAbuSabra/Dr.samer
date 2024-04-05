// pages/api/download/[filename].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { filename } = req.query;

  // Define the path to your files
  const filePath = path.join(process.cwd(), 'uploads', Array.isArray(filename) ? filename[0] : filename);
  
  // Check if file exists
  if (fs.existsSync(filePath)) {
    // Set the correct headers to indicate a file download
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    
    // Stream the file
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  } else {
    res.status(404).json({ error: 'File not found' });
  }
}
