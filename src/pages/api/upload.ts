// pages/api/upload.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { query } from '../../../utilities/db'; // Adjust the import path as necessary

// Define custom types for formidable directly in the same file
declare module 'formidable' {
  export interface File {
    size: number;
    path: string;
    name: string;
    type: string;
    lastModifiedDate?: Date;
    originalFilename: string;
    filepath: string;
    newFilename?: string;
    mimetype: string;
  }

  export interface Files {
    [key: string]: File | File[];
  }

  export interface Fields {
    [key: string]: string | string[];
  }

  export class IncomingForm {
    public uploadDir: string;
    public keepExtensions: boolean;
    public multiples: boolean;
    public parse(req: any, callback: (err: Error | null, fields: Fields, files: Files) => void): void;
    constructor(options?: Partial<IncomingFormOptions>);
  }

  export interface IncomingFormOptions {
    uploadDir?: string;
    keepExtensions?: boolean;
    multiples?: boolean;
  }
}

// Since we're integrating types in the same file, continue using require for formidable due to its CommonJS nature
const formidable = require('formidable');

export const config = {
  api: {
    bodyParser: false,
  },
};

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end('Method Not Allowed');
//     return;
//   }

//   const form = new formidable.IncomingForm();
//   form.uploadDir = path.join(os.tmpdir(), 'uploads'); // Ensure this directory is writable
//   form.keepExtensions = true;
//   form.multiples = true;

//   form.parse(req, (err: Error | null, fields: any, files: any) => {
//     if (err) {
//       console.error('Formidable parsing error:', err);
//       res.status(500).json({ error: 'There was an error parsing the files' });
//       return;
//     }

//     // Example processing logic
//     console.log('Uploaded files:', files);
//     res.status(200).json({ message: 'Files uploaded successfully', files });
//   });
// }


//2  export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== 'POST') {
//       res.setHeader('Allow', ['POST']);
//       res.status(405).end('Method Not Allowed');
//       return;
//     }
  
//     const form = new formidable.IncomingForm();
//     // Set the directory for storing uploaded files
//     form.uploadDir = path.join(os.tmpdir()); // Use the system's temp directory
//     form.keepExtensions = true;
//     form.multiples = false; // Set based on your need, this example assumes single file upload
  
//     form.parse(req, async (err, fields, files) => {
//       if (err) {
//         console.error('Formidable parsing error:', err);
//         return res.status(500).json({ error: 'There was an error parsing the files' });
//       }
  
//       // Assuming a single file upload
//       const file = files.file;
//       // Move the file to a permanent directory
//       const uploadsDir = path.join(process.cwd(), 'uploads'); // Ensure this directory exists
//       const newFilePath = path.join(uploadsDir, file.originalFilename);
  
//       try {
//         fs.renameSync(file.filepath, newFilePath);
  
//         // Insert file metadata into the database
//         // Ensure you replace '1' with the actual `patient_id` from the form fields or other source
//         const patientId = fields.patient_id || '1'; // Placeholder for actual patient ID logic
//         const result = await query(
//           `INSERT INTO attachments (patient_id, file_name, file_type, file_size, upload_date)
//            VALUES ($1, $2, $3, $4, NOW()) RETURNING *;`,
//           [patientId, file.originalFilename, file.mimetype, file.size]
//         );
  
//         res.status(200).json({ message: 'File uploaded successfully', data: result.rows[0] });
//       } catch (error) {
//         console.error('Error processing file upload:', error);
//         res.status(500).json({ error: 'Failed to process file upload' });
//       }
//     });
//   }


  
// 3  export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== 'POST') {
//       res.setHeader('Allow', ['POST']);
//       res.status(405).end('Method Not Allowed');
//       return;
//     }
  
//     const form = new formidable.IncomingForm();
//     form.uploadDir = path.join(os.tmpdir()); // Use the system's temp directory
//     form.keepExtensions = true;
//     form.multiples = false; // Assuming single file upload for this example
  
//     form.parse(req, async (err, fields, files) => {
//       if (err) {
//         console.error('Formidable parsing error:', err);
//         return res.status(500).json({ error: 'There was an error parsing the files' });
//       }
  
//       // Safety check to ensure we have the file
//       if (!files.file) {
//         return res.status(400).json({ error: 'No file uploaded' });
//       }
  
//       // Assuming a single file upload
//       const file = files.file;
//       const uploadsDir = path.join(process.cwd(), 'uploads');
  
//       // Ensure the uploads directory exists
//       if (!fs.existsSync(uploadsDir)) {
//         fs.mkdirSync(uploadsDir);
//       }
  
//       const newFilePath = path.join(uploadsDir, file.originalFilename);
  
//       try {
//         fs.renameSync(file.filepath, newFilePath);
  
//         // Assuming 'patient_id' is sent in the form fields; adjust based on actual input
//         const patientId = fields.patient_id || '1'; // Placeholder for actual patient ID logic
//         const result = await query(
//           `INSERT INTO attachments (patient_id, file_name, file_type, file_size, upload_date)
//            VALUES ($1, $2, $3, $4, NOW()) RETURNING *;`,
//           [patientId, file.originalFilename, file.mimetype, file.size]
//         );
  
//         res.status(200).json({ message: 'File uploaded successfully', data: result.rows[0] });
//       } catch (error) {
//         console.error('Error processing file upload:', error);
//         res.status(500).json({ error: 'Failed to process file upload' });
//       }
//     });
//   }



export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
    return;
  }

  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(os.tmpdir()); // Temporary directory
  form.keepExtensions = true;
  form.multiples = true; // Adjust if expecting multiple files

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Formidable parsing error:', err);
      return res.status(500).json({ error: 'There was an error parsing the files' });
    }

    // Handle both single and multiple file uploads
    let uploadedFiles = files.file;
    if (!uploadedFiles) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    if (!Array.isArray(uploadedFiles)) {
      uploadedFiles = [uploadedFiles];
    }

    // Process each file
    uploadedFiles.forEach(async (file) => {
      const uploadsDir = path.join(process.cwd(), 'uploads');
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }
      const newFilePath = path.join(uploadsDir, file.originalFilename);

      try {
        fs.renameSync(file.filepath, newFilePath);

        // Assuming 'patient_id' is sent in the form fields
console.log('fields ');
console.log(fields);
console.log(fields.patientId );

      var patientId = fields.patientId || '1'; // Placeholder for actual patient ID logic
      if (Array.isArray(patientId)) {
        patientId = parseInt(patientId[0], 10);
      } else {
        patientId = parseInt(patientId, 10);
      }
    
      if (isNaN(patientId)) {
        return res.status(400).send('Invalid patientId');
      }

        const result = await query(
          `INSERT INTO attachments (patient_id, file_name, file_type, file_size, upload_date)
           VALUES ($1, $2, $3, $4, NOW()) RETURNING *;`,
          [patientId, file.originalFilename, file.mimetype, file.size]
        );

        res.status(200).json({ message: 'File uploaded successfully', data: result.rows[0] });
      } catch (error) {
        console.error('Error processing file upload:', error);
        res.status(500).json({ error: 'Failed to process file upload' });
      }
    });
  });
}

  

