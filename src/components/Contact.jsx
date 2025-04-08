import React, { useState } from 'react';
import { FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section data-aos="fade-up" data-aos-delay="250" id="contact" className="py-20 px-4 bg-gradient-to-b ">
      <div className="max-w-lg mx-auto relative">
        {/* Header with subtle animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Get In <span className='text-red-600'>
            Touch</span> </h2>
          <p className="text-gray-600">Have a question or want to work together?</p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-200/85 p-8 rounded-xl shadow-md border border-gray-100"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <motion.div whileHover={{ scale: 1.01 }}>
              <label className="block text-gray-700 mb-2">Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2
                   focus:ring-red-400 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div whileHover={{ scale: 1.01 }}>
              <label className="block text-gray-700 mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-400" />
                </div>
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2
                   focus:ring-red-400 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </motion.div>

            {/* Message Field */}
            <motion.div whileHover={{ scale: 1.01 }}>
              <label className="block text-gray-700 mb-2">Message</label>
              <div className="relative">
                <div className="absolute top-3 left-3">
                  <FiMessageSquare className="text-gray-400" />
                </div>
                <textarea
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2
                   focus:ring-red-400 focus:border-transparent"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className={`w-full py-3 px-6 bg-red-500 text-white rounded-lg font-medium 
                ${isSubmitting ? 'opacity-80' : 'hover:bg-red-600'} transition-all`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>

        {/* Alternative Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-gray-800"
        >
          <p>Or email me directly at: <span className="text-gray-950 font-bold">contact@example.com</span></p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;