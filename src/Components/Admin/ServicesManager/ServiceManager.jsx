'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const ServiceManager = () => {
  const [services, setServices] = useState([
    { id: 1, title: 'Web Development', description: 'Custom web applications tailored to your business needs.' },
    { id: 2, title: 'UI/UX Design', description: 'Intuitive and attractive designs that enhance user experience.' },
  ]);

  const [newService, setNewService] = useState({ title: '', description: '' });

  const handleAddService = () => {
    if (newService.title && newService.description) {
      setServices([...services, { id: Date.now(), ...newService }]);
      setNewService({ title: '', description: '' });
    }
  };

  const handleDeleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Services</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Service Title"
          className="w-full p-2 mb-2 border rounded"
          value={newService.title}
          onChange={(e) => setNewService({ ...newService, title: e.target.value })}
        />
        <textarea
          placeholder="Service Description"
          className="w-full p-2 mb-2 border rounded"
          value={newService.description}
          onChange={(e) => setNewService({ ...newService, description: e.target.value })}
        />
        <button
          onClick={handleAddService}
          className="bg-[#BE3144] text-white px-4 py-2 rounded flex items-center"
        >
          <FaPlus className="mr-2" /> Add Service
        </button>
      </div>
      <div className="space-y-4">
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white p-4 rounded shadow"
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
            <div className="mt-2">
              <button className="text-blue-500 mr-2"><FaEdit /></button>
              <button onClick={() => handleDeleteService(service.id)} className="text-red-500"><FaTrash /></button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceManager;
