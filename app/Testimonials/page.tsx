'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import gravatar from 'gravatar';
import ShowcaseNavbar from '@/components/showcase-navbar';
import Image from 'next/image';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/submitTestimonial', formData);
      setTestimonials([response.data, ...testimonials]);
      setFormData({ name: '', email: '', rating: 5, testimonial: '' });
    } catch (error) {
      console.error('Error submitting testimonial:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/api/deleteTestimonial/${id}`);
      setTestimonials(testimonials.filter(t => t.id !== id));
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <ShowcaseNavbar />

      <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Submit a Testimonial</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Testimonial</label>
            <textarea
              value={formData.testimonial}
              onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600">
            Submit
          </button>
        </form>

        <h3 className="text-xl font-bold mt-8 mb-4">Testimonials</h3>
        <ul className="space-y-4">
          {testimonials.map((t) => {
            const gravatarUrl = gravatar.url(t.email, { s: '50', d: 'identicon' }, true);
            
            return (
              <li key={t.id} className="p-4 bg-gray-100 rounded-lg flex items-start">
                <Image
                  src={gravatarUrl}
                  alt={`${t.name}'s profile`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-lg">
                      {t.name} - {t.rating} Stars
                    </p>
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                  <div className="text-yellow-500">
                    {[...Array(t.rating)].map((_, index) => (
                      <FontAwesomeIcon key={index} icon={faStar} />
                    ))}
                  </div>
                  <p className="mt-2 text-gray-800">{t.testimonial}</p>
                  <p className="text-sm text-gray-500">{new Date(t.created_at).toLocaleDateString()}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
