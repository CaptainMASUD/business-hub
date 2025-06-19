import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLink, FaFileAlt, FaExclamationCircle, FaChartLine, FaSpinner } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const [messageCount, setMessageCount] = useState(0);
  const [linkCount, setLinkCount] = useState(0);
  const [fileCount, setFileCount] = useState(0);
  const [missingLinks, setMissingLinks] = useState(0);
  const [missingFiles, setMissingFiles] = useState(0);
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://najint-api.vercel.app/api/viewcontacts');
        const messages = response.data;

        setMessageCount(messages.length);

        let totalLinks = 0;
        let totalFiles = 0;
        let totalMissingLinks = 0;
        let messagesWithFiles = 0;

        messages.forEach((msg) => {
          const linksCount = Array.isArray(msg.links) ? msg.links.length : msg.links ? 1 : 0;
          const filesCount = msg.files && Array.isArray(msg.files) ? msg.files.length : 0;

          totalLinks += linksCount;
          totalFiles += filesCount;

          if (linksCount === 0) totalMissingLinks++;
          if (filesCount > 0) messagesWithFiles++;
        });

        setLinkCount(totalLinks);
        setFileCount(totalFiles);
        setMissingLinks(totalMissingLinks);
        setMissingFiles(messages.length - messagesWithFiles);

        const formattedData = messages.map((msg) => {
          const linksCount = Array.isArray(msg.links) ? msg.links.length : msg.links ? 1 : 0;
          const filesCount = msg.files && Array.isArray(msg.files) ? msg.files.length : 0;

          return {
            time: new Date(msg.createdAt).toLocaleDateString(),
            links: linksCount,
            files: filesCount,
          };
        });

        const aggregatedData = formattedData.reduce((acc, item) => {
          const existing = acc.find((data) => data.time === item.time);
          if (existing) {
            existing.links += item.links;
            existing.files += item.files;
          } else {
            acc.push(item);
          }
          return acc;
        }, []);

        setChartData(aggregatedData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Unable to fetch data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const StatCard = ({ icon: Icon, title, value, subValue, color, valueColor }) => (
    <motion.div
      className={`bg-white shadow-lg rounded-2xl p-6 overflow-hidden relative`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`absolute top-0 left-0 w-full h-1 ${color}`} />
      <div className="relative z-10 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <div className={`text-2xl ${color}`}>
            <Icon />
          </div>
        </div>
        <p className={`text-4xl font-bold ${valueColor || color} mb-2`}>
          {value}
        </p>
        {subValue && (
          <p className="text-sm text-gray-600">
            {subValue.label}: <span className="font-semibold text-red-500">{subValue.value}</span>
          </p>
        )}
      </div>
    </motion.div>
  );

  const TabButton = ({ label, isActive, onClick }) => (
    <button
      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
        isActive
          ? 'bg-[#BE3144] text-white shadow-lg'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#BE3144] mb-8">
          Admin Dashboard
        </h1>

        <div className="mb-8 flex space-x-4 bg-white p-2 rounded-full shadow-md">
          <TabButton
            label="Overview"
            isActive={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
          />
          <TabButton
            label="Analytics"
            isActive={activeTab === 'analytics'}
            onClick={() => setActiveTab('analytics')}
          />
        </div>

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center h-64"
            >
              <FaSpinner className="animate-spin text-4xl text-[#BE3144]" />
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-red-100 border-l-4 border-[#BE3144] text-[#BE3144] p-4 rounded-lg shadow-md"
            >
              <p className="font-bold">Error</p>
              <p>{error}</p>
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <StatCard
                    icon={FaEnvelope}
                    title="Messages"
                    value={messageCount}
                    color="text-[#BE3144]"
                    valueColor="text-[#BE3144]"
                  />
                  <StatCard
                    icon={FaLink}
                    title="Links"
                    value={linkCount}
                    subValue={{ label: "Messages without links", value: missingLinks }}
                    color="text-[#4A89DC]"
                  />
                  <StatCard
                    icon={FaFileAlt}
                    title="Files"
                    value={fileCount}
                    subValue={{ label: "Messages without files", value: missingFiles }}
                    color="text-[#37BC9B]"
                  />
                  <StatCard
                    icon={FaExclamationCircle}
                    title="Missing Data"
                    value={`${missingLinks + missingFiles} total`}
                    subValue={{
                      label: "Not submitted",
                      value: `${missingLinks} links, ${missingFiles} files`
                    }}
                    color="text-[#E9573F]"
                  />
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="bg-white shadow-lg rounded-2xl p-6 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-2 bg-[#BE3144]" />
                  <div className="relative z-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Activity Overview</h2>
                    <ResponsiveContainer width="100%" height={400}>
                      <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="time" stroke="#888" />
                        <YAxis stroke="#888" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            border: 'none',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="links"
                          stroke="#4A89DC"
                          strokeWidth={3}
                          dot={{ r: 6, fill: '#4A89DC' }}
                          activeDot={{ r: 8, fill: '#4A89DC' }}
                          animationDuration={1000}
                        />
                        <Line
                          type="monotone"
                          dataKey="files"
                          stroke="#37BC9B"
                          strokeWidth={3}
                          dot={{ r: 6, fill: '#37BC9B' }}
                          activeDot={{ r: 8, fill: '#37BC9B' }}
                          animationDuration={1500}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminDashboard;

