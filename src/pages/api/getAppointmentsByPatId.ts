import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../utilities/db';

export default async function getAppointmentsByPatId(req: NextApiRequest, res: NextApiResponse) {
  try {
    const patientId = req.query.patientId as string;

    const results = await query(
      `SELECT "APPOINTMENT_ID", "FK_DOCTORID", "FK_PATIENTID", "APPOINTMENT_TIME", "STATUS_ENUM", "CALL_LINK", "DESC", "PAYMENT_METHOD", "INSURANCE_COMPANY"
       FROM public."APPOINTMENTS"
       WHERE "FK_PATIENTID" = $1`,
      [patientId]
    );

    res.status(200).json(results.rows);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
}
