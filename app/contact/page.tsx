"use client";

import ShowcaseNavbar from '@/components/showcase-navbar';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus('Email sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending message. Please try again.');
    }
  };
  return (
    <div><ShowcaseNavbar/>
    <div className="pt-24 absolute inset-0 -z-10 w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] flex justify-center items-center px-4">
      <div className="max-w-lg w-full border border-black h-auto md:40% px-6 md:px-8 py-5 md:mt-60 mt-24 rounded-lg">
        <h1 className="text-black font-bold from-accent-foreground text-xl md:text-2xl p-4 text-center mt-18
        ">Contact Us</h1>
        <form onSubmit={handleSubmit} className="text-black font-bold from-accent-foreground space-y-4">
          <label className="flex flex-col gap-y-2">
            Name:
            <input
              type="text"
              name="name"
              className="px-4 py-2 bg-gray-200 rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="flex flex-col gap-y-2">
            Email:
            <input
              type="email"
              name="email"
              className="px-4 py-2 bg-gray-200 rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="flex flex-col gap-y-2">
            Subject:
            <input
              type="text"
              name="subject"
              className="px-4 py-2 bg-gray-200 rounded"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>
          <label className="flex flex-col gap-y-2">
            Message:
            <textarea
              name="message"
              className="px-4 py-2 bg-gray-200 rounded"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button
            type="submit"
            className="w-full md:w-auto border px-4 bg-gray-500 text-white py-2 mt-4 rounded-lg hover:bg-gray-800"
          >
            Send
          </button>
        </form>
        {status && <p className="text-center mt-4">{status}</p>}
      </div>
    </div>
    </div>
  );
  
}
