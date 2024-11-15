import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowcaseNavbar from './showcase-navbar';

interface Testimonial {
  id: number;
  name: string;
  email: string;
  rating: number;
  testimonial: string;
  created_at: string;
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    testimonial: '',
  });

  // Fetch testimonials from the API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('/api/getTestimonials');
        setTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/submitTestimonial', formData);
      setTestimonials([response.data, ...testimonials]); // Add new testimonial to the list
      setFormData({ name: '', email: '', rating: 5, testimonial: '' }); // Reset form
    } catch (error) {
      console.error('Error submitting testimonial:', error);
    }
  };

  return (
    <div>
      <ShowcaseNavbar/>
    
    <div className="max-w-lg mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Submit a Testimonial</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Rating</label>
          <input
            type="number"
            min="1"
            max="5"
            value={formData.rating}
            onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Testimonial</label>
          <textarea
            value={formData.testimonial}
            onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Submit
        </button>
      </form>

      <h3 className="text-xl font-bold mt-8 mb-4">Testimonials</h3>
      <ul className="space-y-4">
        {testimonials.map((t) => (
          <li key={t.id} className="p-4 bg-gray-100 rounded-lg">
            <p className="font-semibold">{t.name} - {t.rating} Stars</p>
            <p>{t.testimonial}</p>
            <p className="text-sm text-gray-500">{new Date(t.created_at).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Testimonials;
