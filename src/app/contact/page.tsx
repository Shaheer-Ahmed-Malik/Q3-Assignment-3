import React from 'react';

const ContactPage = () => {
  return (

    <div className="p-8 text-center">

      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-lg">
        Have questions? Reach out to us at <a href="mailto:info@example.com" className="text-red-400 underline">info-rodem@lo.com</a>
      </p>
      <form className="mt-6 space-y-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your name"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border border-gray-300 rounded"
          rows={4}
          required
        />
        <button
          type="submit"
          className="w-full p-2 font-semibold border rounded bg-red-700 transition-all duration-500 hover:bg-red-900 hover:text-white hover:scale-105"
        >
          Send Message
        </button>




      </form>

    </div>
  );
};

export default ContactPage;
