import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

// Database connection
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const deleteTestimonialHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    const { id } = req.query;
    try {
      await db.query('DELETE FROM testimonials WHERE id = ?', [id]);
      res.status(200).json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      res.status(500).json({ message: 'Error deleting testimonial' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default deleteTestimonialHandler;
