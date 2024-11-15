import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const [rows] = await db.query('SELECT * FROM testimonials ORDER BY created_at DESC');
      res.status(200).json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving testimonials' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
