import { NextApiRequest, NextApiResponse } from 'next';
import * as db from '../../../utilities/db';

type User = {
  USERNAME: string;
  PASSWORD: string;
  ROLE_ENUM: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      const result = await db.query('SELECT * FROM "public"."USERS" WHERE "USERNAME" = $1', [username]);
      const user = result.rows[0] as User;

      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      if (password !== user.PASSWORD) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      return res.status(200).json({ message: user.ROLE_ENUM });
    } catch (error: unknown) {
      // Type guard to check if error is an instance of Error
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } else {
        return res.status(500).json({ error: 'An unexpected error occurred' });
      }
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
};
