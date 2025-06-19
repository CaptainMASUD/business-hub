import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import { FiAirplay } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Redux/UserSlice/userSlice';
import { useNavigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import ContactMessagesManager from './ContactMessage/ContactMessages';
import CookieThreatChecker from './CookieThreatChecker/CookieThreatChecker';
import PostNews from "./News/Post News/PostNews";
import ShowNews from "./News/Show News/ShowNews";
import { MdSecurity } from "react-icons/md";
import { FaSignsPost } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa6";

const AdminPanel = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const [showLogoutModal, setShowLogoutModal] = useState(false); // State to manage modal visibility

  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const renderComponent = () => {
    switch (activeComponent) {
      case 'messages':
        return <ContactMessagesManager />;
      case 'security':
        return <CookieThreatChecker />;
      case 'postNews':
        return <PostNews />;
      case 'showNews':
        return <ShowNews />;
      default:
        return <AdminDashboard />;
    }
  };

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-xl text-center"
        >
          <h2 className="text-3xl font-bold text-red-600">Restricted Access</h2>
          <p className="mt-4 text-gray-600">You must be logged in to access this page.</p>
        </motion.div>
      </div>
    );
  }

  // Handle logout action
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  // Show modal on logout click
  const confirmLogout = () => {
    setShowLogoutModal(true);
  };

  const cancelLogout = () => {
    setShowLogoutModal(false); // Close modal if user clicks No
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar for larger screens */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        className="hidden md:flex flex-col w-64 bg-[#1c1b1b] text-white"
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold flex">
            <FiAirplay className="mr-2 mt-1" /> Admin Panel
          </h2>
        </div>
        <nav className="flex-1">
          <ul>
            {[{ name: 'Dashboard', icon: FaHome, id: 'dashboard' }, { name: 'Messages', icon: FaEnvelope, id: 'messages' }, { name: 'Security', icon: MdSecurity, id: 'security' }].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveComponent(item.id)}
                  className={`flex items-center w-full px-4 py-2 text-sm hover:bg-[#BE3144] transition-colors ${activeComponent === item.id ? 'bg-[#BE3144]' : ''}`}
                >
                  <item.icon className="mr-2" />
                  {item.name}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => setActiveComponent('postNews')}
                className={`flex items-center w-full px-4 py-2 text-sm hover:bg-[#BE3144] transition-colors ${activeComponent === 'postNews' ? 'bg-[#BE3144]' : ''}`}
              >
                <FaSignsPost className="mr-2" /> Post News
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveComponent('showNews')}
                className={`flex items-center w-full px-4 py-2 text-sm hover:bg-[#BE3144] transition-colors ${activeComponent === 'showNews' ? 'bg-[#BE3144]' : ''}`}
              >
                <FaNewspaper className="mr-2" /> Show News
              </button>
            </li>
          </ul>
        </nav>
        <div className="p-4">
          <button onClick={confirmLogout} className="flex items-center text-sm hover:text-[#BE3144]">
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </motion.aside>

      {/* Top navigation for mobile screens */}
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="md:hidden bg-[#1c1b1b] text-white p-4">
        <select
          value={activeComponent}
          onChange={(e) => setActiveComponent(e.target.value)}
          className="w-full bg-[#1c1b1b] text-white border border-gray-700 rounded p-2"
        >
          <option value="dashboard">Dashboard</option>
          <option value="messages">Messages</option>
          <option value="security">Security</option>
          <option value="postNews">Post News</option>
          <option value="showNews">Show News</option>
        </select>
        
        {/* Add Logout button for mobile */}
        <div className="mt-4">
          <button onClick={confirmLogout} className="flex items-center text-sm text-white hover:text-[#BE3144] w-full">
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </motion.nav>

      {/* Main content area */}
      <main className="flex-1 p-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {renderComponent()}
        </motion.div>
      </main>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-xl p-6 w-80"
          >
            <h3 className="text-xl font-semibold text-gray-700">Are you sure you want to log out?</h3>
            <div className="mt-4 flex justify-between">
              <button
                onClick={cancelLogout}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
              >
                No
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Yes
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
