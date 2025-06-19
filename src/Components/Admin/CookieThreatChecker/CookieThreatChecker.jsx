import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaQuestionCircle, FaWifi, FaRegFrown } from 'react-icons/fa';

const CookieThreatChecker = () => {
  const [cookies, setCookies] = useState([]);
  const [threatStatus, setThreatStatus] = useState('Checking...');
  const [icon, setIcon] = useState(<FaQuestionCircle className="text-yellow-500" size={24} />);
  const [isOnline, setIsOnline] = useState(navigator.onLine); // Track online status
  const [localStorageData, setLocalStorageData] = useState([]);
  const [sessionStorageData, setSessionStorageData] = useState([]);
  const [apiStatus, setApiStatus] = useState('Checking API status...');
  
  // Function to check cookies for threats and authToken
  const analyzeCookies = (cookies) => {
    if (cookies.length === 0) {
      setThreatStatus('No cookies found.');
      setIcon(<FaExclamationCircle className="text-yellow-500" size={24} />);
      return;
    }

    // Check for authToken in cookies
    const authTokenExists = cookies.some((cookie) => cookie.includes('authToken'));

    if (authTokenExists) {
      setThreatStatus('Cookies are safe.');
      setIcon(<FaCheckCircle className="text-green-500" size={24} />);
    } else {
      const suspiciousCookies = cookies.filter((cookie) => /session|auth|token/i.test(cookie));
      if (suspiciousCookies.length > 0) {
        setThreatStatus(`Threat detected: ${suspiciousCookies.length} suspicious cookies.`);
        setIcon(<FaExclamationCircle className="text-red-500" size={24} />);
      } else {
        setThreatStatus('No threats detected. Cookies are safe.');
        setIcon(<FaCheckCircle className="text-green-500" size={24} />);
      }
    }
  };

  // Function to analyze localStorage and sessionStorage data
  const analyzeStorage = () => {
    const localStorageItems = Object.keys(localStorage);
    const sessionStorageItems = Object.keys(sessionStorage);

    setLocalStorageData(localStorageItems);
    setSessionStorageData(sessionStorageItems);

    // Check for potential threats in localStorage and sessionStorage
    const localStorageThreats = localStorageItems.filter((item) => /token|auth/i.test(item));
    const sessionStorageThreats = sessionStorageItems.filter((item) => /token|auth/i.test(item));

    if (localStorageThreats.length || sessionStorageThreats.length) {
      setThreatStatus('Warning: Sensitive data found in localStorage/sessionStorage!');
      setIcon(<FaExclamationCircle className="text-red-500" size={24} />);
    }
  };

  // UseEffect to get cookies, storage data, and analyze on mount
  useEffect(() => {
    // Retrieve cookies from the browser
    const cookieString = document.cookie;
    const cookieArray = cookieString.split('; ').filter(Boolean); // Split cookies into an array
    setCookies(cookieArray);

    // Analyze cookies and storage
    analyzeCookies(cookieArray);
    analyzeStorage();

    // Set up event listener for network status
    const handleOnlineStatus = () => setIsOnline(true);
    const handleOfflineStatus = () => setIsOnline(false);
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    // Check API status by calling a test API (simulated here)
    const checkApiStatus = async () => {
      try {
        const response = await fetch('https://najint-api.vercel.app/api/contacts'); // Example test API
        if (response.ok) {
          setApiStatus('API is up and running!');
        } else {
          setApiStatus('API is down or unreachable.');
        }
      } catch (error) {
        setApiStatus('API is down or unreachable.');
      }
    };

    checkApiStatus();

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
    };
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-full mx-auto">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Security Dashboard</h2>

      {/* Cards in a Row Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Cookie Threat Checker Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Cookie Threat Checker</h3>
          <div className="flex items-center gap-4">
            <div>{icon}</div>
            <div>
              <p className="text-gray-800 font-medium">{threatStatus}</p>
              <p className="text-gray-500 text-sm">{cookies.length} cookies found in the browser.</p>
            </div>
          </div>
        </div>

        {/* Network Status Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Network Status</h3>
          <div className="flex items-center gap-4">
            {isOnline ? (
              <FaWifi className="text-green-500" size={24} />
            ) : (
              <FaRegFrown className="text-red-500" size={24} />
            )}
            <p className={`text-lg font-medium ${isOnline ? 'text-green-800' : 'text-red-800'}`}>
              {isOnline ? 'You are online' : 'You are offline'}
            </p>
          </div>
        </div>

        {/* API Status Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">API Status</h3>
          <div className="flex items-center gap-4">
            {apiStatus.includes('up') ? (
              <FaCheckCircle className="text-green-500" size={24} />
            ) : (
              <FaExclamationCircle className="text-red-500" size={24} />
            )}
            <p className={`text-lg font-medium ${apiStatus.includes('up') ? 'text-green-800' : 'text-red-800'}`}>
              {apiStatus}
            </p>
          </div>
        </div>

        {/* LocalStorage & SessionStorage Data */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">LocalStorage & SessionStorage Data</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-700">LocalStorage:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {localStorageData.length > 0 ? (
                  localStorageData.map((item, index) => (
                    <li key={index} className="truncate">{item}</li>
                  ))
                ) : (
                  <li className="text-gray-500">No data in LocalStorage</li>
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-700">SessionStorage:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {sessionStorageData.length > 0 ? (
                  sessionStorageData.map((item, index) => (
                    <li key={index} className="truncate">{item}</li>
                  ))
                ) : (
                  <li className="text-gray-500">No data in SessionStorage</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieThreatChecker;
