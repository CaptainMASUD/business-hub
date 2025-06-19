import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaEnvelope, FaUser, FaPhone, FaFileImage, FaFilePdf, FaFileAlt, FaFileWord, 
  FaFileExcel, FaLink, FaFolder, FaSearch, FaDownload, FaTimes, FaCheckCircle,
  FaChevronDown, FaChevronUp, FaMobile, FaSync, FaClock, FaBolt
} from 'react-icons/fa';
import { formatDistanceToNow, isWithinInterval, subHours } from 'date-fns';

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showRecent, setShowRecent] = useState(false);
  const [showLatest, setShowLatest] = useState(false);

  const fetchMessages = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://najint-api.vercel.app/api/viewcontacts', {
        timeout: 10000 // 10 seconds timeout
      });
      const sortedMessages = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setMessages(sortedMessages);
    } catch (err) {
      console.error('Error fetching contact messages:', err);
      setError('Failed to load messages. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const filteredMessages = useMemo(() => {
    let filtered = messages;

    if (showRecent) {
      const twentyFourHoursAgo = subHours(new Date(), 24);
      filtered = filtered.filter(message => 
        isWithinInterval(new Date(message.createdAt), { start: twentyFourHoursAgo, end: new Date() })
      );
    }

    if (showLatest) {
      filtered = [filtered[0]].filter(Boolean);
    }

    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      filtered = filtered.filter((message) => 
        message.name.toLowerCase().includes(searchLower) ||
        message.email.toLowerCase().includes(searchLower) ||
        message.message.toLowerCase().includes(searchLower) ||
        (message.phone && message.phone.includes(searchQuery))
      );
    }

    return filtered;
  }, [messages, searchQuery, showRecent, showLatest]);

  const handleFileClick = useCallback((file) => {
    setModalContent({ type: 'file', file });
  }, []);

  const closeModal = useCallback(() => {
    setModalContent(null);
  }, []);

  const getFileIcon = useCallback((extension) => {
    switch (extension.toLowerCase()) {
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return <FaFileImage className="text-blue-500" />;
      case 'pdf':
        return <FaFilePdf className="text-red-500" />;
      case 'doc':
      case 'docx':
        return <FaFileWord className="text-blue-700" />;
      case 'xls':
      case 'xlsx':
        return <FaFileExcel className="text-green-500" />;
      default:
        return <FaFileAlt className="text-gray-500" />;
    }
  }, []);

  const getPhoneLabel = useCallback((phone) => {
    if (!phone) return { label: 'N/A', color: 'gray' };
    if (phone.startsWith('018')) return { label: 'Robi', color: 'red' };
    if (phone.startsWith('017')) return { label: 'GP', color: 'blue' };
    if (phone.startsWith('019')) return { label: 'Banglalink', color: 'orange' };
    if (phone.startsWith('016')) return { label: 'Airtel', color: 'red' };
    return { label: 'Other', color: 'blue' };
  }, []);

  const MessageItem = React.memo(({ message }) => {
    const [showFiles, setShowFiles] = useState(false);
    const [showLinks, setShowLinks] = useState(false);
    const phoneInfo = getPhoneLabel(message.phone);

    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white p-6 rounded-lg shadow-lg border-l-8 border-[#BE3144] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">{message.name}</h3>
          </div>
          <span className="text-sm text-gray-500">
            {formatDistanceToNow(new Date(message.createdAt), { addSuffix: true })}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <InfoItem icon={<FaEnvelope />} label="Email" value={message.email} />
          <InfoItem 
            icon={<FaMobile />} 
            label="Phone" 
            value={
              <span className="flex items-center">
                {message.phone || 'N/A'}
                <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full bg-${phoneInfo.color}-100 text-${phoneInfo.color}-800`}>
                  {phoneInfo.label}
                </span>
              </span>
            } 
          />
        </div>

        <div className="mb-4">
          <label htmlFor={`message-${message._id}`} className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id={`message-${message._id}`}
            value={message.message}
            readOnly
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none bg-gray-50 resize-none"
            rows={4}
          />
        </div>

        {message.files && message.files.length > 0 ? (
          <div className="mb-4">
            <button
              onClick={() => setShowFiles(!showFiles)}
              className="flex items-center text-[#BE3144] hover:underline"
              aria-expanded={showFiles}
              aria-controls={`files-${message._id}`}
            >
              <FaFolder className="mr-2" />
              Files
              {showFiles ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
            </button>
            {showFiles && (
              <FileList 
                files={message.files} 
                onFileClick={handleFileClick} 
                getFileIcon={getFileIcon}
                id={`files-${message._id}`}
              />
            )}
          </div>
        ) : (
          <div className="mb-4 text-gray-500">
            <FaFolder className="inline-block mr-2" />
            No files provided by the user
          </div>
        )}

        {message.links ? (
          <div className="mb-4">
            <button
              onClick={() => setShowLinks(!showLinks)}
              className="flex items-center text-[#BE3144] hover:underline"
              aria-expanded={showLinks}
              aria-controls={`links-${message._id}`}
            >
              <FaLink className="mr-2" />
              Links
              {showLinks ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
            </button>
            {showLinks && <LinkList links={message.links} id={`links-${message._id}`} />}
          </div>
        ) : (
          <div className="mb-4 text-gray-500">
            <FaLink className="inline-block mr-2" />
            No links provided by the user
          </div>
        )}
      </motion.div>
    );
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gradient-to-b from-gray-100 to-white min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 border-b-4 border-[#BE3144] pb-4">Contact Messages</h2>

      <div className="mb-6 flex flex-wrap justify-between items-center">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <FilterButton
            icon={<FaClock />}
            label="Recent (24h)"
            isActive={showRecent}
            onClick={() => {
              setShowRecent(!showRecent);
              setShowLatest(false);
            }}
          />
          <FilterButton
            icon={<FaBolt />}
            label="Latest"
            isActive={showLatest}
            onClick={() => {
              setShowLatest(!showLatest);
              setShowRecent(false);
            }}
          />
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage error={error} onRetry={fetchMessages} />
      ) : filteredMessages.length === 0 ? (
        <NoMessages />
      ) : (
        <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#BE3144] scrollbar-track-gray-200">
          <AnimatePresence>
            {filteredMessages.map((message) => (
              <MessageItem key={message._id} message={message} />
            ))}
          </AnimatePresence>
        </div>
      )}

      <FileModal modalContent={modalContent} closeModal={closeModal} />
    </div>
  );
};

const InfoItem = React.memo(({ icon, label, value }) => (
  <div className="flex items-center bg-gray-50 p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
    {React.cloneElement(icon, { className: "mr-3 text-[#BE3144]" })}
    <div>
      <span className="text-xs font-semibold text-gray-500 block">{label}</span>
      <span className="text-sm text-gray-700">{value}</span>
    </div>
  </div>
));

const SearchBar = React.memo(({ searchQuery, setSearchQuery }) => (
  <div className="flex-grow max-w-md">
    <div className="relative">
      <input
        type="text"
        placeholder="Search by name, email, message, or phone..."
        className="w-full px-4 py-3 pr-10 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BE3144] focus:border-transparent"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <FaSearch className="text-gray-400" />
      </div>
    </div>
  </div>
));

const FilterButton = React.memo(({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-2 rounded-md transition-colors duration-300 ${
      isActive
        ? 'bg-[#BE3144] text-white'
        : 'bg-white text-gray-700 hover:bg-gray-200'
    }`}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </button>
));

const FileList = React.memo(({ files, onFileClick, getFileIcon, id }) => (
  <div id={id} className="mt-2 bg-gray-50 p-4 rounded-md">
    <ul className="space-y-2">
      {files.map((file, index) => {
        const fileName = file.split('/').pop();
        const fileExtension = fileName.split('.').pop();
        return (
          <li key={index} className="flex items-center">
            {getFileIcon(fileExtension)}
            <span className="font-medium mx-2 text-gray-600">{fileName}</span>
            <button
              onClick={() => onFileClick(file)}
              className="text-[#BE3144] hover:underline flex items-center transition-colors duration-300"
            >
              Open
            </button>
          </li>
        );
      })}
    </ul>
  </div>
));

const LinkList = React.memo(({ links, id }) => (
  <div id={id} className="mt-2 bg-gray-50 p-4 rounded-md">
    <ul className="space-y-2">
      {Array.isArray(links) ? links.map((link, index) => (
        <LinkItem key={index} link={link} />
      )) : (
        <LinkItem link={links} />
      )}
    </ul>
  </div>
));

const LinkItem = React.memo(({ link }) => (
  <li>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#BE3144] hover:underline flex items-center transition-colors duration-300"
    >
      <FaLink className="inline-block mr-2" />
      {link}
    </a>
  </li>
));

const FileModal = React.memo(({ modalContent, closeModal }) => (
  modalContent && modalContent.type === 'file' && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">File Preview</h3>
          <button 
            onClick={closeModal} 
            className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
            aria-label="Close modal"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div className="overflow-y-auto max-h-[70vh] text-center">
          {modalContent.file.match(/\.(jpg|jpeg|png|gif)$/i) ? (
            <img
              src={modalContent.file}
              alt="Preview"
              className="w-full object-contain rounded-lg shadow-md mb-4"
            />
          ) : (
            <p className="text-gray-600">File preview not available for this file type.</p>
          )}
          <a
            href={modalContent.file}
            download
            className="mt-4 text-white bg-[#BE3144] p-3 rounded-md inline-block hover:bg-[#9E2234] transition-colors duration-300"
          >
            <FaDownload className="inline-block mr-2" /> Download
          </a>
        </div>
      </div>
    </div>
  )
));

const Loader = () => (
  <div className="flex justify-center items-center h-64">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-16 h-16 border-4 border-[#BE3144] border-t-transparent rounded-full"
    />
  </div>
);

const ErrorMessage = React.memo(({ error, onRetry }) => (
  <div className="text-red-500 text-center p-4 bg-red-100 rounded-md">
    <p>{error}</p>
    <button
      onClick={onRetry}
      className="mt-4 px-4 py-2 bg-[#BE3144] text-white rounded-md hover:bg-[#9E2234] transition-colors duration-300 flex items-center justify-center mx-auto"
    >
      <FaSync className="mr-2" /> Retry
    </button>
  </div>
));

const NoMessages = () => (
  <div className="text-gray-500 text-center p-4 bg-gray-100 rounded-md">
    <p>No contact messages found.</p>
  </div>
);

export default ContactMessages;

