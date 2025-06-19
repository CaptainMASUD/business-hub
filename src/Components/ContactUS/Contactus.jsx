import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperclip, FaLink, FaFilePdf, FaImage, FaFileAlt } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    files: [],
    links: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Modal for success message

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file selection and check the file size
  const handleFileChange = (e) => {
    const selectedFiles = [...e.target.files];
    for (let file of selectedFiles) {
      if (file.size > 3 * 1024 * 1024) { // If file size exceeds 3MB
        setShowModal(true);
        return; // Prevent file selection if size is greater than 3MB
      }
    }
    setFormData({ ...formData, files: selectedFiles });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Name, Email, and Message are required.');
      return;
    }

    // Prepare form data for submission
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('message', formData.message);
    data.append('links', formData.links);

    // Append files to FormData
    for (let i = 0; i < formData.files.length; i++) {
      data.append('files', formData.files[i]);
    }

    setLoading(true);  // Start loading state

    try {
      // Send POST request to the backend API
      const response = await axios.post('https://najint-api.vercel.app/api/contacts', data, {
        headers: {
          'Content-Type': 'multipart/form-data',  // Ensure correct content type for file uploads
        },
      });

      // On success, show the success modal
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', phone: '', message: '', files: [], links: '' });  // Reset form
    } catch (error) {
      setErrorMessage('There was an error sending your message. Please try again later.');
    } finally {
      setLoading(false);  // Stop loading state
    }
  };

  // Handle closing the modals
  const handleCloseModal = () => {
    setShowModal(false);
    setShowSuccessModal(false); // Close success modal
  };

  // Function to determine the file icon based on file extension
  const getFileIcon = (file) => {
    const fileExtension = file.name.split('.').pop().toLowerCase();
    
    if (fileExtension === 'pdf') {
      return <FaFilePdf className="text-red-600" />;
    } else if (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png' || fileExtension === 'gif') {
      return <FaImage className="text-blue-600" />;
    } else if (fileExtension === 'txt' || fileExtension === 'doc' || fileExtension === 'docx') {
      return <FaFileAlt className="text-green-600" />;
    } else {
      return <FaPaperclip className="text-gray-600" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-12 text-center text-[#872341]"
      >
        Contact Us
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-[#872341]">Get in Touch</h2>
          <p className="text-xl mb-8 text-gray-600">
            We'd love to hear from you. Please fill out the form below or use our contact information to reach us.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className='font-bold text-md underline text-gray-800'>Bangladesh Office</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-[#872341] mr-4 text-2xl" />
              <span>Dhulipara , Cumilla , BD</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-[#872341] mr-4 text-2xl" />
              <span>+880 1744 416607</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-[#872341] mr-4 text-2xl" />
              <span>najint@hotmail.com</span>
            </div>
          </div>
          <div className="space-y-4 mt-10">
            <div className="flex items-center">
              <span className='font-bold text-md underline text-gray-800'>Head Office</span>
            </div>
            <div className="flex items-center">
              <span>CBD Building, 1st Floor near Sharaf DG Metro Exit-1</span>
            </div>
            <div className="flex items-center">
              <span>Al Mankhool , Dubai, UAE</span>
            </div>
           
          </div>
        </motion.div>

        <motion.form
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {errorMessage && <div className="text-red-600 mb-4">{errorMessage}</div>}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                id="name"
                className="focus:ring-[#872341] focus:border-[#872341] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="focus:ring-[#872341] focus:border-[#872341] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhone className="text-gray-400" />
              </div>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="focus:ring-[#872341] focus:border-[#872341] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="+1 234 567 8900"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="shadow-sm focus:ring-[#872341] focus:border-[#872341] mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="files" className="block text-sm font-medium text-gray-700">Attach Files</label>
            <div className="mt-1 flex items-center">
              <label htmlFor="files" className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#872341]">
                <FaPaperclip className="inline-block mr-2" />
                Choose files
              </label>
              <input
                type="file"
                name="files"
                id="files"
                className="sr-only"
                multiple
                onChange={handleFileChange}
              />
              <div className="ml-3 text-sm text-gray-500">
                {formData.files.length > 0 ? (
                  <div className="flex items-center space-x-2">
                    {formData.files.map((file, index) => (
                      <div key={index} className="flex items-center">
                        {getFileIcon(file)}
                        <span className="ml-2 text-gray-700">{file.name}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  'No file chosen'
                )}
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="links" className="block text-sm font-medium text-gray-700">Links</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLink className="text-gray-400" />
              </div>
              <input
                type="url"
                name="links"
                id="links"
                className="focus:ring-[#872341] focus:border-[#872341] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="https://example.com"
                value={formData.links}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex duration-300 justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#872341] hover:bg-[#9E2234] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#872341]"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </div>
        </motion.form>
      </div>

      {/* Modal for file size warning */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
            <h2 className="text-xl text-red-500 font-bold">File size exceeds limit!</h2>
            <p className="text-sm text-gray-700 mt-2">Please upload a file within 3MB.</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="bg-[#872341] text-white py-2 px-4 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
            <h2 className="text-xl text-green-600 font-bold">Success!</h2>
            <p className="text-sm text-gray-700 mt-2">Your message has been sent successfully!</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="bg-[#872341] text-white py-2 px-4 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Contact;
