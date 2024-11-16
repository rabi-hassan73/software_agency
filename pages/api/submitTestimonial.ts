// pages/api/submitTestimonials

import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

// Configure your database connection
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined, // Ensure port is a number
  waitForConnections: true,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, rating, testimonial } = req.body;

    try {
      const [result] = await db.execute(
        'INSERT INTO testimonials (name, email, rating, testimonial) VALUES (?, ?, ?, ?)',
        [name, email, rating, testimonial]
      );

      res.status(200).json({ message: 'Testimonial submitted successfully', id: result});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error submitting testimonial' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
