"use client"; // Add this line to mark the component as a Client Component

import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Blessed Tonia Agro Store', // Replace with the actual recipient name or use a state variable
      from_name: name,
      message: message,
      reply_to: email,
    };

    emailjs.send('service_ln6z889', 'template_56x8uca', templateParams, 'GJpgVblxSZpZKQjQf')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Optionally reset the form
        setName('');
        setEmail('');
        setMessage('');
      }, (err) => {
        console.error('Failed to send email. Error:', err);
      });
  };

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={sendEmail}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Your Message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit" // Change to submit
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
