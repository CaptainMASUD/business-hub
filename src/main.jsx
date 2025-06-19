import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contactus from './Components/ContactUS/Contactus';
import AdminPanel from './Components/Admin/AdminPanel';
import NorwayPermitServices from './Components/Services/Europe';
import Hungary from './Components/Services/Asia';
import PrivacyPolicy from './Components/Footer/Privacy';
import LoginPage from './Components/Login/Login';
import RegisterPage from './Components/Register/RegisterPage';
import { persistor, store } from './Redux/Store/Store'; // Import both store and persistor
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

// Create browser router and configure routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'europe', element: <NorwayPermitServices /> },
      { path: 'asia', element: <Hungary /> },
      { path: 'contact', element: <Contactus /> },
      { path: 'admin', element: <AdminPanel /> },
      { path: 'privacy', element: <PrivacyPolicy /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },
]);

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Provide Redux store */}
      {/* PersistGate will ensure the store is rehydrated before rendering the UI */}
      <PersistGate loading={null} persistor={persistor}>
        {/* RouterProvider ensures routing works with the configured router */}
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
