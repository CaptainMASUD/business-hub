import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const FooterManager = () => {
  const [footerItems, setFooterItems] = useState([
    { id: 1, title: 'About Us', link: '/about' },
    { id: 2, title: 'Services', link: '/services' },
    { id: 3, title: 'Contact', link: '/contact' },
  ]);

  const [newItem, setNewItem] = useState({ title: '', link: '' });

  const handleAddItem = () => {
    if (newItem.title && newItem.link) {
      setFooterItems([...footerItems, { id: Date.now(), ...newItem }]);
      setNewItem({ title: '', link: '' });
    }
  };

  const handleDeleteItem = (id) => {
    setFooterItems(footerItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Footer Items</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <input
          type="text"
          placeholder="Item Title"
          value={newItem.title}
          onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          placeholder="Item Link"
          value={newItem.link}
          onChange={(e) => setNewItem({ ...newItem, link: e.target.value })}
          className="w-full p-2 mb-2 border rounded"
        />
        <button
          onClick={handleAddItem}
          className="bg-[#BE3144] text-white px-4 py-2 rounded flex items-center"
        >
          <FaPlus className="mr-2" /> Add Footer Item
        </button>
      </motion.div>
      <motion.ul className="space-y-4">
        {footerItems.map((item) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.link}</p>
            </div>
            <div>
              <button className="text-blue-500 mr-2">
                <FaEdit />
              </button>
              <button
                onClick={() => handleDeleteItem(item.id)}
                className="text-red-500"
              >
                <FaTrash />
              </button>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default FooterManager;